require('dotenv').config();
const express = require('express');
const http = require('http');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();
const { Server } = require('socket.io');
const rateLimit = require('express-rate-limit');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' } // adapt for prod
});

const PORT = 4001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';

app.use(cors());
app.use(express.json());

// basic rate limiter for auth endpoints
const authLimiter = rateLimit({
  windowMs: 60*1000,
  max: 10,
  message: 'Too many attempts, try again later'
});

// SQLite database setup
const db = new sqlite3.Database('./capstone_auth.db', (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
  } else {
    console.log('Connected to SQLite database.');
    // Create tables if they don't exist
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password_hash TEXT,
      is_online INTEGER DEFAULT 0,
      last_seen DATETIME
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS enrollments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      userId INTEGER,
      courseName TEXT,
      enrolleeName TEXT,
      email TEXT,
      mobile TEXT,
      qualification TEXT,
      trainingCenter TEXT,
      enrollmentDate DATETIME DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (userId) REFERENCES users (id)
    )`);
  }
});

/* --- Helpers --- */
function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

async function findUserByEmail(email) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

async function findUserById(id) {
  return new Promise((resolve, reject) => {
    db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}

/* --- Auth endpoints --- */

// Register
app.post('/api/register', authLimiter, async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const existing = await findUserByEmail(email);
    if (existing) return res.status(409).json({ error: 'email already used' });

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);
    const userId = await new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO users (name, email, password_hash) VALUES (?, ?, ?)',
        [name || null, email, password_hash],
        function(err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });
    const token = signToken({ sub: userId });
    res.json({ token, user: { id: userId, name, email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// Login
app.post('/api/login', authLimiter, async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const user = await findUserByEmail(email);
    if (!user) return res.status(401).json({ error: 'invalid credentials' });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'invalid credentials' });

    const token = signToken({ sub: user.id });
    // Optionally update is_online when they login via REST (socket will also set it)
    await new Promise((resolve, reject) => {
      db.run('UPDATE users SET is_online = 1 WHERE id = ?', [user.id], (err) => {
        if (err) reject(err);
        else resolve();
      });
    });

    res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// Middleware to protect routes
function authenticateToken(req, res, next) {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: 'missing token' });
  const token = auth.split(' ')[1];
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    req.userId = payload.sub;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'invalid token' });
  }
}

// Get current user
app.get('/api/me', authenticateToken, async (req, res) => {
  const user = await findUserById(req.userId);
  if (!user) return res.status(404).json({ error: 'user not found' });
  res.json({ id: user.id, name: user.name, email: user.email, is_online: !!user.is_online, last_seen: user.last_seen });
});

// Enrollment endpoint
app.post('/api/enroll', authenticateToken, async (req, res) => {
  try {
    const { courseName, enrolleeName, email, mobile, qualification, trainingCenter } = req.body;
    const userId = req.userId;

    if (!courseName || !enrolleeName || !email || !mobile) {
      return res.status(400).json({ error: 'Required fields: courseName, enrolleeName, email, mobile' });
    }

    const enrollmentId = await new Promise((resolve, reject) => {
      db.run(
        'INSERT INTO enrollments (userId, courseName, enrolleeName, email, mobile, qualification, trainingCenter) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [userId, courseName, enrolleeName, email, mobile, qualification || null, trainingCenter || null],
        function(err) {
          if (err) reject(err);
          else resolve(this.lastID);
        }
      );
    });

    res.json({
      success: true,
      message: 'Enrollment successful',
      enrollmentId
    });
  } catch (err) {
    console.error('Enrollment error:', err);
    res.status(500).json({ error: 'Failed to process enrollment' });
  }
});

/* --- Socket.IO auth & presence --- */
// Map userId -> Set of socketIds (handles multi-tab)
const userSockets = new Map();

io.use(async (socket, next) => {
  // client should send token in socket.auth { token } during handshake
  const token = socket.handshake.auth && socket.handshake.auth.token;
  if (!token) return next(new Error('Authentication error'));
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const user = await findUserById(payload.sub);
    if (!user) return next(new Error('User not found'));
    socket.user = { id: user.id, name: user.name, email: user.email };
    next();
  } catch (err) {
    next(new Error('Authentication error'));
  }
});

io.on('connection', async (socket) => {
  const userId = socket.user.id;
  // register socket
  const set = userSockets.get(userId) || new Set();
  set.add(socket.id);
  userSockets.set(userId, set);

  // mark online in DB if first socket
  if (set.size === 1) {
    await new Promise((resolve, reject) => {
      db.run('UPDATE users SET is_online = 1 WHERE id = ?', [userId], (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
    // broadcast to others
    io.emit('user:online', { userId });
  }

  // You can emit list of online users or user info
  socket.emit('connected', { userId, socketId: socket.id });

  socket.on('disconnect', async () => {
    const set = userSockets.get(userId);
    if (set) {
      set.delete(socket.id);
      if (set.size === 0) {
        userSockets.delete(userId);
        await new Promise((resolve, reject) => {
          db.run('UPDATE users SET is_online = 0, last_seen = datetime("now") WHERE id = ?', [userId], (err) => {
            if (err) reject(err);
            else resolve();
          });
        });
        io.emit('user:offline', { userId, last_seen: new Date() });
      } else {
        userSockets.set(userId, set);
      }
    }
  });

  // Example: receive and broadcast a chat message
  socket.on('chat:message', async (payload) => {
    // validate payload...
    const msg = { from: socket.user.id, text: payload.text, at: new Date() };
    io.emit('chat:message', msg);
    // optionally persist chat in DB...
  });
});

server.listen(PORT, () => console.log(`Server listening on ${PORT}`));
