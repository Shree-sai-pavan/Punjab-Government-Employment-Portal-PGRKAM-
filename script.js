 // Global Variables
        let currentSection = 'home';
        let chatbotOpen = false;
        let isTyping = false;
        let isLoggedIn = false;
        let currentLanguage = 'en';
        let currentChatLanguage = 'en';

        // Translation data
        const translations = {
            en: {
                helpline: "Helpline: 0172-2234567",
                accessibility: "Accessibility", 
                tagline: "Punjab Ghar Ghar Rozgar and Karobar Mission",
                not_logged_in: "Not Logged In",
                logged_in: "Logged In",
                login: "Login",
                register: "Register",
                logout: "Logout",
                home: "Home",
                services: "Services", 
                employment: "Employment",
                financial_support: "Financial Support",
                skill_training: "Skill Training",
                news: "News & Updates",
                contact: "Contact",
                hero_title: "Ghar Ghar Rozgar",
                hero_subtitle: "Empowering Punjab's Youth Through Employment Skill Development & Entrepreneurship Opportunities",
                find_jobs: "Find Jobs",
                login_required_title: "Login Required",
                login_required_message: "Please log in to your account to apply for jobs, enroll in courses, or access other services.",
                our_services: "Our Services",
                job_search: "Job Search",
                job_search_desc: "Search and apply for government and private sector jobs across Punjab. Access thousands of opportunities matching your skills and qualifications.",
                search_jobs: "Search Jobs",
                skill_development: "Skill Development",
                skill_development_desc: "Enhance your employability through our comprehensive skill training programs aligned with industry requirements.",
                view_courses: "View Courses",
                financial_support_desc: "Get financial assistance and funding support for entrepreneurs and small business owners through various government schemes.",
                learn_more: "Learn More",
                job_fairs: "Job Fairs",
                job_fairs_desc: "Participate in regular job fairs organized across Punjab districts to connect directly with employers.",
                view_schedule: "View Schedule",
                registered_seekers: "Registered Job Seekers",
                active_employers: "Active Employers", 
                jobs_placed: "Jobs Placed",
                training_centers: "Training Centers",
                pgrkam_assistant: "PGRKAM Assistant",
                type_message: "Type your message...",
                login_to_pgrkam: "Login to PGRKAM",
                email_mobile: "Email / Mobile Number:",
                password: "Password:",
                remember_me: "Remember me",
                forgot_password: "Forgot Password?",
                no_account: "Don't have an account?",
                register_here: "Register here",
                register_pgrkam: "Register with PGRKAM",
                course_enrollment: "Course Enrollment",
                apply_job: "Apply for Job",
                enroll_now: "Enroll Now",
                apply_now: "Apply Now",
                quick_links: "Quick Links",
                footer_text: "© 2024 Punjab Ghar Ghar Rozgar and Karobar Mission. All rights reserved. | Developed by Department of Employment Generation, Skill Development and Training, Government of Punjab",
                // Job application form translations
                job_title: "Job Title",
                company: "Company",
                full_name: "Full Name",
                full_name_placeholder: "Enter your full name",
                email_placeholder: "Enter your email address",
                mobile_number: "Mobile Number",
                mobile_placeholder: "Enter your mobile number",
                experience_years: "Experience (in years)",
                experience_placeholder: "Enter years of experience",
                current_salary: "Current Salary (if applicable)",
                salary_placeholder: "Enter current salary",
                qualification: "Highest Qualification",
                select_qualification: "Select qualification",
                skills: "Key Skills",
                skills_placeholder: "e.g., Java, Marketing, Communication",
                application_terms: "I confirm that all information provided is accurate and I agree to the terms of application",
                submit_application: "Submit Application",
                application_success: "Application submitted successfully! You will hear back within 3-5 business days.",
                login_success: "Login successful! Welcome to PGRKAM.",
                logout_success: "Logged out successfully!",
                enrollment_success: "Enrollment successful for",
                message_sent: "Message sent successfully! We will get back to you within 24 hours.",
                network_error: "Network error. Please try again.",
                loading_jobs: "Loading job opportunities...",
                fill_required_fields: "Please fill all required fields.",
                application_submitted: "Your job application has been successfully submitted!",
                confirmation_email: "You will receive a confirmation email shortly."
            },
            hi: {
                helpline: "हेल्पलाइन: 0172-2234567",
                accessibility: "पहुंच", 
                tagline: "पंजाब घर घर रोजगार और कारोबार मिशन",
                not_logged_in: "लॉग इन नहीं हैं",
                logged_in: "लॉग इन हैं",
                login: "लॉग इन",
                register: "पंजीकरण",
                logout: "लॉग आउट",
                home: "होम",
                services: "सेवाएं", 
                employment: "रोजगार",
                skill_training: "कौशल प्रशिक्षण",
                financial_support: "वित्तीय सहायता",
                news: "समाचार और अपडेट",
                contact: "संपर्क",
                hero_title: "घर घर रोजगार",
                hero_subtitle: "रोजगार, कौशल विकास और उद्यमिता के अवसरों के माध्यम से पंजाब के युवाओं को सशक्त बनाना",
                find_jobs: "नौकरी खोजें",
                login_required_title: "लॉग इन आवश्यक",
                login_required_message: "नौकरियों के लिए आवेदन करने, पाठ्यक्रमों में दाखिला लेने या अन्य सेवाओं का उपयोग करने के लिए कृपया अपने खाते में लॉग इन करें।",
                our_services: "हमारी सेवाएं",
                job_search: "नौकरी खोज",
                job_search_desc: "पंजाब भर में सरकारी और निजी क्षेत्र की नौकरियों की खोज करें और उनके लिए आवेदन करें। अपने कौशल और योग्यता से मेल खाने वाले हजारों अवसरों तक पहुंच।",
                search_jobs: "नौकरी खोजें",
                skill_development: "कौशल विकास",
                skill_development_desc: "उद्योग आवश्यकताओं के साथ संरेखित हमारे व्यापक कौशल प्रशिक्षण कार्यक्रमों के माध्यम से अपनी रोजगार क्षमता बढ़ाएं।",
                view_courses: "पाठ्यक्रम देखें",
                financial_support_desc: "सरकारी योजनाओं के माध्यम से उद्यमियों और छोटे व्यवसाय मालिकों के लिए वित्तीय सहायता और फंडिंग समर्थन प्राप्त करें।",
                learn_more: "और जानें",
                job_fairs: "जॉब फेयर",
                job_fairs_desc: "नियोक्ताओं से सीधे जुड़ने के लिए पंजाब जिलों में आयोजित नियमित जॉब फेयर में भाग लें।",
                view_schedule: "शेड्यूल देखें",
                registered_seekers: "पंजीकृत नौकरी चाहने वाले",
                active_employers: "सक्रिय नियोक्ता", 
                jobs_placed: "नौकरी दी गई",
                training_centers: "प्रशिक्षण केंद्र",
                pgrkam_assistant: "पीजीआरकेएएम सहायक",
                type_message: "अपना संदेश टाइप करें...",
                login_to_pgrkam: "पीजीआरकेएएम में लॉग इन करें",
                email_mobile: "ईमेल / मोबाइल नंबर:",
                password: "पासवर्ड:",
                remember_me: "मुझे याद रखें",
                forgot_password: "पासवर्ड भूल गए?",
                no_account: "कोई खाता नहीं है?",
                register_here: "यहां पंजीकरण करें",
                register_pgrkam: "पीजीआरकेएएम के साथ पंजीकरण करें",
                course_enrollment: "पाठ्यक्रम नामांकन",
                apply_job: "नौकरी के लिए आवेदन करें",
                enroll_now: "अभी नामांकन करें",
                apply_now: "अभी आवेदन करें",
                quick_links: "त्वरित लिंक",
                footer_text: "© 2024 पंजाब घर घर रोजगार और कारोबार मिशन। सभी अधिकार सुरक्षित हैं।",
                // Job application form translations
                job_title: "नौकरी का शीर्षक",
                company: "कंपनी",
                full_name: "पूरा नाम",
                full_name_placeholder: "अपना पूरा नाम दर्ज करें",
                email_placeholder: "अपना ईमेल पता दर्ज करें",
                mobile_number: "मोबाइल नंबर",
                mobile_placeholder: "अपना मोबाइल नंबर दर्ज करें",
                experience_years: "अनुभव (वर्षों में)",
                experience_placeholder: "अनुभव के वर्ष दर्ज करें",
                current_salary: "वर्तमान वेतन (यदि लागू हो)",
                salary_placeholder: "वर्तमान वेतन दर्ज करें",
                qualification: "उच्चतम योग्यता",
                select_qualification: "योग्यता चुनें",
                skills: "मुख्य कौशल",
                skills_placeholder: "जैसे जावा, मार्केटिंग, संचार",
                application_terms: "मैं पुष्टि करता हूं कि प्रदान की गई सभी जानकारी सही है और मैं आवेदन की शर्तों से सहमत हूं",
                submit_application: "आवेदन जमा करें",
                application_success: "आवेदन सफलतापूर्वक जमा हुआ! आप 3-5 कार्य दिवसों के भीतर उत्तर सुनेंगे।",
                login_success: "लॉगिन सफल! PGRKAM में आपका स्वागत है।",
                logout_success: "सफलतापूर्वक लॉग आउट हो गया!",
                enrollment_success: "नामांकन सफल",
                message_sent: "संदेश सफलतापूर्वक भेजा गया! हम 24 घंटों के भीतर आपसे संपर्क करेंगे।",
                network_error: "नेटवर्क त्रुटि। कृपया पुनः प्रयास करें।",
                loading_jobs: "नौकरी के अवसर लोड हो रहे हैं..."
            },
            pa: {
                helpline: "ਹੈੱਲਪਲਾਈਨ: 0172-2234567",
                accessibility: "ਪਹੁੰਚ", 
                tagline: "ਪੰਜਾਬ ਘਰ ਘਰ ਰੁਜ਼ਗਾਰ ਅਤੇ ਕਾਰੋਬਾਰ ਮਿਸ਼ਨ",
                not_logged_in: "ਲਾਗ ਇਨ ਨਹੀਂ ਹਾਂ",
                logged_in: "ਲਾਗ ਇਨ ਹਾਂ",
                login: "ਲਾਗ ਇਨ",
                register: "ਰਜਿਸਟਰ",
                logout: "ਲਾਗ ਆਊਟ",
                home: "ਘਰ",
                services: "ਸੇਵਾਵਾਂ", 
                employment: "ਰੁਜ਼ਗਾਰ",
                skill_training: "ਹੁਨਰ ਸਿਖਲਾਈ",
                financial_support: "ਵਿੱਤੀ ਸਹਾਇਤਾ",
                news: "ਖ਼ਬਰਾਂ ਅਤੇ ਅਪਡੇਟਸ",
                contact: "ਸੰਪਰਕ",
                hero_title: "ਘਰ ਘਰ ਰੁਜ਼ਗਾਰ",
                hero_subtitle: "ਰੁਜ਼ਗਾਰ, ਹੁਨਰ ਵਿਕਾਸ ਅਤੇ ਉੱਦਮਤਾ ਦੇ ਮੌਕਿਆਂ ਰਾਹੀਂ ਪੰਜਾਬ ਦੇ ਨੌਜਵਾਨਾਂ ਨੂੰ ਸ਼ਕਤੀਸ਼ਾਲੀ ਬਣਾਉਣਾ",
                find_jobs: "ਨੌਕਰੀਆਂ ਲੱਭੋ",
                login_required_title: "ਲਾਗ ਇਨ ਲੋੜੀਂਦਾ",
                login_required_message: "ਨੌਕਰੀਆਂ ਲਈ ਅਰਜ਼ੀ ਦੇਣ, ਕੋਰਸਾਂ ਵਿੱਚ ਦਾਖਲਾ ਲੈਣ ਜਾਂ ਹੋਰ ਸੇਵਾਵਾਂ ਦੀ ਵਰਤੋਂ ਕਰਨ ਲਈ ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੇ ਖਾਤੇ ਵਿੱਚ ਲਾਗ ਇਨ ਕਰੋ।",
                our_services: "ਸਾਡੀਆਂ ਸੇਵਾਵਾਂ",
                job_search: "ਨੌਕਰੀ ਖੋਜ",
                job_search_desc: "ਪੰਜਾਬ ਭਰ ਵਿੱਚ ਸਰਕਾਰੀ ਅਤੇ ਨਿੱਜੀ ਖੇਤਰ ਦੀਆਂ ਨੌਕਰੀਆਂ ਦੀ ਖੋਜ ਕਰੋ ਅਤੇ ਉਨ੍ਹਾਂ ਲਈ ਅਰਜ਼ੀ ਦਿਓ। ਆਪਣੇ ਹੁਨਰ ਅਤੇ ਯੋਗਤਾ ਨਾਲ ਮੇਲ ਖਾਂਦੇ ਹਜ਼ਾਰਾਂ ਮੌਕਿਆਂ ਤੱਕ ਪਹੁੰਚ।",
                search_jobs: "ਨੌਕਰੀਆਂ ਖੋਜੋ",
                skill_development: "ਹੁਨਰ ਵਿਕਾਸ",
                skill_development_desc: "ਉਦਯੋਗਿਕ ਲੋੜਾਂ ਦੇ ਨਾਲ ਮਿਲਦੇ ਸਾਡੇ ਵਿਆਪਕ ਹੁਨਰ ਸਿਖਲਾਈ ਪ੍ਰੋਗਰਾਮਾਂ ਰਾਹੀਂ ਆਪਣੀ ਰੋਜ਼ਗਾਰ ਸਮਰੱਥਾ ਵਧਾਓ।",
                view_courses: "ਕੋਰਸ ਵੇਖੋ",
                financial_support_desc: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਰਾਹੀਂ ਉੱਦਮੀਆਂ ਅਤੇ ਛੋਟੇ ਕਾਰੋਬਾਰ ਮਾਲਕਾਂ ਲਈ ਵਿੱਤੀ ਸਹਾਇਤਾ ਅਤੇ ਫੰਡਿੰਗ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਕਰੋ।",
                learn_more: "ਹੋਰ ਜਾਣੋ",
                job_fairs: "ਨੌਕਰੀ ਮੇਲੇ",
                job_fairs_desc: "ਮਾਲਕਾਂ ਨਾਲ ਸਿੱਧੇ ਜੁੜਨ ਲਈ ਪੰਜਾਬ ਜ਼ਿਲ੍ਹਿਆਂ ਵਿੱਚ ਆਯੋਜਿਤ ਨਿਯਮਤ ਨੌਕਰੀ ਮੇਲਿਆਂ ਵਿੱਚ ਭਾਗ ਲਓ।",
                view_schedule: "ਸਮਾਂ-ਸਾਰਣੀ ਵੇਖੋ",
                registered_seekers: "ਰਜਿਸਟਰਡ ਨੌਕਰੀ ਖੋਜਣ ਵਾਲੇ",
                active_employers: "ਸਰਗਰਮ ਮਾਲਕ", 
                jobs_placed: "ਨੌਕਰੀਆਂ ਮਿਲੀਆਂ",
                training_centers: "ਸਿਖਲਾਈ ਕੇਂਦਰ",
                pgrkam_assistant: "ਪੀਜੀਆਰਕੇਏਐਮ ਸਹਾਇਕ",
                type_message: "ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...",
                login_to_pgrkam: "ਪੀਜੀਆਰਕੇਏਐਮ ਵਿੱਚ ਲਾਗ ਇਨ ਕਰੋ",
                email_mobile: "ਈਮੇਲ / ਮੋਬਾਈਲ ਨੰਬਰ:",
                password: "ਪਾਸਵਰਡ:",
                remember_me: "ਮੈਨੂੰ ਯਾਦ ਰੱਖੋ",
                forgot_password: "ਪਾਸਵਰਡ ਭੁੱਲ ਗਏ?",
                no_account: "ਕੋਈ ਖਾਤਾ ਨਹੀਂ ਹੈ?",
                register_here: "ਇੱਥੇ ਰਜਿਸਟਰ ਕਰੋ",
                register_pgrkam: "ਪੀਜੀਆਰਕੇਏਐਮ ਨਾਲ ਰਜਿਸਟਰ ਕਰੋ",
                course_enrollment: "ਕੋਰਸ ਦਾਖਲਾ",
                apply_job: "ਨੌਕਰੀ ਲਈ ਅਰਜ਼ੀ ਦਿਓ",
                enroll_now: "ਹੁਣੇ ਦਾਖਲਾ ਲਓ",
                apply_now: "ਹੁਣੇ ਅਰਜ਼ੀ ਦਿਓ",
                quick_links: "ਤਵਰਿਤ ਲਿੰਕ",
                footer_text: "© 2024 ਪੰਜਾਬ ਘਰ ਘਰ ਰੁਜ਼ਗਾਰ ਅਤੇ ਕਾਰੋਬਾਰ ਮਿਸ਼ਨ। ਸਾਰੇ ਅਧਿਕਾਰ ਸੁਰੱਖਿਅਤ ਹਨ।",
                // Job application form translations
                job_title: "ਨੌਕਰੀ ਦਾ ਸਿਰਲੇਖ",
                company: "ਕੰਪਨੀ",
                full_name: "ਪੂਰਾ ਨਾਮ",
                full_name_placeholder: "ਆਪਣਾ ਪੂਰਾ ਨਾਮ ਦਰਜ ਕਰੋ",
                email_placeholder: "ਆਪਣਾ ਈਮੇਲ ਪਤਾ ਦਰਜ ਕਰੋ",
                mobile_number: "ਮੋਬਾਈਲ ਨੰਬਰ",
                mobile_placeholder: "ਆਪਣਾ ਮੋਬਾਈਲ ਨੰਬਰ ਦਰਜ ਕਰੋ",
                experience_years: "ਤਜਰਬਾ (ਸਾਲਾਂ ਵਿੱਚ)",
                experience_placeholder: "ਤਜਰਬੇ ਦੇ ਸਾਲ ਦਰਜ ਕਰੋ",
                current_salary: "ਮੌਜੂਦਾ ਤਨਖਾਹ (ਜੇ ਲਾਗੂ ਹੋਵੇ)",
                salary_placeholder: "ਮੌਜੂਦਾ ਤਨਖਾਹ ਦਰਜ ਕਰੋ",
                qualification: "ਸਰਵੋਤਮ ਯੋਗਤਾ",
                select_qualification: "ਯੋਗਤਾ ਚੁਣੋ",
                skills: "ਮੁੱਖ ਹੁਨਰ",
                skills_placeholder: "ਜਿਵੇਂ ਜਾਵਾ, ਮਾਰਕੀਟਿੰਗ, ਸੰਚਾਰ",
                application_terms: "ਮੈਂ ਪੁਸ਼ਟੀ ਕਰਦਾ ਹਾਂ ਕਿ ਸਾਰੀ ਜਾਣਕਾਰੀ ਸਹੀ ਹੈ ਅਤੇ ਮੈਂ ਅਰਜ਼ੀ ਦੀਆਂ ਸ਼ਰਤਾਂ ਨਾਲ ਸਹਿਮਤ ਹਾਂ",
                submit_application: "ਅਰਜ਼ੀ ਜਮ੍ਹਾਂ ਕਰੋ",
                application_success: "ਅਰਜ਼ੀ ਸਫਲਤਾਪੂਰਵਕ ਜਮ੍ਹਾਂ ਹੋਈ! ਤੁਸੀਂ 3-5 ਕਾਰਜ ਦਿਨਾਂ ਵਿੱਚ ਜਵਾਬ ਸੁਣੋਗੇ।",
                login_success: "ਲਾਗਇਨ ਸਫਲ! PGRKAM ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ।",
                logout_success: "ਸਫਲਤਾਪੂਰਵਕ ਲਾਗ ਆਊਟ ਹੋ ਗਏ!",
                enrollment_success: "ਦਾਖਲਾ ਸਫਲ",
                message_sent: "ਸੰਦੇਸ਼ ਸਫਲਤਾਪੂਰਵਕ ਭੇਜਿਆ ਗਿਆ! ਅਸੀਂ 24 ਘੰਟਿਆਂ ਵਿੱਚ ਤੁਹਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰਾਂਗੇ।",
                network_error: "ਨੈਟਵਰਕ ਗਲਤੀ। ਕਿਰਪਾ ਕਰਕੇ ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",
                loading_jobs: "ਨੌਕਰੀ ਦੇ ਮੌਕੇ ਲੋਡ ਹੋ ਰਹੇ ਹਨ..."
            }
        };

        // Chat responses in multiple languages
        const chatResponses = {
            en: {
                welcome: "Hello! I'm your PGRKAM Assistant. I can help you with information about jobs, training programs, registration, and more. How can I assist you today?",
                jobs: 'I can help you find jobs! PGRKAM offers thousands of job opportunities across Punjab. You can:<br>• Search jobs by location and qualification<br>• Apply online directly<br>• Get job alerts<br><br><a href="#" onclick="requireLogin(() => showSection(\'employment\'))" style="color: #1e3a8a; text-decoration: underline;">Click here to search for jobs</a> or would you like me to show you how?',
                training: 'PGRKAM offers various skill development programs:<br>• Digital Marketing (3 months)<br>• Computer Hardware & Networking (4 months)<br>• Beautician & Cosmetology (6 months)<br>• Electrician Training (5 months)<br>• Tailoring & Fashion Design (4 months)<br><br>All courses are FREE with certification! <a href="#" onclick="requireLogin(() => showSection(\'training\'))" style="color: #1e3a8a; text-decoration: underline;">View available courses</a>. Which course interests you?',
                register: 'To register with PGRKAM:<br>1. <a href="#" onclick="openModal(\'registerModal\')" style="color: #1e3a8a; text-decoration: underline;">Click here to register</a><br>2. Choose Job Seeker or Employer<br>3. Fill in your details<br>4. Verify your email<br><br>Registration is completely free! Would you like help with the registration process?',
                contact: 'You can reach PGRKAM through:<br>📞 Helpline: 0172-2234567<br>✉️ Email: <a href="mailto:info@pgrkam.com" style="color: #1e3a8a; text-decoration: underline;">info@pgrkam.com</a><br>🌐 Website: <a href="https://www.pgrkam.com" target="_blank" style="color: #1e3a8a; text-decoration: underline;">www.pgrkam.com</a><br>📍 Office: Employment Dept., Punjab<br><br>Support hours: Monday-Friday, 9 AM to 6 PM',
                login_required: 'You need to login first to access this service. <a href="#" onclick="openModal(\'loginModal\')" style="color: #1e3a8a; text-decoration: underline;">Click here to login</a> or would you like me to help you with the login process?',
                default: 'Thank you for your question! I can help you with information about:<br><br>🔍 <strong><a href="#" onclick="requireLogin(() => showSection(\'employment\'))" style="color: #1e3a8a; text-decoration: underline;">Jobs</a></strong> - Search and apply for opportunities<br>🎓 <strong><a href="#" onclick="requireLogin(() => showSection(\'training\'))" style="color: #1e3a8a; text-decoration: underline;">Training</a></strong> - Skill development courses<br>🏢 <strong><a href="#" onclick="requireLogin(() => showSection(\'financial\'))" style="color: #1e3a8a; text-decoration: underline;">Financial Support</a></strong> - Funding and assistance<br>📝 <strong><a href="#" onclick="openModal(\'registerModal\')" style="color: #1e3a8a; text-decoration: underline;">Registration</a></strong> - How to sign up<br>📞 <strong><a href="#" onclick="showSection(\'contact\')" style="color: #1e3a8a; text-decoration: underline;">Contact</a></strong> - Get in touch with our team<br><br>What would you like to know more about?'
            },
            hi: {
                welcome: "नमस्कार! मैं आपका PGRKAM सहायक हूँ। मैं नौकरियों, प्रशिक्षण कार्यक्रमों, पंजीकरण और अधिक के बारे में जानकारी में आपकी सहायता कर सकता हूँ। आज मैं आपकी कैसे सहायता कर सकता हूँ?",
                jobs: 'मैं आपको नौकरी खोजने में मदद कर सकता हूँ! PGRKAM पंजाब भर में हजारों नौकरी के अवसर प्रदान करता है। आप:<br>• स्थान और योग्यता के अनुसार नौकरी खोज सकते हैं<br>• सीधे ऑनलाइन आवेदन कर सकते हैं<br>• जॉब अलर्ट प्राप्त कर सकते हैं<br><br>क्या आप चाहते हैं कि मैं आपको नौकरी खोजने का तरीका दिखाऊं?',
                training: 'PGRKAM विभिन्न कौशल विकास कार्यक्रम प्रदान करता है:<br>• डिजिटल मार्केटिंग (3 महीने)<br>• कंप्यूटर हार्डवेयर और नेटवर्किंग (4 महीने)<br>• ब्यूटीशियन और कॉस्मेटोलॉजी (6 महीने)<br>• इलेक्ट्रीशियन प्रशिक्षण (5 महीने)<br>• दर्जी और फैशन डिजाइन (4 महीने)<br><br>सभी पाठ्यक्रम प्रमाणन के साथ मुफ्त हैं! कौन सा पाठ्यक्रम आपकी रुचि का है?',
                register: 'PGRKAM के साथ पंजीकरण करने के लिए:<br>1. शीर्ष पर "पंजीकरण" बटन पर क्लिक करें<br>2. नौकरी चाहने वाला या नियोक्ता चुनें<br>3. अपनी जानकारी भरें<br>4. अपना ईमेल सत्यापित करें<br><br>पंजीकरण बिल्कुल मुफ्त है! क्या आप पंजीकरण प्रक्रिया में सहायता चाहते हैं?',
                contact: 'आप PGRKAM से संपर्क कर सकते हैं:<br>📞 हेल्पलाइन: 0172-2234567<br>✉️ ईमेल: info@pgrkam.com<br>🌐 वेबसाइट: www.pgrkam.com<br>📍 कार्यालय: रोजगार विभाग, पंजाब<br><br>सहायता समय: सोमवार-शुक्रवार, सुबह 9 बजे से शाम 6 बजे तक',
                login_required: 'इस सेवा तक पहुंचने के लिए आपको पहले लॉगिन करना होगा। क्या आप चाहते हैं कि मैं लॉगिन प्रक्रिया में आपकी सहायता करूं?',
                default: 'आपके प्रश्न के लिए धन्यवाद! मैं आपकी सहायता कर सकता हूँ:<br><br>🔍 <strong>नौकरियां</strong> - अवसरों की खोज और आवेदन<br>🎓 <strong>प्रशिक्षण</strong> - कौशल विकास पाठ्यक्रम<br>🏢 <strong>वित्तीय सहायता</strong> - फंडिंग और सहायता...<br>📝 <strong>पंजीकरण</strong> - साइन अप कैसे करें<br>📞 <strong>संपर्क</strong> - हमारी टीम से संपर्क करें<br><br>आप किस बारे में और जानना चाहेंगे?'
            },
            pa: {
                welcome: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ PGRKAM ਸਹਾਇਕ ਹਾਂ। ਮੈਂ ਨੌਕਰੀਆਂ, ਸਿਖਲਾਈ ਪ੍ਰੋਗਰਾਮਾਂ, ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਅਤੇ ਹੋਰ ਬਾਰੇ ਜਾਣਕਾਰੀ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਸਹਾਇਤਾ ਕਰ ਸਕਦਾ ਹਾਂ?",
                jobs: 'ਮੈਂ ਤੁਹਾਨੂੰ ਨੌਕਰੀਆਂ ਲੱਭਣ ਵਿੱਚ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ! PGRKAM ਪੰਜਾਬ ਭਰ ਵਿੱਚ ਹਜ਼ਾਰਾਂ ਨੌਕਰੀ ਦੇ ਮੌਕੇ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ। ਤੁਸੀਂ:<br>• ਸਥਾਨ ਅਤੇ ਯੋਗਤਾ ਦੇ ਅਨੁਸਾਰ ਨੌਕਰੀਆਂ ਖੋਜ ਸਕਦੇ ਹੋ<br>• ਸਿੱਧੇ ਔਨਲਾਈਨ ਅਰਜ਼ੀ ਦੇ ਸਕਦੇ ਹੋ<br>• ਜਾਬ ਅਲਰਟ ਪ੍ਰਾਪਤ ਕਰ ਸਕਦੇ ਹੋ<br><br>ਕੀ ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਮੈਂ ਤੁਹਾਨੂੰ ਨੌਕਰੀਆਂ ਖੋਜਣ ਦਾ ਤਰੀਕਾ ਦਿਖਾਵਾਂ?',
                training: 'PGRKAM ਵੱਖ-ਵੱਖ ਹੁਨਰ ਵਿਕਾਸ ਪ੍ਰੋਗਰਾਮ ਪ੍ਰਦਾਨ ਕਰਦਾ ਹੈ:<br>• ਡਿਜੀਟਲ ਮਾਰਕੀਟਿੰਗ (3 ਮਹੀਨੇ)<br>• ਕੰਪਿਊਟਰ ਹਾਰਡਵੇਅਰ ਅਤੇ ਨੈੱਟਵਰਕਿੰਗ (4 ਮਹੀਨੇ)<br>• ਬਿਊਟੀਸ਼ਿਅਨ ਅਤੇ ਕਾਸਮੈਟੋਲੋਜੀ (6 ਮਹੀਨੇ)<br>• ਇਲੈਕਟ੍ਰੀਸ਼ਿਅਨ ਸਿਖਲਾਈ (5 ਮਹੀਨੇ)<br>• ਦਰਜ਼ੀਗਰੀ ਅਤੇ ਫੈਸ਼ਨ ਡਿਜ਼ਾਈਨ (4 ਮਹੀਨੇ)<br><br>ਸਾਰੇ ਕੋਰਸ ਸਰਟੀਫਿਕੇਸ਼ਨ ਦੇ ਨਾਲ ਮੁਫ਼ਤ ਹਨ! ਕਿਹੜਾ ਕੋਰਸ ਤੁਹਾਡੀ ਦਿਲਚਸਪੀ ਦਾ ਹੈ?',
                register: 'PGRKAM ਨਾਲ ਰਜਿਸਟਰ ਕਰਨ ਲਈ:<br>1. ਉੱਪਰ "ਰਜਿਸਟਰ" ਬਟਨ \'ਤੇ ਕਲਿੱਕ ਕਰੋ<br>2. ਨੌਕਰੀ ਖੋਜਣ ਵਾਲਾ ਜਾਂ ਮਾਲਕ ਚੁਣੋ<br>3. ਆਪਣੀ ਜਾਣਕਾਰੀ ਭਰੋ<br>4. ਆਪਣਾ ਈਮੇਲ ਸੱਚ ਕਰੋ<br><br>ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਬਿਲਕੁਲ ਮੁਫ਼ਤ ਹੈ! ਕੀ ਤੁਸੀਂ ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਮਦਦ ਚਾਹੁੰਦੇ ਹੋ?',
                contact: 'ਤੁਸੀਂ PGRKAM ਨਾਲ ਸੰਪਰਕ ਕਰ ਸਕਦੇ ਹੋ:<br>📞 ਹੈਲਪਲਾਈਨ: 0172-2234567<br>✉️ ਈਮੇਲ: info@pgrkam.com<br>🌐 ਵੈਬਸਾਈਟ: www.pgrkam.com<br>📍 ਦਫ਼ਤਰ: ਰੁਜ਼ਗਾਰ ਵਿਭਾਗ, ਪੰਜਾਬ<br><br>ਸਹਾਇਤਾ ਸਮਾਂ: ਸੋਮਵਾਰ-ਸ਼ੁਕਰਵਾਰ, ਸਵੇਰੇ 9 ਤੋਂ ਸ਼ਾਮ 6 ਵਜੇ ਤੱਕ',
                login_required: 'ਇਸ ਸੇਵਾ ਤੱਕ ਪਹੁੰਚਣ ਲਈ ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਲਾਗਇਨ ਕਰਨਾ ਹੋਵੇਗਾ। ਕੀ ਤੁਸੀਂ ਚਾਹੁੰਦੇ ਹੋ ਕਿ ਮੈਂ ਲਾਗਇਨ ਪ੍ਰਕਿਰਿਆ ਵਿੱਚ ਤੁਹਾਡੀ ਮਦਦ ਕਰਾਂ?',
                default: 'ਤੁਹਾਡੇ ਸਵਾਲ ਲਈ ਧੰਨਵਾਦ! ਮੈਂ ਤੁਹਾਡੀ ਸਹਾਇਤਾ ਕਰ ਸਕਦਾ ਹਾਂ:<br><br>🔍 <strong>ਨੌਕਰੀਆਂ</strong> - ਮੌਕਿਆਂ ਦੀ ਖੋਜ ਅਤੇ ਅਰਜ਼ੀ<br>🎓 <strong>ਸਿਖਲਾਈ</strong> - ਹੁਨਰ ਵਿਕਾਸ ਕੋਰਸ<br>🏢 <strong>ਵਿੱਤੀ ਸਹਾਇਤਾ</strong> - ਫੰਡਿੰਗ ਅਤੇ ਸਹਾਇਤਾ...<br>📝 <strong>ਰਜਿਸਟ੍ਰੇਸ਼ਨ</strong> - ਸਾਈਨ ਅਪ ਕਿਵੇਂ ਕਰਨਾ<br>📞 <strong>ਸੰਪਰਕ</strong> - ਸਾਡੀ ਟੀਮ ਨਾਲ ਸੰਪਰਕ<br><br>ਤੁਸੀਂ ਕਿਸ ਬਾਰੇ ਹੋਰ ਜਾਣਨਾ ਚਾਹੋਗੇ?'
            }
        };

        // Default job data (fallback)
        const defaultJobsData = [
            {
                id: 1,
                title: "Software Engineer",
                company: "TechCorp Solutions",
                location: "Ludhiana",
                experience: "2-4",
                sector: "it",
                salary: "₹15-20 LPA",
                type: "Full Time",
                description: "Looking for a skilled software engineer with experience in Java, Spring Boot, and React. The candidate should have strong problem-solving skills and ability to work in agile environment.",
                postedDate: "2025-12-15"
            },
            {
                id: 2,
                title: "Primary School Teacher",
                company: "Government of Punjab",
                location: "Amritsar",
                experience: "fresher",
                sector: "government",
                salary: "₹25,000-35,000",
                type: "Full Time",
                description: "B.Ed qualified teacher required for primary school. Preference will be given to candidates with knowledge of Punjabi and Hindi languages.",
                postedDate: "2025-12-14"
            },
            {
                id: 3,
                title: "Marketing Executive",
                company: "Punjab Industries Ltd",
                location: "Jalandhar",
                experience: "1-3",
                sector: "private",
                salary: "₹3-5 LPA",
                type: "Full Time",
                description: "Responsible for developing marketing strategies, managing social media campaigns, and coordinating with sales team. MBA in Marketing preferred.",
                postedDate: "2025-12-13"
            },
            {
                id: 4,
                title: "Data Entry Operator",
                company: "Punjab State Board",
                location: "Patiala",
                experience: "fresher",
                sector: "government",
                salary: "₹15,000-20,000",
                type: "Contract",
                description: "Accurate data entry and computer skills required. Typing speed of minimum 30 WPM necessary. Graduate with computer knowledge preferred.",
                postedDate: "2025-12-12"
            },
            {
                id: 5,
                title: "Nurse",
                company: "Civil Hospital",
                location: "Ludhiana",
                experience: "1-2",
                sector: "healthcare",
                salary: "₹25,000-45,000",
                type: "Full Time",
                description: "ANM/GNM qualified nurse required for general ward duties. Experience in emergency care will be an added advantage.",
                postedDate: "2025-12-11"
            },
            {
                id: 6,
                title: "Accountant",
                company: "Punjab Agro Industries",
                location: "Bathinda",
                experience: "3-5",
                sector: "private",
                salary: "₹4-10 LPA",
                type: "Full Time",
                description: "CA/CMA qualified accountant for maintaining books of accounts, tax compliance, and financial reporting. Tally and Excel proficiency required.",
                postedDate: "2025-12-10"
            },
            {
                 id: 7,
                title: "High  School Teacher",
                company: "Government of Punjab",
                location: "Amritsar",
                experience: "fresher",
                sector: "government",
                salary: "₹25,000-55,000",
                type: "Full Time",
                description: "B.Ed qualified teacher required for primary school. Preference will be given to candidates with knowledge of Punjabi and Hindi languages.",
                postedDate: "2025-12-14"
            },
            {
             id: 8,
                title: "web developer",
                company: "Opentext",
                location: "Amritsar",
                experience: "fresher",
                sector: "Private",
                salary: "₹8-10 LPA",
                type: "Full Time",
                description: "Looking for a skilled developer with experience in Java, Spring Boot, and React. The candidate should have strong problem-solving skills and ability to work in agile environmen.",
                postedDate: "2025-12-14"
              },
        ];

        // Load jobs from localStorage or use default
     function getJobsData() {
    // First check if jobsData exists (synced from admin)
    let jobsData = JSON.parse(localStorage.getItem('jobsData') || 'null');
    
    // If not, check jobListings (admin panel storage)
    if (!jobsData || jobsData.length === 0) {
        jobsData = JSON.parse(localStorage.getItem('jobListings') || 'null');
        
        // If found in jobListings, sync it to jobsData
        if (jobsData && jobsData.length > 0) {
            localStorage.setItem('jobsData', JSON.stringify(jobsData));
        }
    }
    
    // If still no data, use default
    if (!jobsData || jobsData.length === 0) {
        jobsData = defaultJobsData;
        // Initialize both storage keys
        localStorage.setItem('jobsData', JSON.stringify(jobsData));
        localStorage.setItem('jobListings', JSON.stringify(jobsData));
    }
    
    return jobsData;
}

