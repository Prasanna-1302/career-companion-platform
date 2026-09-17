const interviewQuestions = [
    { id: 1, question: "Tell me about yourself.", answer: "Begin with your background, highlight your core strengths, and end with what you want to achieve next." },
    { id: 2, question: "Why do you want this role?", answer: "Connect your skills and goals to the company’s mission and explain why the role is a strong fit." },
    { id: 3, question: "Describe a challenging project you worked on.", answer: "Briefly describe the problem, your steps, and the measurable outcome. Focus on your role and results." },
    { id: 4, question: "What are your strengths and weaknesses?", answer: "Share strengths that match the job and mention a weakness you are actively improving." },
    { id: 5, question: "How do you handle tight deadlines?", answer: "Talk about planning, communication, prioritization, and how you remain calm under pressure." },
    { id: 6, question: "Tell me about a time you failed and what you learned.", answer: "Outline the situation, the cause, and most importantly the concrete actions you took to recover and the lessons you applied afterward." },
    { id: 7, question: "Describe a situation where you led a team.", answer: "Explain the goal, how you organized people, decisions you made, and the impact of the team’s work." },
    { id: 8, question: "How do you prioritize competing tasks?", answer: "Discuss frameworks you use (impact vs effort, deadlines), and how you communicate trade-offs with stakeholders." },
    { id: 9, question: "How do you handle conflict with a colleague?", answer: "Speak about listening, finding common ground, and focusing on solutions rather than assigning blame." },
    { id: 10, question: "Explain a technical problem you solved.", answer: "Describe the context, the approach you took to debug or design a solution, and the measurable result." },
    { id: 11, question: "How do you learn new technologies?", answer: "Mention practical approaches: small projects, docs, tutorials, and pairing with others to accelerate learning." },
    { id: 12, question: "Give an example of a time you improved a process.", answer: "Describe inefficiency, the change you proposed, and the improvement in metrics or outcomes." },
    { id: 13, question: "What motivates you in your work?", answer: "Share factors like impact, learning, ownership, and working with good teammates—tailor to the role." },
    { id: 14, question: "Describe a time you had to make a difficult trade-off.", answer: "Explain options, how you decided, and how you communicated the decision to stakeholders." },
    { id: 15, question: "How do you test and validate your work?", answer: "Mention unit tests, integration tests, peer reviews, and monitoring real-world behaviour after deployment." }
];

