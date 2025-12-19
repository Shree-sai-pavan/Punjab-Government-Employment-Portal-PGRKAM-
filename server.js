// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// load from environment or default
const {
  MONGODB_URI = 'mongodb://localhost:27017/capstone_auth',
  PORT = 5000
} = process.env;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

// Define User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password_hash: { type: String, required: true },
  is_online: { type: Boolean, default: false },
  last_seen: Date
});

const User = mongoose.model('User', userSchema);

// helper
async function findUserByEmail(email) {
  return await User.findOne({ email });
}

// Register
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const existing = await findUserByEmail(email);
    if (existing) return res.status(409).json({ error: 'email already in use' });

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const user = new User({ name, email, password_hash });
    const savedUser = await user.save();

    return res.json({ success: true, userId: savedUser._id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
});

// Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'email and password required' });

    const user = await findUserByEmail(email);
    if (!user) return res.status(401).json({ error: 'invalid credentials' });

    const ok = await bcrypt.compare(password, user.password_hash);
    if (!ok) return res.status(401).json({ error: 'invalid credentials' });

    const token = Math.random().toString(36).slice(2) + Date.now().toString(36);

    user.is_online = true;
    await user.save();

    return res.json({ success: true, token, user: { id: user._id, name: user.name, email: user.email }});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
});

// Simple logout (mark offline)
app.post('/api/logout', async (req, res) => {
  try {
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: 'userId required' });

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'user not found' });

    user.is_online = false;
    user.last_seen = new Date();
    await user.save();

    return res.json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'server error' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