let jobsData = getJobsData();

// Function to refresh jobs data (call this when returning from admin panel)
function refreshJobsData() {
    jobsData = getJobsData();
    if (currentSection === 'employment') {
        loadJobs();
    }
}

// Function to save jobs to localStorage
function saveJobsData() {
    localStorage.setItem('jobsData', JSON.stringify(jobsData));
    localStorage.setItem('jobListings', JSON.stringify(jobsData));
}

// Job Functions
function loadJobs(filteredJobs = null) {
    // Refresh jobs data to get latest from admin
    jobsData = getJobsData();
    
    const jobListings = document.getElementById('jobListings');
    const jobs = filteredJobs || jobsData;

    if (jobs.length === 0) {
        jobListings.innerHTML = `
            <div class="content-card" style="text-align: center; padding: 3rem;">
                <i class="fas fa-search" style="font-size: 3rem; color: #9ca3af; margin-bottom: 1rem;"></i>
                <h3>No jobs found</h3>
                <p>Try adjusting your filters or search criteria.</p>
            </div>
        `;
        return;
    }

    jobListings.innerHTML = jobs.map(job => `
        <div class="job-card">
            <div class="job-header">
                <div>
                    <div class="job-title">${job.title}</div>
                    <div class="company-name">${job.company}</div>
                </div>
                <div style="text-align: right;">
                    <div style="color: #10b981; font-weight: bold;">${job.salary}</div>
                    <div style="font-size: 0.8rem; color: #666;">${job.type}</div>
                </div>
            </div>
            <div class="job-meta">
                <div class="meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${job.location}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-briefcase"></i>
                    <span>${job.experience === 'fresher' ? (getTranslation('fresher') || 'Fresher') : (job.experience || 'Any') + (job.experience && job.experience !== 'fresher' ? ' Years' : '')}</span>
                </div>
                <div class="meta-item">
                    <i class="fas fa-calendar"></i>
                    <span>Posted: ${job.postedDate}</span>
                </div>
                ${job.sector ? `
                <div class="meta-item">
                    <i class="fas fa-building"></i>
                    <span>${job.sector.charAt(0).toUpperCase() + job.sector.slice(1)}</span>
                </div>
                ` : ''}
            </div>
            <div class="job-description">
                ${job.description}
            </div>
            <div class="job-actions">
                <button class="btn btn-success btn-small" onclick="requireLogin(() => applyForJob('${job.title}', '${job.company}'))">
                    <i class="fas fa-paper-plane"></i> ${getTranslation('apply_now') || 'Apply Now'}
                </button>
                <button class="btn btn-info btn-small" onclick="viewJobDetails(${job.id})">
                    <i class="fas fa-eye"></i> View Details
                </button>
            </div>
        </div>
    `).join('');
}