const interviewTemplates = [
    {
        id: "swe",
        title: "Software Engineer",
        description: "A software engineer crafts digital solutions through code, shaping the future of technology.",
        icon: "laptop",
        iconBg: "#8b5cf6",
        color: "#6366f1",
        category: "Engineering",
        questions: [
            { id: "swe-1", question: "How do you handle system architecture decisions for high-concurrency systems?", answer: "Focus on scalability patterns, load balancing, caching, asynchronous message queues, database sharding, and fault-tolerance." },
            { id: "swe-2", question: "Explain the difference between synchronous and asynchronous processing with a real-world scenario.", answer: "Synchronous blocks execution until complete (e.g. user checkout payment), while asynchronous offloads tasks to background workers (e.g. sending receipt emails)." },
            { id: "swe-3", question: "How do you approach code reviews and maintain code quality in a growing team?", answer: "Use automated linters, standardized style guides, strict PR reviews, modular design principles, and comprehensive unit tests." },
            { id: "swe-4", question: "Describe a time you had to debug a difficult performance bottleneck in production.", answer: "Explain profiling tools used (APM, memory heap dumps), identifying root cause (DB query, memory leak), applying fix, and monitoring metric recovery." }
        ]
    },
    {
        id: "jr-web",
        title: "Jr. Web Developer",
        description: "A junior web developer helps build web applications, gaining practical experience in coding and development.",
        icon: "globe",
        iconBg: "#3b82f6",
        color: "#2563eb",
        category: "Web Development",
        questions: [
            { id: "jweb-1", question: "Explain the CSS Box Model and how box-sizing property affects layout rendering.", answer: "The CSS box model consists of content, padding, border, and margin. `box-sizing: border-box` includes padding and border within the specified element width/height.", required_keywords: ["content","padding","border","margin"], optional_keywords: ["box-sizing","border-box","width","height"] },
            { id: "jweb-2", question: "What is Event Delegation in JavaScript and why is it useful?", answer: "Event delegation attaches a single event listener to a parent element using event bubbling, reducing memory usage and handling dynamically added child elements automatically." },
            { id: "jweb-3", question: "How do RESTful API requests work using `fetch` or `axios`?", answer: "They use standard HTTP verbs (GET, POST, PUT, DELETE) to transfer JSON payload between client and server asynchronously via promises." }
        ]
    },
    {
        id: "sr-react",
        title: "Sr. React Developer",
        description: "A Senior React Developer leads advanced front-end development with React.js.",
        icon: "atom",
        iconBg: "#06b6d4",
        color: "#0891b2",
        category: "Frontend",
        questions: [
            { id: "sreact-1", question: "How does the React Virtual DOM diffing algorithm work and how can you optimize render performance?", answer: "React uses a reconciliation algorithm with fiber trees to calculate minimal DOM updates. Optimizations include React.memo, useMemo, useCallback, and code splitting." },
            { id: "sreact-2", question: "Compare Context API vs Redux Toolkit for complex application state management.", answer: "Context API is built-in and ideal for low-frequency global state (themes/auth), whereas Redux Toolkit excels at complex, high-frequency state updates with devtools, middleware, and predictable data flow." },
            { id: "sreact-3", question: "How do Server Components in React 18 / Next.js differ from Client Components?", answer: "Server Components execute purely on the server, sending zero JavaScript bundle to the browser, reducing initial load times and enabling direct server-side data access." }
        ]
    },
    {
        id: "jr-backend",
        title: "Jr. Backend Developer",
        description: "A junior backend developer helps optimize server-side solutions, gaining valuable experience.",
        icon: "wrench",
        iconBg: "#10b981",
        color: "#059669",
        category: "Backend",
        questions: [
            { id: "jback-1", question: "What is the difference between SQL and NoSQL databases, and when would you use each?", answer: "SQL databases are relational, structured, and ACID compliant (PostgreSQL/MySQL). NoSQL databases are document or key-value stores optimized for horizontal scaling (MongoDB/Redis)." },
            { id: "jback-2", question: "How do Middleware functions work in Express.js?", answer: "Middleware functions access request (`req`), response (`res`), and `next()` callback, enabling request logging, authentication checks, body parsing, and error handling." }
        ]
    },
    {
        id: "pm",
        title: "Product Manager",
        description: "A product manager drives the development of innovative products, aligning customer needs with business goals.",
        icon: "chart",
        iconBg: "#f59e0b",
        color: "#d97706",
        category: "Management",
        questions: [
            { id: "pm-1", question: "How do you prioritize product feature backlogs using frameworks like RICE or MoSCoW?", answer: "Evaluate Reach, Impact, Confidence, and Effort (RICE) or categorize into Must-have, Should-have, Could-have, and Won't-have based on customer value and business goals." },
            { id: "pm-2", question: "How do you define success metrics (KPIs) for a new user onboarding feature?", answer: "Track Activation Rate, Time-to-Value (TTV), Day 1/7 Retention, Drop-off percentage per onboarding step, and User Feedback Scores (NPS/CSAT)." }
        ]
    },
    {
        id: "sr-backend",
        title: "Sr. Backend Developer",
        description: "A senior backend developer leads the design and implementation of scalable and efficient server-side solutions.",
        icon: "gear",
        iconBg: "#14b8a6",
        color: "#0d9488",
        category: "Backend",
        questions: [
            { id: "sback-1", question: "How do you ensure zero-downtime database migrations in a microservice architecture?", answer: "Use expand-contract pattern (decouple code releases from schema migrations), additive schema changes, dual writing, and background migration scripts." },
            { id: "sback-2", question: "Explain distributed transactions and how the Saga pattern solves data consistency across microservices.", answer: "Sagas replace traditional 2PC distributed locking with a sequence of local transactions where each step publishes events, paired with compensating transactions for rollback handling." }
        ]
    },
    {
        id: "jr-react",
        title: "Jr. React Developer",
        description: "A junior React developer builds interactive front-end components and works with modern JavaScript libraries.",
        icon: "bolt",
        iconBg: "#0284c7",
        color: "#0369a1",
        category: "Frontend",
        questions: [
            { id: "jreact-1", question: "What is the purpose of useEffect dependency array and how do custom hooks work?", answer: "The dependency array controls when `useEffect` re-runs. Custom hooks encapsulate reusable stateful logic into functions starting with `use`." },
            { id: "jreact-2", question: "How do controlled vs uncontrolled components work in HTML forms using React?", answer: "Controlled components manage input values via React state (`value` & `onChange`), while uncontrolled components read values directly from the DOM using `useRef`." }
        ]
    },
    {
        id: "qa-engineer",
        title: "QA Engineer",
        description: "A QA engineer tests and ensures software quality, identifying bugs and automated test cases.",
        icon: "search",
        iconBg: "#ec4899",
        color: "#db2777",
        category: "Quality Assurance",
        questions: [
            { id: "qa-1", question: "What is the difference between Smoke Testing, Regression Testing, and Integration Testing?", answer: "Smoke testing verifies critical path readiness, Integration testing tests component interaction, and Regression testing ensures new changes haven't broken existing functionality." },
            { id: "qa-2", question: "How do end-to-end automation frameworks like Cypress or Playwright operate in CI/CD pipelines?", answer: "They run headless test specs against staging environments on PR commits, capturing screenshots, network logs, and video recordings on test failures." }
        ]
    }
];