function filterJobs() {
    const keywords = document.getElementById('jobKeywords').value.toLowerCase();
    const location = document.getElementById('jobLocation').value.toLowerCase();
    const experience = document.getElementById('jobExperience').value;
    const sector = document.getElementById('jobSector').value;

    // Refresh jobs data before filtering
    jobsData = getJobsData();

    const filteredJobs = jobsData.filter(job => {
        const matchesKeywords = keywords === '' || 
            job.title.toLowerCase().includes(keywords) || 
            job.company.toLowerCase().includes(keywords) ||
            (job.description && job.description.toLowerCase().includes(keywords));
        
        const matchesLocation = location === '' || job.location.toLowerCase() === location;
        const matchesExperience = experience === '' || job.experience === experience;
        const matchesSector = sector === '' || job.sector === sector;

        return matchesKeywords && matchesLocation && matchesExperience && matchesSector;
    });

    loadJobs(filteredJobs);
}

function viewJobDetails(jobId) {
    const job = jobsData.find(j => j.id === jobId);
    if (job) {
        const detailsHtml = `
            <div style="max-width: 600px; margin: 0 auto;">
                <h2 style="color: #1e3a8a; margin-bottom: 1rem;">${job.title}</h2>
                <h3 style="color: #666; margin-bottom: 2rem;">${job.company}</h3>
                
                <div style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin-bottom: 1.5rem;">
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                        <div>
                            <strong>📍 Location:</strong><br>${job.location}
                        </div>
                        <div>
                            <strong>💰 Salary:</strong><br>${job.salary}
                        </div>
                        <div>
                            <strong>💼 Type:</strong><br>${job.type}
                        </div>
                        <div>
                            <strong>⏱️ Experience:</strong><br>${job.experience || 'Any'}
                        </div>
                        ${job.sector ? `
                        <div>
                            <strong>🏢 Sector:</strong><br>${job.sector.charAt(0).toUpperCase() + job.sector.slice(1)}
                        </div>
                        ` : ''}
                        <div>
                            <strong>📅 Posted:</strong><br>${job.postedDate}
                        </div>
                    </div>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: #1e3a8a; margin-bottom: 0.5rem;">Job Description:</h4>
                    <p style="color: #666; line-height: 1.6;">${job.description}</p>
                </div>
                
                ${job.requirements ? `
                <div style="margin-bottom: 1.5rem;">
                    <h4 style="color: #1e3a8a; margin-bottom: 0.5rem;">Requirements:</h4>
                    <p style="color: #666; line-height: 1.6;">${job.requirements}</p>
                </div>
                ` : ''}
                
                <div style="text-align: center; margin-top: 2rem;">
                    <button class="btn btn-success" onclick="closeJobDetailsModal(); requireLogin(() => applyForJob('${job.title}', '${job.company}'))">
                        <i class="fas fa-paper-plane"></i> Apply Now
                    </button>
                </div>
            </div>
        `;
        
        // Create modal if it doesn't exist
        let modal = document.getElementById('jobDetailsModal');
        if (!modal) {
            modal = document.createElement('div');
            modal.id = 'jobDetailsModal';
            modal.className = 'modal';
            modal.innerHTML = `
                <div class="modal-content" style="max-width: 700px;">
                    <div class="modal-header">
                        <h2><i class="fas fa-briefcase"></i> Job Details</h2>
                        <span class="close" onclick="closeJobDetailsModal()">&times;</span>
                    </div>
                    <div class="modal-body" id="jobDetailsContent"></div>
                </div>
            `;
            document.body.appendChild(modal);
        }
        
        document.getElementById('jobDetailsContent').innerHTML = detailsHtml;
        openModal('jobDetailsModal');
    }
}