exports.getProfile = (req, res) => {
    res.json({ success: true, user: req.user });
};

exports.getInterviewQuestions = (req, res) => {
    res.json({ success: true, questions: interviewQuestions });
};

exports.getInterviewTemplates = (req, res) => {
    res.json({ success: true, templates: interviewTemplates });
};

exports.generateCustomInterview = (req, res) => {
    const { jobTitle, experienceLevel, techStack, jobDescription } = req.body;
    const title = jobTitle || "Custom Role";
    const level = experienceLevel || "Mid";
    const stack = techStack || "General Tech Stack";

    const customQuestions = [
        {
            id: "custom-1",
            question: `Tell me about your relevant experience as a ${level} level ${title} and your background working with ${stack}.`,
            answer: `Highlight key projects built using ${stack}, emphasizing your experience level (${level}) and contributions to architecture, delivery, and team success.`
        },
        {
            id: "custom-2",
            question: `In this ${title} role, how would you design a robust solution given the requirements: "${(jobDescription || "deliver reliable software solutions").slice(0, 100)}..."?`,
            answer: `Break down the problem into core modules, choose modern tools within ${stack}, design for scalability, and define clear API boundaries.`
        },
        {
            id: "custom-3",
            question: `What is the most technical problem you solved using ${stack}, and how did you measure your success?`,
            answer: `Describe the concrete technical bottleneck, your step-by-step resolution, and metrics demonstrating improved speed, reliability, or user experience.`
        }
    ];

    res.json({
        success: true,
        interview: {
            id: "custom-" + Date.now(),
            title: `${title} (${level})`,
            description: jobDescription || `Custom interview tailored for ${title} using ${stack}.`,
            category: "Custom Role",
            questions: customQuestions
        }
    });
};

const { io } = require('../server');