function closeJobDetailsModal() {
    closeModal('jobDetailsModal');
}

// Auto-refresh jobs when page becomes visible (user returns from admin panel)
document.addEventListener('visibilitychange', function() {
    if (!document.hidden && currentSection === 'employment') {
        refreshJobsData();
    }
});

// Refresh jobs when employment section is shown
const originalShowSection = showSection;
showSection = function(sectionId) {
    originalShowSection(sectionId);
    if (sectionId === 'employment') {
        refreshJobsData();
    }
};
        // Language Functions
        function changeLanguage(lang) {
            currentLanguage = lang;
            document.getElementById('currentLang').textContent = 
                lang === 'en' ? 'English' : (lang === 'hi' ? 'हिंदी' : 'ਪੰਜਾਬੀ');
            
            updatePageTranslations();
            toggleLanguageDropdown();
        }

        function updatePageTranslations() {
            const elements = document.querySelectorAll('[data-translate]');
            elements.forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[currentLanguage] && translations[currentLanguage][key]) {
                    if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                        element.placeholder = translations[currentLanguage][key];
                    } else {
                        element.textContent = translations[currentLanguage][key];
                    }
                }
            });

            // Update job listings if employment section is active
            if (currentSection === 'employment') {
                loadJobs();
            }
        }

        function toggleLanguageDropdown() {
            const dropdown = document.getElementById('languageDropdown');
            dropdown.classList.toggle('show');
        }

        function setChatLanguage(lang) {
            currentChatLanguage = lang;
            
            // Update active button
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            // Update welcome message
            const welcomeMessage = document.getElementById('welcomeMessage');
            welcomeMessage.innerHTML = chatResponses[lang].welcome;
        }

        // Authentication Functions
        function requireLogin(callback) {
            if (!isLoggedIn) {
                showLoginRequiredAlert();
                return false;
            }
            callback();
            return true;
        }

        function showLoginRequiredAlert() {
            const alert = document.getElementById('loginRequiredAlert');
            alert.classList.add('show');
            
            // Auto hide after 10 seconds
            setTimeout(() => {
                alert.classList.remove('show');
            }, 10000);
        }

        function handleAuthAction(action) {
            if (isLoggedIn && action === 'login') {
                // If already logged in, show logout option
                if (confirm(getTranslation('logout_confirm') || 'Are you sure you want to logout?')) {
                    logout();
                }
            } else {
                openModal(action + 'Modal');
            }
        }

       function updateAuthUI() {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');
    const dashboardBtn = document.getElementById('dashboardBtn');
    const loginStatus = document.getElementById('loginStatus');
    const statusIndicator = document.getElementById('statusIndicator');

    if (isLoggedIn) {
        loginBtn.innerHTML = '<i class="fas fa-sign-out-alt"></i> <span data-translate="logout">Logout</span>';
        registerBtn.style.display = 'none';
        dashboardBtn.style.display = 'inline-flex';
        loginStatus.textContent = getTranslation('logged_in') || 'Logged In';
        statusIndicator.classList.add('logged-in');
    } else {
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> <span data-translate="login">Login</span>';
        registerBtn.style.display = 'inline-flex';
        dashboardBtn.style.display = 'none';
        loginStatus.textContent = getTranslation('not_logged_in') || 'Not Logged In';
        statusIndicator.classList.remove('logged-in');
    }
}
        // Check if user is already logged in on page load
function checkLoginStatus() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        isLoggedIn = true;
        const userData = JSON.parse(currentUser);
        document.getElementById('loginStatus').textContent = userData.fullName;
        updateAuthUI();
    }
}

        // Enhanced Logout Function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        isLoggedIn = false;
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userName');
        updateAuthUI();
        showNotification(getTranslation('logout_success') || 'Logged out successfully!');
        
        // Redirect to home
        showSection('home');
    }
}

        function getTranslation(key) {
            return translations[currentLanguage] ? translations[currentLanguage][key] : null;
        }

        // Navigation Functions
        function showSection(sectionId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Remove active class from all nav links
            const navLinks = document.querySelectorAll('.nav a');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            // Show selected section
            const selectedSection = document.getElementById(sectionId);
            if (selectedSection) {
                selectedSection.classList.add('active');
            }

            // Add active class to selected nav link
            const selectedNavLink = document.getElementById(`nav-${sectionId}`);
            if (selectedNavLink) {
                selectedNavLink.classList.add('active');
            }

            currentSection = sectionId;

            // Load section-specific content
            if (sectionId === 'employment') {
                loadJobs();
            }

            // Hide login alert when navigating
            document.getElementById('loginRequiredAlert').classList.remove('show');

            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Job Functions
        function loadJobs(filteredJobs = null) {
            const jobListings = document.getElementById('jobListings');
            const jobs = filteredJobs || jobsData;

            if (jobs.length === 0) {
                jobListings.innerHTML = `
                    <div class="content-card" style="text-align: center; padding: 3rem;">
                        <i class="fas fa-search" style="font-size: 3rem; color: #9ca3af; margin-bottom: 1rem;"></i>
                        <h3>No jobs found</h3>
                        <p>Try adjusting your filters or search criteria.</p>
                    </div>
                `;
                return;
            }

            jobListings.innerHTML = jobs.map(job => `
                <div class="job-card">
                    <div class="job-header">
                        <div>
                            <div class="job-title">${job.title}</div>
                            <div class="company-name">${job.company}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="color: #10b981; font-weight: bold;">${job.salary}</div>
                            <div style="font-size: 0.8rem; color: #666;">${job.type}</div>
                        </div>
                    </div>
                    <div class="job-meta">
                        <div class="meta-item">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${job.location}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-briefcase"></i>
                            <span>${job.experience === 'fresher' ? (getTranslation('fresher') || 'Fresher') : job.experience + ' Years'}</span>
                        </div>
                        <div class="meta-item">
                            <i class="fas fa-calendar"></i>
                            <span>Posted: ${job.postedDate}</span>
                        </div>
                    </div>
                    <div class="job-description">
                        ${job.description}
                    </div>
                    <div class="job-actions">
                        <button class="btn btn-success btn-small" onclick="requireLogin(() => applyForJob('${job.title}', '${job.company}'))">
                            <i class="fas fa-paper-plane"></i> ${getTranslation('apply_now') || 'Apply Now'}
                        </button>
                        <button class="btn btn-info btn-small" onclick="viewJobDetails(${job.id})">
                            <i class="fas fa-eye"></i> View Details
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function filterJobs() {
            const keywords = document.getElementById('jobKeywords').value.toLowerCase();
            const location = document.getElementById('jobLocation').value;
            const experience = document.getElementById('jobExperience').value;
            const sector = document.getElementById('jobSector').value;

            const filteredJobs = jobsData.filter(job => {
                const matchesKeywords = keywords === '' || 
                    job.title.toLowerCase().includes(keywords) || 
                    job.company.toLowerCase().includes(keywords);
                
                const matchesLocation = location === '' || job.location.toLowerCase() === location;
                const matchesExperience = experience === '' || job.experience === experience;
                const matchesSector = sector === '' || job.sector === sector;

                return matchesKeywords && matchesLocation && matchesExperience && matchesSector;
            });

            loadJobs(filteredJobs);
        }

        function applyForJob(jobTitle, company) {
            if (!isLoggedIn) {
                showLoginRequiredAlert();
                return;
            }
            
            document.getElementById('jobTitle').value = jobTitle;
            document.getElementById('companyTitle').value = company;
            openModal('jobApplicationModal');
        }

        function viewJobDetails(jobId) {
            const job = jobsData.find(j => j.id === jobId);
            if (job) {
                alert(`Job Details:\n\nTitle: ${job.title}\nCompany: ${job.company}\nLocation: ${job.location}\nSalary: ${job.salary}\n\nDescription: ${job.description}`);
            }
        }

        // Modal Functions
        function openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
                modal.classList.add('show');
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('show');
                setTimeout(() => {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }, 300);
            }
        }

        function switchModal(fromModalId, toModalId) {
            closeModal(fromModalId);
            setTimeout(() => {
                openModal(toModalId);
            }, 300);
        }

        // Close modal when clicking outside
        window.onclick = function(event) {
            const modals = document.getElementsByClassName('modal');
            for (let modal of modals) {
                if (event.target === modal) {
                    closeModal(modal.id);
                }
            }

            // Close language dropdown when clicking outside
            if (!event.target.closest('.language-selector')) {
                document.getElementById('languageDropdown').classList.remove('show');
            }
        }

        // Registration Form Functions
        function toggleUserTypeFields() {
            const userType = document.getElementById('userType').value;
            const jobseekerFields = document.getElementById('jobseekerFields');
            const employerFields = document.getElementById('employerFields');
            
            if (userType === 'jobseeker') {
                jobseekerFields.style.display = 'block';
                employerFields.style.display = 'none';
            } else if (userType === 'employer') {
                employerFields.style.display = 'block';
                jobseekerFields.style.display = 'none';
            } else {
                jobseekerFields.style.display = 'none';
                employerFields.style.display = 'none';
            }
        }

        // Form Submission Handlers
       // Enhanced Login Handler
function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const loginData = Object.fromEntries(formData.entries());
    
    showLoading(event.target.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        hideLoading(event.target.querySelector('button[type="submit"]'));
        
        // Get registered users
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
        
        // Find matching user
        const user = registeredUsers.find(u => 
            (u.email === loginData.loginEmail || u.mobile === loginData.loginEmail) &&
            u.password === loginData.loginPassword
        );
        
        if (user) {
            // Successful login
            isLoggedIn = true;
            
            // Store current session
            localStorage.setItem('currentUser', JSON.stringify({
                id: user.id,
                fullName: user.fullName,
                email: user.email,
                mobile: user.mobile,
                userType: user.userType
            }));
            
            // Legacy support
            localStorage.setItem('userEmail', user.email);
            localStorage.setItem('userName', user.fullName);
            
            updateAuthUI();
            showNotification(
                getTranslation('login_success') || 
                `Login successful! Welcome back, ${user.fullName}.`,
                'success'
            );
            closeModal('loginModal');
            
            // Hide login required alert
            document.getElementById('loginRequiredAlert').classList.remove('show');
        } else {
            // Failed login
            showNotification(
                'Invalid email/mobile or password. Please try again.',
                'error'
            );
        }
    }, 1500);
}

       // Add these functions to your existing script.js file

// Enhanced Registration Handler
function handleRegister(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const registerData = Object.fromEntries(formData.entries());
    
    // Validate passwords match
    if (registerData.password !== registerData.confirmPassword) {
        showNotification(getTranslation('password_mismatch') || 'Passwords do not match!', 'error');
        return;
    }
    
    // Check if user already exists
    const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    const userExists = existingUsers.find(user => 
        user.email === registerData.email || user.mobile === registerData.mobile
    );
    
    if (userExists) {
        showNotification('User with this email or mobile already exists!', 'error');
        return;
    }
    
    showLoading(event.target.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        hideLoading(event.target.querySelector('button[type="submit"]'));
        
        // Save user to localStorage
        const newUser = {
            id: Date.now(),
            fullName: registerData.fullName,
            email: registerData.email,
            mobile: registerData.mobile,
            password: registerData.password, // In production, hash this!
            userType: registerData.userType,
            qualification: registerData.qualification || '',
            companyName: registerData.companyName || '',
            registeredDate: new Date().toLocaleDateString(),
            isActive: true
        };
        
        existingUsers.push(newUser);
        localStorage.setItem('registeredUsers', JSON.stringify(existingUsers));
        
        showNotification(
            getTranslation('registration_success') || 
            'Registration successful! You can now login with your credentials.',
            'success'
        );
        closeModal('registerModal');
        
        // Reset form
        event.target.reset();
        
        // Auto-open login modal
        setTimeout(() => {
            openModal('loginModal');
        }, 1000);
    }, 2000);
}

        function handleEnrollment(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const enrollmentData = Object.fromEntries(formData.entries());
            
            showLoading(event.target.querySelector('button[type="submit"]'));
            
            setTimeout(() => {
                hideLoading(event.target.querySelector('button[type="submit"]'));
                showNotification(`${getTranslation('enrollment_success') || 'Enrollment successful for'} ${enrollmentData.courseName}!`);
                closeModal('enrollModal');
            }, 2000);
        }

     // Enhanced Job Application Handler with User Association
function handleJobApplication(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const applicationData = Object.fromEntries(formData.entries());
    
    // Get current user
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        showNotification('Please login to apply for jobs', 'error');
        return;
    }
    
    // Validate required fields
    if (!validateForm(event.target)) {
        showNotification(getTranslation('fill_required_fields') || 'Please fill all required fields.', 'error');
        return;
    }
    
    showLoading(event.target.querySelector('button[type="submit"]'));
    
    setTimeout(() => {
        hideLoading(event.target.querySelector('button[type="submit"]'));
        
        // Add additional data with user association
        applicationData.userId = currentUser.id;
        applicationData.applicantEmail = currentUser.email;
        applicationData.appliedDate = new Date().toLocaleDateString();
        applicationData.appliedDateTime = new Date().toISOString();
        applicationData.status = 'pending';
        applicationData.id = Date.now();
        
        // Save to localStorage
        const existingApplications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
        existingApplications.push(applicationData);
        localStorage.setItem('jobApplications', JSON.stringify(existingApplications));
        
        // Show success message
        const successMessage = `${getTranslation('application_success') || 'Application submitted successfully!'} 
            \n\nJob: ${applicationData.jobTitle}\nCompany: ${applicationData.companyTitle}
            \n\nYour application has been sent to the admin for review. You can track the status in your dashboard.`;
        
        showNotification(successMessage, 'success');
        closeModal('jobApplicationModal');
        
        // Reset form
        event.target.reset();
        
        console.log('Job Application Submitted:', applicationData);
        
    }, 2000);
}
// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    showSection('home');
    updateAuthUI();
    setChatLanguage('en');
    
    console.log('Enhanced PGRKAM Portal with Authentication Loaded Successfully');
});
        function openEnrollmentModal(courseTitle) {
            document.getElementById('courseName').value = courseTitle;
            openModal('enrollModal');
        }

        function showLoading(button) {
            const originalContent = button.innerHTML;
            button.innerHTML = '<div class="loading"></div> Processing...';
            button.disabled = true;
            button.dataset.originalContent = originalContent;
        }

        function hideLoading(button) {
            button.innerHTML = button.dataset.originalContent;
            button.disabled = false;
        }

        // Chatbot Functions
        function toggleChatbot() {
            const chatbotWindow = document.getElementById('chatbotWindow');
            const chatbotIcon = document.getElementById('chatbotIcon');
            
            chatbotOpen = !chatbotOpen;
            
            if (chatbotOpen) {
                chatbotWindow.classList.add('show');
                chatbotIcon.className = 'fas fa-times';
            } else {
                chatbotWindow.classList.remove('show');
                chatbotIcon.className = 'fas fa-robot';
            }
        }

        function handleChatKeyPress(event) {
            if (event.key === 'Enter') {
                sendMessage();
            }
        }

        function sendMessage() {
            const input = document.getElementById('chatbotInput');
            const message = input.value.trim();
            
            if (message === '' || isTyping) return;
            
            addChatMessage(message, 'user');
            input.value = '';
            
            showTypingIndicator();
            setTimeout(() => {
                getBotResponse(message);
            }, 1500);
        }

        function addChatMessage(message, sender) {
            const messagesContainer = document.getElementById('chatbotMessages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `chatbot-message ${sender}-message`;
            
            if (sender === 'user') {
                messageDiv.innerHTML = `
                    <div class="message-content">${message}</div>
                `;
            } else {
                messageDiv.innerHTML = `
                    <div class="bot-avatar">
                        <i class="fas fa-robot"></i>
                    </div>
                    <div class="message-content">${message}</div>
                `;
            }
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function showTypingIndicator() {
            const messagesContainer = document.getElementById('chatbotMessages');
            const typingDiv = document.createElement('div');
            typingDiv.className = 'chatbot-message bot-message';
            typingDiv.id = 'typingIndicator';
            typingDiv.innerHTML = `
                <div class="bot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="typing-indicator" style="display: block;">
                    <div class="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            `;
            
            messagesContainer.appendChild(typingDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
            isTyping = true;
        }

        function hideTypingIndicator() {
            const typingIndicator = document.getElementById('typingIndicator');
            if (typingIndicator) {
                typingIndicator.remove();
            }
            isTyping = false;
        }

        function getBotResponse(userMessage) {
            hideTypingIndicator();

            const responses = chatResponses[currentChatLanguage];
            const lowerMessage = userMessage.toLowerCase();
            let response = responses.default;

            // Check for list jobs keywords first
            const listJobsKeywords = [
                // English
                'list jobs', 'show jobs', 'all jobs', 'jobs list', 'display jobs',
                // Hindi
                'नौकरियां सूची', 'सभी नौकरियां', 'नौकरियां दिखाएं', 'नौकरियां देखें',
                // Punjabi
                'ਨੌਕਰੀਆਂ ਸੂਚੀ', 'ਸਾਰੀਆਂ ਨੌਕਰੀਆਂ', 'ਨੌਕਰੀਆਂ ਦਿਖਾਓ', 'ਨੌਕਰੀਆਂ ਵੇਖੋ'
            ];

            const isListJobsRequest = listJobsKeywords.some(keyword => lowerMessage.includes(keyword));

            if (isListJobsRequest) {
                response = `Here are all available jobs:\n\n`;
                jobsData.forEach((job, index) => {
                    response += `${index + 1}. 🏢 **${job.title}**\n   📍 ${job.location} | 💰 ${job.salary} | 📅 ${job.type}\n   🏭 ${job.company}\n\n`;
                });
                response += `You can ask me about specific jobs for more details or say "apply for [job title]" to apply.`;
            } else {
                // Check for specific job titles
                const matchingJobs = jobsData.filter(job =>
                    lowerMessage.includes(job.title.toLowerCase()) ||
                    job.title.toLowerCase().includes(lowerMessage) ||
                    lowerMessage.includes(job.title.toLowerCase().split(' ')[0]) // Match first word
                );

                if (matchingJobs.length > 0) {
                    response = `I found ${matchingJobs.length} job${matchingJobs.length > 1 ? 's' : ''} matching your query:\n\n`;
                    matchingJobs.forEach(job => {
                        response += `🏢 **${job.title}** at ${job.company}\n📍 ${job.location}\n💰 ${job.salary}\n📅 ${job.type}\n📝 ${job.description}\n\n`;
                    });
                    response += `Would you like to apply for any of these jobs?`;
                } else {
                    // Enhanced keyword matching
                    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('नमस्कार') || lowerMessage.includes('ਸਤ ਸ੍ਰੀ ਅਕਾਲ')) {
                        response = responses.welcome || responses.default;
                    } else if (lowerMessage.includes('job') || lowerMessage.includes('नौकरी') || lowerMessage.includes('ਨੌਕਰੀ')) {
                        response = responses.jobs || responses.default;
                    } else if (lowerMessage.includes('training') || lowerMessage.includes('course') || lowerMessage.includes('skill') || lowerMessage.includes('प्रशिक्षण') || lowerMessage.includes('ਸਿਖਲਾਈ')) {
                        if (!isLoggedIn) {
                            response = responses.login_required || responses.default;
                        } else {
                            response = responses.training || responses.default;
                        }
                    } else if (lowerMessage.includes('register') || lowerMessage.includes('registration') || lowerMessage.includes('पंजीकरण') || lowerMessage.includes('ਰਜਿਸਟਰ')) {
                        response = responses.register || responses.default;
                    } else if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('संपर्क') || lowerMessage.includes('ਸੰਪਰਕ')) {
                        response = responses.contact || responses.default;
                    }
                }
            }

            addChatMessage(response, 'bot');
        }

        // Notification system
        function showNotification(message, type = 'success') {
            const notification = document.createElement('div');
            notification.className = `notification notification-${type}`;
            notification.innerHTML = `
                <div style="background: ${type === 'success' ? '#10b981' : '#ef4444'}; 
                           color: white; padding: 1rem; border-radius: 8px; 
                           position: fixed; top: 20px; right: 20px; z-index: 10000;
                           box-shadow: 0 4px 12px rgba(0,0,0,0.15); animation: slideInRight 0.3s ease;">
                    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                    ${message}
                </div>
            `;
            
            document.body.appendChild(notification);
            
            setTimeout(() => {
                notification.remove();
            }, 4000);
        }

        // Initialize application
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize with home section
            showSection('home');
            updateAuthUI();
            
            // Set initial chat language
            setChatLanguage('en');
            
            console.log('Enhanced PGRKAM Portal with Multilingual Support Loaded Successfully');
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // ESC to close modals and dropdowns
            if (e.key === 'Escape') {
                const openModals = document.querySelectorAll('.modal.show');
                openModals.forEach(modal => {
                    closeModal(modal.id);
                });
                
                document.getElementById('languageDropdown').classList.remove('show');
                
                if (chatbotOpen) {
                    toggleChatbot();
                }
            }
        });

        // Service card click handlers
        document.addEventListener('click', function(e) {
            if (e.target.closest('.service-card')) {
                const serviceCard = e.target.closest('.service-card');
                const serviceTitle = serviceCard.querySelector('h3').textContent;
                
                // Check for different language versions
                if (serviceTitle.includes('Job') || serviceTitle.includes('नौकरी') || serviceTitle.includes('ਨੌਕਰੀ')) {
                    requireLogin(() => showSection('employment'));
                } else if (serviceTitle.includes('Skill') || serviceTitle.includes('कौशल') || serviceTitle.includes('ਹੁਨਰ')) {
                    requireLogin(() => showSection('training'));
                } else if (serviceTitle.includes('Business') || serviceTitle.includes('व्यापार') || serviceTitle.includes('ਕਾਰੋਬਾਰ')) {
                    requireLogin(() => showSection('business'));
                } else if (serviceTitle.includes('Fair') || serviceTitle.includes('मेले') || serviceTitle.includes('ਮੇਲੇ')) {
                    showSection('news');
                }
            }
        });

        // Add animations and interactions
        document.addEventListener('DOMContentLoaded', function() {
            // Add hover effects to cards
            const cards = document.querySelectorAll('.content-card, .job-card, .course-card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
        });

        // Quick response functions for chatbot
        function addQuickResponses() {
            const quickResponsesMap = {
                'en': ['Find Jobs', 'Training Courses', 'Business Support', 'Registration Help', 'Contact Info'],
                'hi': ['नौकरी खोजें', 'प्रशिक्षण कोर्स', 'व्यापार सहायता', 'पंजीकरण सहायता', 'संपर्क जानकारी'],
                'pa': ['ਨੌਕਰੀਆਂ ਲੱਭੋ', 'ਸਿਖਲਾਈ ਕੋਰਸ', 'ਕਾਰੋਬਾਰ ਸਹਾਇਤਾ', 'ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਮਦਦ', 'ਸੰਪਰਕ ਜਾਣਕਾਰੀ']
            };
            
            const quickResponses = quickResponsesMap[currentChatLanguage] || quickResponsesMap['en'];
            
            const messagesContainer = document.getElementById('chatbotMessages');
            const quickResponseDiv = document.createElement('div');
            quickResponseDiv.className = 'chatbot-message bot-message';
            quickResponseDiv.innerHTML = `
                <div class="bot-avatar">
                    <i class="fas fa-robot"></i>
                </div>
                <div class="message-content">
                    ${currentChatLanguage === 'hi' ? 'त्वरित विकल्प:' : 
                      currentChatLanguage === 'pa' ? 'ਤੁਰੰਤ ਵਿਕਲਪ:' : 'Quick options:'}
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
                        ${quickResponses.map((response, index) => 
                            `<button onclick="sendQuickResponse('${response}', ${index})" 
                             style="background: #1e3a8a; color: white; border: none; padding: 0.3rem 0.8rem; 
                             border-radius: 15px; font-size: 0.8rem; cursor: pointer;">${response}</button>`
                        ).join('')}
                    </div>
                </div>
            `;
            messagesContainer.appendChild(quickResponseDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function sendQuickResponse(response, index) {
            const responseMap = ['jobs', 'training', 'business', 'register', 'contact'];
            
            addChatMessage(response, 'user');
            showTypingIndicator();
            setTimeout(() => {
                getBotResponse(responseMap[index] || 'help');
            }, 1000);
        }

        // Enhanced search functionality with multilingual support
        function performGlobalSearch(query) {
            const results = [];
            
            // Search jobs
            jobsData.forEach(job => {
                if (job.title.toLowerCase().includes(query) || 
                    job.company.toLowerCase().includes(query) ||
                    job.description.toLowerCase().includes(query)) {
                    results.push({type: 'job', data: job});
                }
            });
            
            return results;
        }

        // Initialize progressive loading
        window.addEventListener('load', function() {
            // Simulate loading job data
            const jobListings = document.getElementById('jobListings');
            if (jobListings && currentSection === 'employment') {
                addLoadingState(jobListings, getTranslation('loading_jobs') || 'Loading job opportunities...');
                setTimeout(() => {
                    loadJobs();
                }, 1500);
            }
        });

        function addLoadingState(element, text = 'Loading...') {
            element.innerHTML = `
                <div style="display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 3rem;">
                    <div class="loading"></div>
                    <span>${text}</span>
                </div>
            `;
        }

        // Form validation with multilingual error messages
        function validateForm(form) {
            const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    input.style.borderColor = '#d1d5db';
                }
            });
            
            return isValid;
        }

        // Add contact form handler
        function handleContactForm(event) {
            event.preventDefault();
            const formData = new FormData(event.target);
            const contactData = Object.fromEntries(formData.entries());
            
            showLoading(event.target.querySelector('button[type="submit"]'));
            
            setTimeout(() => {
                hideLoading(event.target.querySelector('button[type="submit"]'));
                showNotification(getTranslation('message_sent') || 'Message sent successfully! We will get back to you within 24 hours.');
                event.target.reset();
            }, 2000);
        }

        // Auto-add quick responses when chat loads
        setTimeout(() => {
            if (document.getElementById('chatbotMessages').children.length === 1) {
                addQuickResponses();
            }
        }, 2000);

        // Listen for language changes in chatbot
        document.addEventListener('click', function(e) {
            if (e.target.classList.contains('lang-btn')) {
                // Re-add quick responses in new language
                setTimeout(() => {
                    const existingQuickResponses = document.querySelector('.chatbot-message:last-child');
                    if (existingQuickResponses && existingQuickResponses.innerHTML.includes('Quick options')) {
                        existingQuickResponses.remove();
                        addQuickResponses();
                    }
                }, 100);
            }
        });

        // Enhanced responsive behavior
        function handleResize() {
            const isMobile = window.innerWidth <= 768;
            const chatbotWindow = document.getElementById('chatbotWindow');
            
            if (isMobile && chatbotOpen) {
                chatbotWindow.style.width = '95vw';
                chatbotWindow.style.height = '80vh';
                chatbotWindow.style.right = '2.5vw';
            } else if (chatbotOpen) {
                chatbotWindow.style.width = '350px';
                chatbotWindow.style.height = '500px';
                chatbotWindow.style.right = '0';
            }
        }

        window.addEventListener('resize', handleResize);

        // Accessibility improvements
        document.addEventListener('keydown', function(e) {
            // Tab navigation for modals
            if (e.key === 'Tab') {
                const activeModal = document.querySelector('.modal.show');
                if (activeModal) {
                    const focusableElements = activeModal.querySelectorAll(
                        'input, button, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );
                    
                    if (focusableElements.length > 0) {
                        const firstElement = focusableElements[0];
                        const lastElement = focusableElements[focusableElements.length - 1];
                        
                        if (e.shiftKey && document.activeElement === firstElement) {
                            e.preventDefault();
                            lastElement.focus();
                        } else if (!e.shiftKey && document.activeElement === lastElement) {
                            e.preventDefault();
                            firstElement.focus();
                        }
                    }
                }
            }
        });

        // Error handling for network requests (simulation)
        function simulateNetworkRequest(success = true, delay = 2000) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (success) {
                        resolve({ status: 'success', message: 'Operation completed successfully' });
                    } else {
                        reject({ status: 'error', message: 'Network error occurred' });
                    }
                }, delay);
            });
        }

        // Enhanced form submissions with error handling
        async function submitForm(formType, formData) {
            try {
                const result = await simulateNetworkRequest(true, 2000);
                return result;
            } catch (error) {
                showNotification(getTranslation('network_error') || 'Network error. Please try again.', 'error');
                throw error;
            }
        }   

        // Cleanup function for when page unloads
        window.addEventListener('beforeunload', function() {
            // Save any unsaved data or cleanup
            if (chatbotOpen) {
                // Could save chat history to localStorage if needed
            }
        });


        function addAdminButton() {
    const headerActions = document.querySelector('.header-actions');
    if (headerActions && !document.getElementById('adminAccessBtn')) {
        const adminBtn = document.createElement('a');
        adminBtn.id = 'adminAccessBtn';
        adminBtn.href = 'admin-login.html';
        adminBtn.className = 'btn btn-outline';
        adminBtn.innerHTML = '<i class="fas fa-shield-alt"></i> <span>Admin</span>';
        adminBtn.style.marginLeft = '1rem';
        headerActions.appendChild(adminBtn);
    }
}

// Call this when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    addAdminButton();
});

function exportApplicationsToCSV() {
    const applications = JSON.parse(localStorage.getItem('jobApplications') || '[]');
    if (applications.length === 0) {
        alert('No applications to export');
        return;
    }
    
    const headers = ['ID', 'Name', 'Email', 'Mobile', 'Job Title', 'Company', 'Experience', 'Qualification', 'Status', 'Applied Date'];
    const csvContent = [
        headers.join(','),
        ...applications.map(app => [
            app.id,
            app.applicantName,
            app.applicantEmail,
            app.applicantMobile,
            app.jobTitle,
            app.companyTitle,
            app.applicantExperience || 'N/A',
            app.qualification || 'N/A',
            app.status || 'pending',
            app.appliedDate
        ].join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `job_applications_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
}

// Clear all applications (admin only - use with caution)
function clearAllApplications() {
    if (confirm('Are you sure you want to delete ALL applications? This action cannot be undone.')) {
        if (confirm('This will permanently delete all application data. Are you absolutely sure?')) {
            localStorage.removeItem('jobApplications');
            showNotification('All applications have been cleared', 'success');
            if (typeof loadApplications === 'function') {
                loadApplications();
                updateStats();
            }
        }
    }
}