exports.submitInterviewFeedback = (req, res) => {
    const { answer, question, required_keywords, optional_keywords, questionId } = req.body;

    if (!answer || answer.trim().length === 0) {
        return res.status(400).json({ success: false, message: "Please submit your answer to receive feedback." });
    }

    // If client provided keyword lists, use strict evaluator
    if ((Array.isArray(required_keywords) && required_keywords.length > 0) || (Array.isArray(optional_keywords) && optional_keywords.length > 0)) {
        const evalResult = evaluator.evaluate({ required_keywords: required_keywords || [], optional_keywords: optional_keywords || [], user_answer: answer, correct_answer: "" });
        const strengths = evalResult.matched_required && evalResult.matched_required.length ? ["Covered required concepts"] : [];
        if (evalResult.matched_optional && evalResult.matched_optional.length) strengths.push("Included optional details");
        const improvements = [];
        if (evalResult.missing_required && evalResult.missing_required.length) improvements.push(`Missing required keywords: ${evalResult.missing_required.join(', ')}`);
        if (evalResult.missing_optional && evalResult.missing_optional.length) improvements.push(`Consider mentioning: ${evalResult.missing_optional.join(', ')}`);

    // existing logic ...
    const result = { success: true, feedback: [evalResult.reason], score: evalResult.score, strengths, improvements };
    io.emit('feedbackUpdated', result);
    return res.json(result);
    }

    // Try to locate the question in our templates to find keyword metadata
    let foundKeywords = null;
    try {
        const templates = interviewTemplates || [];
        outer: for (const tpl of templates) {
            if (!tpl.questions) continue;
            for (const q of tpl.questions) {
                if (q.id && questionId && q.id === questionId) { foundKeywords = q; break outer; }
                if (q.question && question && q.question.trim().toLowerCase() === question.trim().toLowerCase()) { foundKeywords = q; break outer; }
            }
        }
    } catch (e) {
        foundKeywords = null;
    }

    if (foundKeywords && (Array.isArray(foundKeywords.required_keywords) || Array.isArray(foundKeywords.optional_keywords))) {
        const evalResult = evaluator.evaluate({ required_keywords: foundKeywords.required_keywords || [], optional_keywords: foundKeywords.optional_keywords || [], user_answer: answer, correct_answer: foundKeywords.answer || "" });
        const strengths = evalResult.matched_required && evalResult.matched_required.length ? ["Covered required concepts"] : [];
        if (evalResult.matched_optional && evalResult.matched_optional.length) strengths.push("Included optional details");
        const improvements = [];
        if (evalResult.missing_required && evalResult.missing_required.length) improvements.push(`Missing required keywords: ${evalResult.missing_required.join(', ')}`);
        if (evalResult.missing_optional && evalResult.missing_optional.length) improvements.push(`Consider mentioning: ${evalResult.missing_optional.join(', ')}`);

    // existing logic ...
    const result = { success: true, feedback: [evalResult.reason], score: evalResult.score, strengths, improvements };
    io.emit('feedbackUpdated', result);
    return res.json(result);
    }

    // Fallback legacy heuristic scoring
    const normalized = answer.toLowerCase();
    const feedback = [];
    let score = 70;

    if (normalized.length < 50) {
        feedback.push("Your answer is too concise. Expand on your technical approach, specific tools, and outcomes.");
        score -= 15;
    } else if (normalized.length > 180) {
        feedback.push("Great depth of explanation and thorough context provided!");
        score += 15;
    } else {
        score += 10;
    }

    if (normalized.includes("result") || normalized.includes("impact") || normalized.includes("metrics") || normalized.includes("percent") || normalized.includes("%")) {
        feedback.push("Excellent inclusion of measurable impact and results.");
        score += 10;
    } else {
        feedback.push("Try adding concrete metrics or business impact to quantify your success.");
    }

    if (normalized.includes("team") || normalized.includes("collaborat") || normalized.includes("stakeholder")) {
        feedback.push("Strong demonstration of teamwork and communication skills.");
        score += 5;
    }

    if (normalized.includes("i think") || normalized.includes("maybe") || normalized.includes("i guess")) {
        feedback.push("Use more definitive, confident language instead of uncertain phrasing.");
        score -= 5;
    }

    if (feedback.length === 0) {
        feedback.push("Nice answer! You explained your result clearly and included useful details.");
    }

    score = Math.min(98, Math.max(55, score));

    // existing logic ...
    const result = { success: true, feedback, score, strengths: ["Clear structure", "Relevant domain terminology"], improvements: ["Quantify impact with data points", "Expand technical execution steps"] };
    io.emit('feedbackUpdated', result);
    res.json(result);
};

exports.getSkillRoadmap = (req, res) => {
    const roadmap = [
        {
            category: "Frontend",
            skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design"]
        },
        {
            category: "Backend",
            skills: ["Node.js", "Express", "APIs", "Databases", "Authentication"]
        },
        {
            category: "Career Skills",
            skills: ["Communication", "Problem Solving", "Time Management", "Interview Prep"]
        }
    ];

    res.json({ success: true, roadmap });
};

exports.getJobTracker = (req, res) => {
    const jobs = [
        { company: "TechGrowth", role: "Full Stack Developer", status: "Applied", location: "Bangalore" },
        { company: "PeopleFirst", role: "HR Executive", status: "Interview", location: "Mumbai" },
        { company: "WebCraft", role: "Frontend Engineer", status: "Open", location: "Remote" }
    ];
    const result = { success: true, jobs };
    io.emit('jobTrackerUpdated', result);
    res.json(result);
};

exports.getProductivityAnalytics = (req, res) => {
    const analytics = {
        weeklyHours: 14,
        streakDays: 6,
        focusScore: 84,
        tasksCompleted: 12
    };
    const result = { success: true, analytics };
    io.emit('analyticsUpdated', result);
    res.json(result);
};

// --- Simple in-memory learning data (serves as API for frontend) ---
const COURSES_API = [
    {
        id: "dsa",
        title: "Data Structures and Algorithms",
        category: "Data Structures",
        description: "Master arrays, trees, graphs, and algorithm strategies with hands-on coding practice.",
        duration: "8 weeks",
        startDate: "16 Nov, 25",
        endDate: "30 Nov, 26",
        status: "Enrolled, Not Started",
        assessments: 43,
        practiceTests: "4",
        progress: 0
    },
    {
        id: "java-prog",
        title: "Java Programming",
        category: "Java",
        description: "Build strong Java skills with object-oriented design, collections, and real-world projects.",
        duration: "8 weeks",
        startDate: "25 Jun, 25",
        endDate: "31 Dec, 25",
        status: "Validity Expired",
        assessments: 27,
        practiceTests: "3",
        progress: 0,
    },
    {
        id: "data-science",
        title: "Data Science",
        category: "Data Science",
        description: "Explore data analysis, visualization, and modeling using Python and real datasets.",
        duration: "8 weeks",
        startDate: "25 Jun, 25",
        endDate: "31 Dec, 25",
        status: "Validity Expired",
        assessments: 41,
        practiceTests: "2",
        progress: 0,
    },
    {
        id: "python",
        title: "Python Programming",
        category: "Python",
        description: "Learn Python fundamentals, scripting, automation, and backend development with practical exercises.",
        duration: "6 weeks",
        startDate: "12 Jul, 25",
        endDate: "24 Aug, 25",
        status: "Open Enrollment",
        assessments: 30,
        practiceTests: "3",
        progress: 0,
    },
    {
        id: "web-dev",
        title: "Web Development",
        category: "Web Development",
        description: "Create modern web apps with HTML, CSS, JavaScript, and backend integration.",
        duration: "10 weeks",
        startDate: "05 Aug, 25",
        endDate: "14 Oct, 25",
        status: "Open Enrollment",
        assessments: 25,
        practiceTests: "3",
        progress: 0,
    },
    {
        id: "machine-learning",
        title: "Machine Learning",
        category: "Machine Learning",
        description: "Dive into ML algorithms, model evaluation, and practical workflows using Python.",
        duration: "10 weeks",
        startDate: "01 Sep, 25",
        endDate: "10 Nov, 25",
        status: "Open Enrollment",
        assessments: 35,
        practiceTests: "2",
        progress: 0,
    },
    {
        id: "databases",
        title: "Databases and SQL",
        category: "Databases",
        description: "Learn database design, SQL querying, and data management for modern applications.",
        duration: "6 weeks",
        startDate: "20 Jul, 25",
        endDate: "31 Aug, 25",
        status: "Open Enrollment",
        assessments: 18,
        practiceTests: "2",
        progress: 0,
    },
    {
        id: "devops",
        title: "DevOps Fundamentals",
        category: "DevOps",
        description: "Understand CI/CD, containerization, and cloud deployment best practices.",
        duration: "7 weeks",
        startDate: "10 Aug, 25",
        endDate: "28 Sep, 25",
        status: "Open Enrollment",
        assessments: 20,
        practiceTests: "2",
        progress: 0,
    },
    {
        id: "cloud-computing",
        title: "Cloud Computing",
        category: "Cloud",
        description: "Learn cloud architecture, services, and deployment strategies on AWS and Azure.",
        duration: "8 weeks",
        startDate: "15 Sep, 25",
        endDate: "10 Nov, 25",
        status: "Open Enrollment",
        assessments: 22,
        practiceTests: "2",
        progress: 0,
    },
    {
        id: "cyber-security",
        title: "Cyber Security",
        category: "Security",
        description: "Understand security fundamentals, threat mitigation, and secure coding practices.",
        duration: "6 weeks",
        startDate: "01 Oct, 25",
        endDate: "12 Nov, 25",
        status: "Open Enrollment",
        assessments: 20,
        practiceTests: "2",
        progress: 0,
    },
    {
        id: "frontend-dev",
        title: "Frontend Development",
        category: "Frontend",
        description: "Master modern frontend frameworks, responsive layouts, and interactive UI components.",
        duration: "7 weeks",
        startDate: "22 Jul, 25",
        endDate: "08 Sep, 25",
        status: "Open Enrollment",
        assessments: 28,
        practiceTests: "3",
        progress: 0,
    },
    {
        id: "ai-fundamentals",
        title: "AI Fundamentals",
        category: "AI",
        description: "Explore machine learning, neural networks, and AI concepts for real-world applications.",
        duration: "9 weeks",
        startDate: "05 Sep, 25",
        endDate: "07 Nov, 25",
        status: "Open Enrollment",
        assessments: 30,
        practiceTests: "2",
        progress: 0,
    },
    {
        id: "product-management",
        title: "Product Management",
        category: "Product",
        description: "Learn product discovery, roadmap planning, and stakeholder communication skills.",
        duration: "5 weeks",
        startDate: "08 Aug, 25",
        endDate: "12 Sep, 25",
        status: "Open Enrollment",
        assessments: 15,
        practiceTests: "2",
        progress: 0,
    }
];

function generateAssessmentMCQs(courseId) {
    const courseLabels = {
        "dsa": "Data Structures and Algorithms",
        "java-prog": "Java Programming",
        "data-science": "Data Science",
        "python": "Python Programming",
        "web-dev": "Web Development",
        "machine-learning": "Machine Learning",
        "databases": "Databases and SQL",
        "devops": "DevOps Fundamentals",
        "cloud-computing": "Cloud Computing",
        "cyber-security": "Cyber Security",
        "frontend-dev": "Frontend Development",
        "ai-fundamentals": "AI Fundamentals",
        "product-management": "Product Management"
    };

    const courseName = courseLabels[courseId] || "this course";
    const templates = [
        {
            question: `What is a helpful first step when starting ${courseName}?`,
            options: ["Learn the basics", "Skip theory", "Copy answers", "Avoid practice"],
            answer: "Learn the basics"
        },
        {
            question: `Which habit is most useful for ${courseName}?`,
            options: ["Practice regularly", "Procrastinate", "Memorize blindly", "Avoid feedback"],
            answer: "Practice regularly"
        },
        {
            question: `Which resource is commonly used during ${courseName}?`,
            options: ["Documentation", "Cooking recipes", "Movie scripts", "Sports scores"],
            answer: "Documentation"
        },
        {
            question: `What improves learning for ${courseName}?`,
            options: ["Hands-on projects", "Ignoring mistakes", "Skipping practice", "Working alone without review"],
            answer: "Hands-on projects"
        },
        {
            question: `What is a good way to check understanding in ${courseName}?`,
            options: ["Answer questions", "Read only titles", "Guess repeatedly", "Avoid review"],
            answer: "Answer questions"
        },
        {
            question: `Which approach is best for ${courseName}?`,
            options: ["Build small examples", "Avoid examples", "Use random apps", "Ignore syntax"],
            answer: "Build small examples"
        },
        {
            question: `What should you do after learning a concept in ${courseName}?`,
            options: ["Apply it", "Forget it", "Skip it", "Ignore it"],
            answer: "Apply it"
        },
        {
            question: `Which outcome is desirable when studying ${courseName}?`,
            options: ["Better skills", "More confusion", "Less knowledge", "Slower progress"],
            answer: "Better skills"
        },
        {
            question: `What helps a learner succeed in ${courseName}?`,
            options: ["Feedback", "Isolation", "Rushing", "Skipping practice"],
            answer: "Feedback"
        },
        {
            question: `Which attitude is helpful for ${courseName}?`,
            options: ["Curiosity", "Complacency", "Fear of trying", "Avoidance"],
            answer: "Curiosity"
        }
    ];

    return templates.map((template, index) => ({
        id: `${courseId}-q${index + 1}`,
        ...template
    }));
}

const ASSESSMENTS_API = [
    {
        id: "assess-dsa",
        courseId: "dsa",
        title: "Data Structures And Algorithms",
        duration: 180,
        totalMarks: 100,
        questions: [{ sno: 1, name: "Coding", questions: 2, marks: 100 }]
    },
    {
        id: "assess-java",
        courseId: "java-prog",
        title: "Java Programming",
        duration: 120,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "MCQ", questions: 30, marks: 50 },
            { sno: 2, name: "Coding", questions: 2, marks: 50 }
        ]
    },
    {
        id: "assess-ds",
        courseId: "data-science",
        title: "Data Science",
        duration: 150,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Data Analysis", questions: 5, marks: 50 },
            { sno: 2, name: "Coding", questions: 3, marks: 50 }
        ]
    },
    {
        id: "assess-python",
        courseId: "python",
        title: "Python Programming",
        duration: 140,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Scripting", questions: 3, marks: 60 },
            { sno: 2, name: "Concepts", questions: 5, marks: 40 }
        ]
    },
    {
        id: "assess-webdev",
        courseId: "web-dev",
        title: "Web Development",
        duration: 160,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Frontend", questions: 4, marks: 50 },
            { sno: 2, name: "Backend", questions: 3, marks: 50 }
        ]
    },
    {
        id: "assess-ml",
        courseId: "machine-learning",
        title: "Machine Learning",
        duration: 170,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Algorithms", questions: 4, marks: 50 },
            { sno: 2, name: "Evaluation", questions: 3, marks: 50 }
        ]
    },
    {
        id: "assess-db",
        courseId: "databases",
        title: "Databases and SQL",
        duration: 130,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "SQL", questions: 5, marks: 60 },
            { sno: 2, name: "Design", questions: 2, marks: 40 }
        ]
    },
    {
        id: "assess-devops",
        courseId: "devops",
        title: "DevOps Fundamentals",
        duration: 150,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "CI/CD", questions: 3, marks: 50 },
            { sno: 2, name: "Containers", questions: 3, marks: 50 }
        ]
    },
    {
        id: "assess-cloud",
        courseId: "cloud-computing",
        title: "Cloud Computing",
        duration: 150,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Cloud Services", questions: 4, marks: 50 },
            { sno: 2, name: "Deployment", questions: 2, marks: 50 }
        ]
    },
    {
        id: "assess-cyber",
        courseId: "cyber-security",
        title: "Cyber Security",
        duration: 140,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Threats", questions: 4, marks: 50 },
            { sno: 2, name: "Secure Coding", questions: 3, marks: 50 }
        ]
    },
    {
        id: "assess-frontend",
        courseId: "frontend-dev",
        title: "Frontend Development",
        duration: 150,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "UI", questions: 4, marks: 50 },
            { sno: 2, name: "JS Frameworks", questions: 3, marks: 50 }
        ]
    },
    {
        id: "assess-ai",
        courseId: "ai-fundamentals",
        title: "AI Fundamentals",
        duration: 170,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Models", questions: 4, marks: 50 },
            { sno: 2, name: "Ethics", questions: 3, marks: 50 }
        ]
    },
    {
        id: "assess-product",
        courseId: "product-management",
        title: "Product Management",
        duration: 120,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Strategy", questions: 3, marks: 50 },
            { sno: 2, name: "Roadmap", questions: 3, marks: 50 }
        ]
    }
].map((assessment) => ({
    ...assessment,
    mcqQuestions: generateAssessmentMCQs(assessment.courseId)
}));

exports.getLearningModules = (req, res) => {
    res.json({ success: true, modules: LEARNING_MODULES_API });
};

exports.getCourses = (req, res) => {
    res.json({ success: true, courses: COURSES_API });
};

exports.getCourse = (req, res) => {
    const id = req.params.id;
    const course = COURSES_API.find((c) => c.id === id);
    if (!course) return res.status(404).json({ success: false, message: "Course not found" });
    res.json({ success: true, course });
};

exports.getAssessments = (req, res) => {
    res.json({ success: true, assessments: ASSESSMENTS_API });
};

exports.getAssessment = (req, res) => {
    const id = req.params.id;
    const assessment = ASSESSMENTS_API.find((a) => a.id === id);
    if (!assessment) return res.status(404).json({ success: false, message: "Assessment not found" });
    res.json({ success: true, assessment });
};
