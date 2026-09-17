const API_BASE = "http://localhost:5000/api";
const API_AUTH = `${API_BASE}/auth`;
const API_APP = `${API_BASE}/app`;
const STORAGE_PREFIX = "cc_";

const DEFAULT_INTERVIEW_QUESTIONS = [
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

const JOB_SEARCH_LIST = [
    { company: "TCS", role: "Frontend Developer", location: "Chennai", experience: "0-2 Years", salary: "4 LPA", type: "Full Time" },
    { company: "Infosys", role: "Java Developer", location: "Bangalore", experience: "1-3 Years", salary: "5 LPA", type: "Full Time" },
    { company: "Zoho", role: "UI UX Designer", location: "Chennai", experience: "0-1 Years", salary: "6 LPA", type: "Hybrid" },
    { company: "Wipro", role: "Backend Developer", location: "Hyderabad", experience: "2 Years", salary: "5.5 LPA", type: "Remote" },
    { company: "Accenture", role: "Full Stack Developer", location: "Coimbatore", experience: "0-2 Years", salary: "4.5 LPA", type: "Full Time" },
    { company: "Google", role: "Software Engineer", location: "Bangalore", experience: "2-4 Years", salary: "18 LPA", type: "Full Time" },
    { company: "Amazon", role: "SDE", location: "Hyderabad", experience: "1-3 Years", salary: "16 LPA", type: "Full Time" },
    { company: "Microsoft", role: "Program Manager", location: "Bengaluru", experience: "3-5 Years", salary: "20 LPA", type: "Full Time" },
    { company: "Flipkart", role: "Data Analyst", location: "Bangalore", experience: "1-3 Years", salary: "10 LPA", type: "Hybrid" },
    { company: "Cognizant", role: "IT Analyst", location: "Pune", experience: "0-2 Years", salary: "5 LPA", type: "Full Time" },
    { company: "IBM", role: "Cloud Engineer", location: "Mumbai", experience: "2-4 Years", salary: "12 LPA", type: "Hybrid" },
    { company: "HCL", role: "DevOps Engineer", location: "Noida", experience: "1-3 Years", salary: "8 LPA", type: "Full Time" },
    { company: "Paytm", role: "Product Designer", location: "Pune", experience: "1-3 Years", salary: "9 LPA", type: "Hybrid" },
    { company: "Dell", role: "Systems Engineer", location: "Bangalore", experience: "1-3 Years", salary: "8.5 LPA", type: "Full Time" }
];

function generateAssessmentMCQs(courseId) {
    const bank = {
        "dsa": [
            { id: "dsa-q1", question: "Which data structure uses FIFO order?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue" },
            { id: "dsa-q2", question: "Which algorithm is divide-and-conquer?", options: ["Merge Sort", "Linear Search", "Insertion Sort", "Bubble Sort"], answer: "Merge Sort" },
            { id: "dsa-q3", question: "What is the average time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)", "O(1)"], answer: "O(log n)" },
            { id: "dsa-q4", question: "Which tree traversal visits nodes level by level?", options: ["DFS", "BFS", "Preorder", "Postorder"], answer: "BFS" },
            { id: "dsa-q5", question: "Which structure is best for constant-time key lookup?", options: ["Array", "Linked List", "Hash Table", "Stack"], answer: "Hash Table" },
            { id: "dsa-q6", question: "Which data structure uses LIFO order?", options: ["Queue", "Stack", "Graph", "Heap"], answer: "Stack" },
            { id: "dsa-q7", question: "Which graph representation is best for sparse graphs?", options: ["Adjacency Matrix", "Adjacency List", "Edge List", "Tree"], answer: "Adjacency List" },
            { id: "dsa-q8", question: "What is the best-case complexity of Quick Sort?", options: ["O(n^2)", "O(n)", "O(n log n)", "O(log n)"], answer: "O(n log n)" },
            { id: "dsa-q9", question: "Which structure is used to implement recursion?", options: ["Queue", "Stack", "Tree", "Graph"], answer: "Stack" },
            { id: "dsa-q10", question: "Which search technique works on a sorted array?", options: ["Linear Search", "Binary Search", "Hash Search", "Depth Search"], answer: "Binary Search" }
        ],
        "java-prog": [
            { id: "java-q1", question: "Which keyword is used for class inheritance in Java?", options: ["implements", "extends", "inherits", "uses"], answer: "extends" },
            { id: "java-q2", question: "Which of these is not a Java primitive type?", options: ["int", "boolean", "String", "double"], answer: "String" },
            { id: "java-q3", question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java View Model", "Java Visual Machine"], answer: "Java Virtual Machine" },
            { id: "java-q4", question: "What is the default value of a boolean field in Java?", options: ["true", "false", "0", "null"], answer: "false" },
            { id: "java-q5", question: "Which keyword prevents a variable from being modified?", options: ["static", "final", "public", "private"], answer: "final" },
            { id: "java-q6", question: "Which collection class is synchronized?", options: ["ArrayList", "HashMap", "Vector", "TreeSet"], answer: "Vector" },
            { id: "java-q7", question: "Which statement is used to handle exceptions?", options: ["try/catch", "if/else", "switch", "while"], answer: "try/catch" },
            { id: "java-q8", question: "What does the `new` keyword do in Java?", options: ["Declare a variable", "Allocate memory for an object", "Create a method", "Start a thread"], answer: "Allocate memory for an object" },
            { id: "java-q9", question: "Which operator compares object references?", options: ["equals()", "==", "!=", "instanceof"], answer: "==" },
            { id: "java-q10", question: "Which access modifier makes a member visible only within its class?", options: ["public", "protected", "private", "default"], answer: "private" }
        ],
        "data-science": [
            { id: "ds-q1", question: "Which Python library is commonly used for dataframes?", options: ["NumPy", "TensorFlow", "pandas", "Matplotlib"], answer: "pandas" },
            { id: "ds-q2", question: "What is supervised learning?", options: ["Learning from labeled data", "Learning from unlabeled data", "Learning without data", "Learning from reinforcement"], answer: "Learning from labeled data" },
            { id: "ds-q3", question: "Which plot is best for showing a distribution?", options: ["Scatter plot", "Histogram", "Bar chart", "Pie chart"], answer: "Histogram" },
            { id: "ds-q4", question: "What does correlation measure?", options: ["Causation", "Relationship", "Variance", "Accuracy"], answer: "Relationship" },
            { id: "ds-q5", question: "What is feature scaling?", options: ["Making features bigger", "Normalizing feature values", "Removing features", "Clustering features"], answer: "Normalizing feature values" },
            { id: "ds-q6", question: "Which metric is commonly used for regression?", options: ["Accuracy", "RMSE", "Precision", "Recall"], answer: "RMSE" },
            { id: "ds-q7", question: "What is overfitting?", options: ["Model fits training data too closely", "Model generalizes well", "Model is too simple", "Model has low variance"], answer: "Model fits training data too closely" },
            { id: "ds-q8", question: "What is a common train/test split ratio?", options: ["20/80", "50/50", "80/20", "10/90"], answer: "80/20" },
            { id: "ds-q9", question: "Which library is often used for machine learning in Python?", options: ["pandas", "scikit-learn", "Flask", "Django"], answer: "scikit-learn" },
            { id: "ds-q10", question: "Which step is used to evaluate model performance?", options: ["Training", "Prediction", "Cross-validation", "Deployment"], answer: "Cross-validation" }
        ],
        "python": [
            { id: "py-q1", question: "Which keyword defines a function in Python?", options: ["function", "def", "func", "declare"], answer: "def" },
            { id: "py-q2", question: "Which data type is immutable?", options: ["List", "Dictionary", "Tuple", "Set"], answer: "Tuple" },
            { id: "py-q3", question: "How do you import a module?", options: ["include math", "import math", "require math", "using math"], answer: "import math" },
            { id: "py-q4", question: "Which operator tests membership in a sequence?", options: ["==", "in", "is", "&&"], answer: "in" },
            { id: "py-q5", question: "What does len([1,2,3]) return?", options: ["1", "2", "3", "4"], answer: "3" },
            { id: "py-q6", question: "Which statement handles exceptions?", options: ["try/except", "if/else", "for/else", "switch/case"], answer: "try/except" },
            { id: "py-q7", question: "What is a lambda in Python?", options: ["A loop", "A list", "An anonymous function", "A class"], answer: "An anonymous function" },
            { id: "py-q8", question: "Which collection preserves insertion order?", options: ["Set", "Dictionary", "List", "Tuple"], answer: "Dictionary" },
            { id: "py-q9", question: "How do you create an empty dictionary?", options: ["[]", "()", "{}", "<>"], answer: "{}" },
            { id: "py-q10", question: "Which keyword starts a loop that repeats until a condition is false?", options: ["for", "while", "repeat", "loop"], answer: "while" }
        ],
        "web-dev": [
            { id: "web-q1", question: "Which HTML tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: "<a>" },
            { id: "web-q2", question: "Which CSS property changes text color?", options: ["font-color", "text-color", "color", "fill"], answer: "color" },
            { id: "web-q3", question: "Which HTML tag is used for JavaScript?", options: ["<js>", "<script>", "<code>", "<javascript>"], answer: "<script>" },
            { id: "web-q4", question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Model", "Document Oriented Markup", "Dynamic Object Management"], answer: "Document Object Model" },
            { id: "web-q5", question: "Which HTTP method retrieves data?", options: ["POST", "GET", "PUT", "DELETE"], answer: "GET" },
            { id: "web-q6", question: "Which CSS layout model uses rows and columns?", options: ["Flexbox", "Grid", "Block", "Inline"], answer: "Grid" },
            { id: "web-q7", question: "Which attribute assigns CSS class names?", options: ["id", "class", "style", "name"], answer: "class" },
            { id: "web-q8", question: "Which property makes an element hidden?", options: ["visibility: hidden", "show: false", "display: none", "hidden: true"], answer: "display: none" },
            { id: "web-q9", question: "Which language runs in the browser?", options: ["Python", "JavaScript", "Java", "C#"], answer: "JavaScript" },
            { id: "web-q10", question: "Which tag defines a paragraph?", options: ["<text>", "<p>", "<paragraph>", "<div>"], answer: "<p>" }
        ],
        "machine-learning": [
            { id: "ml-q1", question: "What is overfitting?", options: ["Model generalizes well", "Model fits testing data", "Model fits training data too closely", "Model is too simple"], answer: "Model fits training data too closely" },
            { id: "ml-q2", question: "Which algorithm is used for classification?", options: ["Linear Regression", "K-Means", "Decision Tree", "PCA"], answer: "Decision Tree" },
            { id: "ml-q3", question: "Which method is used to check model performance?", options: ["Training", "Cross-validation", "Deployment", "Aggregation"], answer: "Cross-validation" },
            { id: "ml-q4", question: "What does supervised learning use?", options: ["Unlabeled data", "Labeled data", "No data", "Random data"], answer: "Labeled data" },
            { id: "ml-q5", question: "Which activation function is common in neural nets?", options: ["ReLU", "Logarithm", "Square", "Add"], answer: "ReLU" },
            { id: "ml-q6", question: "Which metric is used for regression?", options: ["Precision", "Recall", "MSE", "F1 score"], answer: "MSE" },
            { id: "ml-q7", question: "Which algorithm is unsupervised?", options: ["K-Means", "Logistic Regression", "Random Forest", "SVM"], answer: "K-Means" },
            { id: "ml-q8", question: "What is feature scaling used for?", options: ["Reduce features", "Normalize data", "Remove outliers", "Encrypt data"], answer: "Normalize data" },
            { id: "ml-q9", question: "Which model type is used for image recognition?", options: ["Linear Regression", "Convolutional Neural Network", "Naive Bayes", "Decision Tree"], answer: "Convolutional Neural Network" },
            { id: "ml-q10", question: "What does training a model mean?", options: ["Building software", "Fitting the model to data", "Deploying the model", "Analyzing output"], answer: "Fitting the model to data" }
        ],
        "databases": [
            { id: "db-q1", question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Language", "Sequential Query Language"], answer: "Structured Query Language" },
            { id: "db-q2", question: "Which SQL statement retrieves data?", options: ["SELECT", "INSERT", "UPDATE", "DELETE"], answer: "SELECT" },
            { id: "db-q3", question: "Which key uniquely identifies a table row?", options: ["Foreign key", "Primary key", "Index", "Constraint"], answer: "Primary key" },
            { id: "db-q4", question: "Which normal form reduces redundancy?", options: ["1NF", "2NF", "3NF", "4NF"], answer: "3NF" },
            { id: "db-q5", question: "What does a JOIN clause do?", options: ["Deletes rows", "Combines tables", "Creates index", "Alters table"], answer: "Combines tables" },
            { id: "db-q6", question: "Which command creates a table?", options: ["CREATE TABLE", "MAKE TABLE", "NEW TABLE", "TABLE CREATE"], answer: "CREATE TABLE" },
            { id: "db-q7", question: "What does NULL represent?", options: ["Zero", "Empty string", "Missing value", "False"], answer: "Missing value" },
            { id: "db-q8", question: "Which statement updates existing records?", options: ["ALTER", "UPDATE", "MODIFY", "CHANGE"], answer: "UPDATE" },
            { id: "db-q9", question: "What does ACID stand for?", options: ["Atomicity, Consistency, Isolation, Durability", "Accuracy, Consistency, Integrity, Durability", "Atomicity, Consistency, Independence, Durability", "Availability, Consistency, Isolation, Durability"], answer: "Atomicity, Consistency, Isolation, Durability" },
            { id: "db-q10", question: "Which SQL clause filters rows?", options: ["ORDER BY", "GROUP BY", "WHERE", "HAVING"], answer: "WHERE" }
        ],
        "devops": [
            { id: "devops-q1", question: "What does CI stand for?", options: ["Continuous Integration", "Continuous Improvement", "Code Inspection", "Cloud Infrastructure"], answer: "Continuous Integration" },
            { id: "devops-q2", question: "Which tool builds containers?", options: ["Docker", "Git", "Jenkins", "Node"], answer: "Docker" },
            { id: "devops-q3", question: "What does CD stand for?", options: ["Continuous Delivery", "Code Deployment", "Container Deployment", "Continuous Development"], answer: "Continuous Delivery" },
            { id: "devops-q4", question: "Which system manages version control?", options: ["Docker", "Git", "Jenkins", "Kubernetes"], answer: "Git" },
            { id: "devops-q5", question: "What is Infrastructure as Code?", options: ["Manual server setup", "Code-based infrastructure provisioning", "A programming language", "A container tool"], answer: "Code-based infrastructure provisioning" },
            { id: "devops-q6", question: "Which tool orchestrates containers?", options: ["Docker", "Kubernetes", "Jenkins", "Terraform"], answer: "Kubernetes" },
            { id: "devops-q7", question: "What is a pipeline?", options: ["A build and release process", "A data table", "A security scan", "A server"], answer: "A build and release process" },
            { id: "devops-q8", question: "What does rollback mean?", options: ["Backup data", "Revert to a previous version", "Deploy faster", "Encrypt traffic"], answer: "Revert to a previous version" },
            { id: "devops-q9", question: "Which file format is commonly used for pipeline config?", options: ["JSON", "INI", "YAML", "TXT"], answer: "YAML" },
            { id: "devops-q10", question: "What does monitoring help with?", options: ["Building code", "Tracking performance", "Writing docs", "Designing UI"], answer: "Tracking performance" }
        ],
        "cloud-computing": [
            { id: "cloud-q1", question: "Which service type is IaaS?", options: ["AWS EC2", "Google Docs", "Salesforce", "YouTube"], answer: "AWS EC2" },
            { id: "cloud-q2", question: "What does SaaS stand for?", options: ["Software as a Service", "Security as a Service", "Storage as a Service", "System as a Service"], answer: "Software as a Service" },
            { id: "cloud-q3", question: "Which service stores objects in the cloud?", options: ["S3", "EC2", "Lambda", "DynamoDB"], answer: "S3" },
            { id: "cloud-q4", question: "What is elasticity?", options: ["Scale resources up and down", "Store data in memory", "Encrypt data", "Monitor servers"], answer: "Scale resources up and down" },
            { id: "cloud-q5", question: "Which cloud model is public?", options: ["Private cloud", "Hybrid cloud", "Public cloud", "Community cloud"], answer: "Public cloud" },
            { id: "cloud-q6", question: "What does VPC stand for?", options: ["Virtual Private Cloud", "Virtual Public Cloud", "Virtual Private Container", "Virtual Private Cluster"], answer: "Virtual Private Cloud" },
            { id: "cloud-q7", question: "Which service runs serverless functions on AWS?", options: ["EC2", "S3", "Lambda", "RDS"], answer: "Lambda" },
            { id: "cloud-q8", question: "What is multi-tenancy?", options: ["Single user setup", "Shared resources across users", "Multiple databases", "Multiple networks"], answer: "Shared resources across users" },
            { id: "cloud-q9", question: "Which feature controls user access in cloud?", options: ["IAM", "S3", "EC2", "VPC"], answer: "IAM" },
            { id: "cloud-q10", question: "What does SLA usually define?", options: ["Pricing", "Availability and uptime", "UI design", "Programming language"], answer: "Availability and uptime" }
        ],
        "cyber-security": [
            { id: "cyber-q1", question: "Which attack uses fraudulent emails to steal data?", options: ["Phishing", "DDoS", "SQL Injection", "Man-in-the-middle"], answer: "Phishing" },
            { id: "cyber-q2", question: "What does VPN help secure?", options: ["Email", "Network connection", "Hard disk", "Browser history"], answer: "Network connection" },
            { id: "cyber-q3", question: "Which is malware?", options: ["Virus", "HTML", "CSS", "SQL"], answer: "Virus" },
            { id: "cyber-q4", question: "What is two-factor authentication?", options: ["Two passwords", "Two-step verification", "Two usernames", "Two emails"], answer: "Two-step verification" },
            { id: "cyber-q5", question: "Which practice helps secure code?", options: ["Input validation", "Skipping tests", "Hard-coding passwords", "Ignoring logs"], answer: "Input validation" },
            { id: "cyber-q6", question: "What does encryption do?", options: ["Compress data", "Encode data", "Delete data", "Copy data"], answer: "Encode data" },
            { id: "cyber-q7", question: "Which tool blocks unwanted traffic?", options: ["Firewall", "Editor", "Compiler", "Router"], answer: "Firewall" },
            { id: "cyber-q8", question: "What is social engineering?", options: ["Hacking networks", "Manipulating people", "Encrypting data", "Building hardware"], answer: "Manipulating people" },
            { id: "cyber-q9", question: "Which is a strong password practice?", options: ["Using 'password'", "Reusing passwords", "Using long random phrases", "Sharing credentials"], answer: "Using long random phrases" },
            { id: "cyber-q10", question: "What does GDPR protect?", options: ["Passwords", "User data privacy", "Server uptime", "Programming bugs"], answer: "User data privacy" }
        ],
        "frontend-dev": [
            { id: "fe-q1", question: "Which HTML tag makes text bold?", options: ["<b>", "<strong>", "<bold>", "<em>"], answer: "<strong>" },
            { id: "fe-q2", question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Color Style Sheets", "Coded Style Sheets"], answer: "Cascading Style Sheets" },
            { id: "fe-q3", question: "Which property controls layout?", options: ["display", "value", "color", "margin"], answer: "display" },
            { id: "fe-q4", question: "Which method changes element text in JS?", options: ["innerHTML", "textContent", "appendChild", "setAttribute"], answer: "textContent" },
            { id: "fe-q5", question: "Which unit is relative in CSS?", options: ["px", "cm", "rem", "in"], answer: "rem" },
            { id: "fe-q6", question: "Which technology improves accessibility?", options: ["ARIA", "SQL", "HTTP", "CSS"], answer: "ARIA" },
            { id: "fe-q7", question: "Which JavaScript statement handles events?", options: ["addEventListener", "importEvent", "handleEvent", "listenEvent"], answer: "addEventListener" },
            { id: "fe-q8", question: "Which framework is component-based?", options: ["React", "PHP", "MySQL", "Linux"], answer: "React" },
            { id: "fe-q9", question: "What does responsive design do?", options: ["Fixes size", "Adapts layout to screen", "Changes content", "Removes images"], answer: "Adapts layout to screen" },
            { id: "fe-q10", question: "Which tool bundles frontend assets?", options: ["Webpack", "Postman", "Docker", "Git"], answer: "Webpack" }
        ],
        "ai-fundamentals": [
            { id: "ai-q1", question: "Which model learns from examples?", options: ["Machine Learning", "HTML", "CSS", "SQL"], answer: "Machine Learning" },
            { id: "ai-q2", question: "What does NLP stand for?", options: ["Natural Language Processing", "Network Language Protocol", "Neural Learning Pattern", "Numeric Logic Process"], answer: "Natural Language Processing" },
            { id: "ai-q3", question: "What is a neural network?", options: ["A tree structure", "A graph database", "A layered model of nodes", "A styling system"], answer: "A layered model of nodes" },
            { id: "ai-q4", question: "Which library is often used for tensor operations?", options: ["TensorFlow", "React", "Django", "MySQL"], answer: "TensorFlow" },
            { id: "ai-q5", question: "What is inference?", options: ["Training a model", "Predicting with a model", "Collecting data", "Writing code"], answer: "Predicting with a model" },
            { id: "ai-q6", question: "Which learning type uses labeled data?", options: ["Supervised", "Unsupervised", "Reinforcement", "Transfer"], answer: "Supervised" },
            { id: "ai-q7", question: "What is deep learning?", options: ["Shallow models", "Many-layer neural networks", "A data format", "A coding style"], answer: "Many-layer neural networks" },
            { id: "ai-q8", question: "Which metric measures classification accuracy?", options: ["MSE", "Accuracy", "RMSE", "Latency"], answer: "Accuracy" },
            { id: "ai-q9", question: "Which AI concept is about human-like decision-making?", options: ["Automation", "Artificial Intelligence", "Cloud Computing", "Databases"], answer: "Artificial Intelligence" },
            { id: "ai-q10", question: "What is a training data set?", options: ["Unlabeled samples", "Data used to train a model", "Deployment config", "Monitoring logs"], answer: "Data used to train a model" }
        ],
        "product-management": [
            { id: "prod-q1", question: "What does MVP stand for in product development?", options: ["Minimum Viable Product", "Most Valuable Product", "Maximum Value Plan", "Minimum Value Prototype"], answer: "Minimum Viable Product" },
            { id: "prod-q2", question: "Who is responsible for product vision?", options: ["Designer", "Product Manager", "Developer", "Tester"], answer: "Product Manager" },
            { id: "prod-q3", question: "What is a roadmap?", options: ["A feature list", "A product plan", "A bug tracker", "A marketing document"], answer: "A product plan" },
            { id: "prod-q4", question: "Which research method learns user needs?", options: ["User interviews", "Random testing", "Code review", "Budget planning"], answer: "User interviews" },
            { id: "prod-q5", question: "What is a backlog?", options: ["A list of prioritized work", "An error log", "A sales report", "A design system"], answer: "A list of prioritized work" },
            { id: "prod-q6", question: "What is product-market fit?", options: ["Product works in the market", "Product has no bugs", "Product is cheap", "Product is popular internally"], answer: "Product works in the market" },
            { id: "prod-q7", question: "What is a stakeholder?", options: ["A user", "A person interested in product success", "A developer", "A designer"], answer: "A person interested in product success" },
            { id: "prod-q8", question: "Which KPI tracks product usage?", options: ["Adoption rate", "Error rate", "Latency", "Memory use"], answer: "Adoption rate" },
            { id: "prod-q9", question: "What is feature prioritization?", options: ["Ranking ideas by impact", "Building features randomly", "Sharing features with teams", "Testing code"], answer: "Ranking ideas by impact" },
            { id: "prod-q10", question: "Which activity helps validate a product idea?", options: ["User interviews", "Ignoring feedback", "Deleting data", "Writing code"], answer: "User interviews" }
        ]
    };
    return bank[courseId] || bank["web-dev"];
}

// Frontend helper to call strict evaluator
async function evaluateAnswer({ questionId, userAnswer, required_keywords = [], optional_keywords = [], correct_answer = "" }) {
    try {
        const resp = await fetch(`${API_APP}/evaluate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ questionId, userAnswer, required_keywords, optional_keywords, correct_answer })
        });
        return await resp.json();
    } catch (e) {
        return { success: false, message: e.message };
    }
}

let COURSES = [
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
        progress: 0,
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

let ASSESSMENTS = [
    {
        id: "assess-dsa",
        courseId: "dsa",
        title: "Data Structures And Algorithms",
        duration: 180,
        totalMarks: 100,
        questions: [
            { sno: 1, name: "Coding", questions: 2, marks: 100 }
        ]
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
];

ASSESSMENTS = ASSESSMENTS.map((assessment) => ({
    ...assessment,
    mcqQuestions: generateAssessmentMCQs(assessment.courseId)
}));


function getStoredData(key) {
    return JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}${key}`) || "[]");
}

function setStoredData(key, value) {
    localStorage.setItem(`${STORAGE_PREFIX}${key}`, JSON.stringify(value));
}

function getUser() {
    try {
        return JSON.parse(localStorage.getItem("cc_user"));
    } catch (error) {
        return null;
    }
}

function getToken() {
    return localStorage.getItem("cc_token");
}

function requireAuth() {
    const user = getUser();
    const token = getToken();
    if (!user || !token) {
        window.location = "login.html";
        return false;
    }
    return true;
}

function logout() {
    localStorage.removeItem("cc_token");
    localStorage.removeItem("cc_user");
    window.location = "login.html";
}

function calculateStreak(entries) {
    if (!entries.length) return 0;
    const sorted = [...entries].sort((a, b) => new Date(b.date) - new Date(a.date));
    let streak = 0;
    let current = new Date();

    while (true) {
        const dateString = current.toISOString().slice(0, 10);
        if (sorted.some((entry) => entry.date === dateString)) {
            streak += 1;
            current.setDate(current.getDate() - 1);
        } else {
            break;
        }
    }
    return streak;
}

function renderDashboardCounts() {
    const jobs = getStoredData("jobs");
    const skills = getStoredData("skills");
    const productivity = getStoredData("productivity");
    const weeklyHours = productivity.reduce((sum, entry) => sum + Number(entry.hours || 0), 0);
    const streak = calculateStreak(productivity);

    document.getElementById("jobCount").textContent = jobs.length;
    document.getElementById("skillCount").textContent = skills.length;
    document.getElementById("hoursCount").textContent = weeklyHours;
    document.getElementById("streakCount").textContent = streak;
}

function updateNavActive() {
    const page = document.body.dataset.page;
    document.querySelectorAll(".top-nav nav a").forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href").includes(page));
    });
}

async function registerUser() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!name || !email || !password) {
        return alert("Please complete all fields.");
    }

    try {
        const response = await fetch(`${API_AUTH}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        const data = await response.json();

        if (data.success) {
            localStorage.setItem("cc_token", data.token);
            localStorage.setItem("cc_user", JSON.stringify(data.user));
            window.location = "dashboard.html";
        } else {
            alert(data.message || "Registration failed.");
        }
    } catch (error) {
        alert("Unable to connect to the server.");
    }
}

async function loginUser() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        return alert("Please enter email and password.");
    }

    try {
        const response = await fetch(`${API_AUTH}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();

        if (data.success) {
            localStorage.setItem("cc_token", data.token);
            localStorage.setItem("cc_user", JSON.stringify(data.user));
            window.location = "dashboard.html";
        } else {
            alert(data.message || "Invalid credentials.");
        }
    } catch (error) {
        alert("Unable to connect to the server.");
    }
}

function loadDashboard() {
    if (!requireAuth()) return;
    const user = getUser();
    if (user) {
        document.getElementById("userName").textContent = user.name || "Career Companion";
    }
    renderDashboardCounts();
    updateNavActive();
}

const DEFAULT_ROLE_TEMPLATES = [
    {
        id: "swe",
        title: "Software Engineer",
        description: "A software engineer crafts digital solutions through code, shaping the future of technology.",
        icon: "fa-laptop",
        iconBg: "#8b5cf6",
        color: "#6366f1",
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
        icon: "fa-globe",
        iconBg: "#0284c7",
        color: "#0284c7",
        questions: [
            { id: "jweb-1", question: "Explain the CSS Box Model and how box-sizing property affects layout rendering.", answer: "The CSS box model consists of content, padding, border, and margin. `box-sizing: border-box` includes padding and border within specified width/height.", required_keywords: ["content","padding","border","margin"], optional_keywords: ["box-sizing","border-box","width","height"] },
            { id: "jweb-2", question: "What is Event Delegation in JavaScript and why is it useful?", answer: "Event delegation attaches a single event listener to a parent element using event bubbling, reducing memory overhead." },
            { id: "jweb-3", question: "How do RESTful API requests work using `fetch` or `axios`?", answer: "They use standard HTTP verbs (GET, POST, PUT, DELETE) to transfer JSON payloads between client and server." }
        ]
    },
    {
        id: "sr-react",
        title: "Sr. React Developer",
        description: "A Senior React Developer leads advanced front-end development with React.js.",
        icon: "fa-atom",
        iconBg: "#06b6d4",
        color: "#0891b2",
        questions: [
            { id: "sreact-1", question: "How does the React Virtual DOM diffing algorithm work and how can you optimize render performance?", answer: "React uses a reconciliation algorithm with fiber trees to calculate minimal DOM updates. Optimizations include React.memo, useMemo, useCallback, and code splitting." },
            { id: "sreact-2", question: "Compare Context API vs Redux Toolkit for complex application state management.", answer: "Context API is built-in for low-frequency global state, whereas Redux Toolkit excels at complex, high-frequency state updates with devtools and middleware." }
        ]
    },
    {
        id: "jr-backend",
        title: "Jr. Backend Developer",
        description: "A junior backend developer helps optimize server-side solutions, gaining valuable experience.",
        icon: "fa-wrench",
        iconBg: "#10b981",
        color: "#059669",
        questions: [
            { id: "jback-1", question: "What is the difference between SQL and NoSQL databases, and when would you use each?", answer: "SQL databases are relational and ACID compliant (PostgreSQL). NoSQL databases are document or key-value stores optimized for horizontal scaling (MongoDB/Redis)." },
            { id: "jback-2", question: "How do Middleware functions work in Express.js?", answer: "Middleware functions access request (`req`), response (`res`), and `next()` callback for logging, auth, and error handling." }
        ]
    },
    {
        id: "pm",
        title: "Product Manager",
        description: "A product manager drives the development of innovative products, aligning customer needs with business goals.",
        icon: "fa-sliders",
        iconBg: "#f59e0b",
        color: "#ea580c",
        questions: [
            { id: "pm-1", question: "How do you prioritize product feature backlogs using frameworks like RICE or MoSCoW?", answer: "Evaluate Reach, Impact, Confidence, and Effort (RICE) or categorize features into Must-have, Should-have, Could-have, and Won't-have." },
            { id: "pm-2", question: "How do you define success metrics (KPIs) for a new user onboarding feature?", answer: "Track Activation Rate, Time-to-Value (TTV), Day 1/7 Retention, Drop-off percentage per step, and NPS/CSAT feedback scores." }
        ]
    },
    {
        id: "sr-backend",
        title: "Sr. Backend Developer",
        description: "A senior backend developer leads the design and implementation of scalable and efficient server-side solutions.",
        icon: "fa-gear",
        iconBg: "#14b8a6",
        color: "#0d9488",
        questions: [
            { id: "sback-1", question: "How do you ensure zero-downtime database migrations in a microservice architecture?", answer: "Use expand-contract pattern, additive schema changes, dual writing, and background migration scripts." },
            { id: "sback-2", question: "Explain distributed transactions and how the Saga pattern solves data consistency across microservices.", answer: "Sagas replace 2PC locks with local transactions publishing events, paired with compensating transactions for rollback handling." }
        ]
    },
    {
        id: "jr-react",
        title: "Jr. React Developer",
        description: "A junior React developer builds interactive front-end components and works with modern JavaScript libraries.",
        icon: "fa-bolt",
        iconBg: "#0284c7",
        color: "#0369a1",
        questions: [
            { id: "jreact-1", question: "What is the purpose of useEffect dependency array and how do custom hooks work?", answer: "The dependency array controls when `useEffect` re-runs. Custom hooks encapsulate reusable stateful logic into functions." }
        ]
    },
    {
        id: "qa-engineer",
        title: "QA Engineer",
        description: "A QA engineer tests and ensures software quality, identifying bugs and automated test cases.",
        icon: "fa-magnifying-glass",
        iconBg: "#ec4899",
        color: "#db2777",
        questions: [
            { id: "qa-1", question: "What is the difference between Smoke Testing, Regression Testing, and Integration Testing?", answer: "Smoke testing verifies critical path readiness, Integration testing tests component interaction, and Regression testing ensures new changes haven't broken existing features." }
        ]
    }
];

window.interviewState = {
    currentTab: "create",
    activeRole: null,
    questions: [],
    currentIndex: 0,
    answers: [],
    evaluations: [],
    isRecording: false,
    recognition: null
};

function loadInterviewPage() {
    updateNavActive();
    const user = getUser();
    if (user && document.getElementById("navAvatar")) {
        const initials = user.name ? user.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2) : "PB";
        document.getElementById("navAvatar").textContent = initials;
    }

    const token = getToken();
    const url = token ? `${API_APP}/interview/templates` : `${API_APP}/public/interview/templates`;
    const opts = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

    fetch(url, opts)
        .then((res) => res.json())
        .then((data) => {
            const templates = (Array.isArray(data?.templates) && data.templates.length > 0)
                ? data.templates
                : DEFAULT_ROLE_TEMPLATES;
            renderRoleTemplates(templates);
        })
        .catch(() => {
            renderRoleTemplates(DEFAULT_ROLE_TEMPLATES);
        });

    renderAssignedInterviews();
}

function switchInterviewTab(tab) {
    window.interviewState.currentTab = tab;
    const tabAssigned = document.getElementById("tabAssigned");
    const tabCreate = document.getElementById("tabCreate");
    const viewAssigned = document.getElementById("assignedInterviewView");
    const viewCreate = document.getElementById("createInterviewView");

    if (tab === "assigned") {
        tabAssigned.classList.add("active");
        tabCreate.classList.remove("active");
        viewAssigned.classList.remove("hidden");
        viewCreate.classList.add("hidden");
        renderAssignedInterviews();
    } else {
        tabCreate.classList.add("active");
        tabAssigned.classList.remove("active");
        viewCreate.classList.remove("hidden");
        viewAssigned.classList.add("hidden");
    }
}

function renderRoleTemplates(templates) {
    const grid = document.getElementById("templateGrid");
    if (!grid) return;

    window.availableRoleTemplates = templates;

    grid.innerHTML = templates
        .map((tpl) => {
            const iconClass = tpl.icon.startsWith("fa-") ? tpl.icon : `fa-${tpl.icon}`;
            return `
                <article class="role-card">
                    <div>
                        <div class="role-card-top">
                            <div class="role-icon-box" style="background: ${tpl.iconBg || tpl.color || '#2563eb'};">
                                <i class="fa-solid ${iconClass}"></i>
                            </div>
                            <h3 class="role-title">${tpl.title}</h3>
                        </div>
                        <p class="role-desc">${tpl.description}</p>
                    </div>
                    <div class="role-card-footer">
                        <button class="start-link" style="color: ${tpl.color || '#2563eb'};" onclick="startRoleInterview('${tpl.id}')">
                            Start Interview <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");
}

function startRoleInterview(roleId) {
    const role = (window.availableRoleTemplates || DEFAULT_ROLE_TEMPLATES).find((r) => r.id === roleId) || DEFAULT_ROLE_TEMPLATES[0];
    openInterviewRoom(role);
}

function openCustomJdModal() {
    document.getElementById("customJdModal").classList.remove("hidden");
}

function closeCustomJdModal() {
    document.getElementById("customJdModal").classList.add("hidden");
}

function submitCustomJdForm() {
    const jobTitle = document.getElementById("jdJobTitle").value.trim();
    const experienceLevel = document.getElementById("jdExpLevel").value;
    const techStack = document.getElementById("jdTechStack").value.trim();
    const jobDescription = document.getElementById("jdText").value.trim();

    if (!jobTitle || !techStack) {
        return alert("Please fill in Job Title and Tech Stack.");
    }

    const token = getToken();
    const url = token ? `${API_APP}/interview/custom` : `${API_APP}/public/interview/custom`;
    const opts = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle, experienceLevel, techStack, jobDescription })
    };
    if (token) opts.headers.Authorization = `Bearer ${token}`;

    fetch(url, opts)
        .then((res) => res.json())
        .then((data) => {
            closeCustomJdModal();
            if (data.success && data.interview) {
                openInterviewRoom({
                    id: data.interview.id,
                    title: data.interview.title,
                    description: data.interview.description,
                    color: "#7c3aed",
                    questions: data.interview.questions
                });
            } else {
                openCustomFallbackRoom(jobTitle, experienceLevel, techStack, jobDescription);
            }
        })
        .catch(() => {
            closeCustomJdModal();
            openCustomFallbackRoom(jobTitle, experienceLevel, techStack, jobDescription);
        });
}

function openCustomFallbackRoom(jobTitle, experienceLevel, techStack, jobDescription) {
    const customRole = {
        id: "custom-" + Date.now(),
        title: `${jobTitle} (${experienceLevel})`,
        description: jobDescription || `Tailored AI Interview for ${jobTitle} using ${techStack}.`,
        color: "#7c3aed",
        questions: [
            {
                id: "q1",
                question: `Tell me about your core background as a ${jobTitle} and your hands-on experience with ${techStack}.`,
                answer: `Focus on project experience with ${techStack}, your problem-solving approaches, and contributions to key software deliverables.`
            },
            {
                id: "q2",
                question: `How would you architect a solution for: "${(jobDescription || "building scalable features").slice(0, 90)}..."?`,
                answer: `Outline modular architecture, data store selection, caching, API design, and automated testing strategies.`
            },
            {
                id: "q3",
                question: `Describe a challenging bug or performance issue you encountered while using ${techStack} and how you fixed it.`,
                answer: `Explain your debugging methodology, profiling tools used, exact fix applied, and how you verified performance improvements.`
            }
        ]
    };
    openInterviewRoom(customRole);
}

function openInterviewRoom(role) {
    window.interviewState.activeRole = role;
    window.interviewState.questions = role.questions || [];
    window.interviewState.currentIndex = 0;
    window.interviewState.answers = [];
    window.interviewState.evaluations = [];

    document.getElementById("roomRoleBadge").textContent = role.category || "Role Practice";
    document.getElementById("roomRoleTitle").textContent = `${role.title} AI Interview`;
    document.getElementById("interviewRoomModal").classList.remove("hidden");

    renderCurrentQuestion();
}

function closeInterviewRoom() {
    if (window.interviewState.recognition) {
        try { window.interviewState.recognition.stop(); } catch (e) { }
    }
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }
    document.getElementById("interviewRoomModal").classList.add("hidden");
}

function renderCurrentQuestion() {
    const state = window.interviewState;
    const total = state.questions.length;
    const curr = state.currentIndex;
    const qObj = state.questions[curr];

    document.getElementById("roomProgressCounter").textContent = `Question ${curr + 1} of ${total}`;
    document.getElementById("roomProgressFill").style.width = `${Math.round(((curr + 1) / total) * 100)}%`;

    document.getElementById("roomQuestionText").textContent = qObj.question;
    document.getElementById("roomAnswerInput").value = "";
    document.getElementById("roomFeedbackCard").classList.add("hidden");
    document.getElementById("btnSubmitAnswer").style.display = "inline-flex";

    if (window.interviewState.isRecording) {
        toggleVoiceRecording();
    }
}

function speakCurrentQuestion() {
    if (!('speechSynthesis' in window)) {
        return alert("Text-to-speech is not supported in your browser.");
    }
    window.speechSynthesis.cancel();
    const text = document.getElementById("roomQuestionText").textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
}

function toggleVoiceRecording() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        return alert("Voice recognition is not supported in this browser. Please type your answer.");
    }

    const recBtn = document.getElementById("voiceRecBtn");
    const recLabel = document.getElementById("voiceRecLabel");
    const indicator = document.getElementById("voiceWaveIndicator");

    if (window.interviewState.isRecording) {
        try {
            window.interviewState.recognition.stop();
        } catch (e) { }
        window.interviewState.isRecording = false;
        recBtn.classList.remove("recording");
        recLabel.textContent = "Voice Answer";
        indicator.classList.add("hidden");
    } else {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onstart = () => {
            window.interviewState.isRecording = true;
            recBtn.classList.add("recording");
            recLabel.textContent = "Stop Recording";
            indicator.classList.remove("hidden");
        };

        recognition.onresult = (event) => {
            let finalTranscript = "";
            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript + " ";
                }
            }
            if (finalTranscript) {
                const textarea = document.getElementById("roomAnswerInput");
                textarea.value = (textarea.value + " " + finalTranscript).trim();
            }
        };

        recognition.onerror = () => {
            window.interviewState.isRecording = false;
            recBtn.classList.remove("recording");
            recLabel.textContent = "Voice Answer";
            indicator.classList.add("hidden");
        };

        recognition.onend = () => {
            window.interviewState.isRecording = false;
            recBtn.classList.remove("recording");
            recLabel.textContent = "Voice Answer";
            indicator.classList.add("hidden");
        };

        window.interviewState.recognition = recognition;
        recognition.start();
    }
}

function submitRoomAnswer() {
    const answer = document.getElementById("roomAnswerInput").value.trim();
    if (!answer) {
        return alert("Please enter or speak your answer first.");
    }

    if (window.interviewState.isRecording) {
        toggleVoiceRecording();
    }

    const state = window.interviewState;
    const qObj = state.questions[state.currentIndex];

    // If the question defines required/optional keywords, use strict evaluator
    const hasKeywords = Array.isArray(qObj.required_keywords) || Array.isArray(qObj.optional_keywords);
    if (hasKeywords) {
        const payload = {
            questionId: qObj.id || null,
            userAnswer: answer,
            required_keywords: qObj.required_keywords || [],
            optional_keywords: qObj.optional_keywords || [],
            correct_answer: qObj.answer || ""
        };

        fetch(`${API_APP}/evaluate`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
            .then((res) => res.json())
            .then((data) => {
                if (!data || !data.success || !data.evaluation) {
                    throw new Error('Evaluation failed');
                }
                const ev = data.evaluation;
                // Build strengths/improvements based on matched/missing keywords
                const strengths = ev.matched_required && ev.matched_required.length > 0 ? ["Covered core required concepts"] : [];
                if (ev.matched_optional && ev.matched_optional.length) strengths.push("Included helpful optional details");

                const improvements = [];
                if (ev.missing_required && ev.missing_required.length) {
                    improvements.push(`Missing required keywords: ${ev.missing_required.join(', ')}`);
                }
                if (ev.missing_optional && ev.missing_optional.length) {
                    improvements.push(`Consider mentioning: ${ev.missing_optional.join(', ')}`);
                }

                const feedbackList = [ev.reason || 'Evaluation complete.'];
                displayFeedbackInRoom(ev.score, strengths.length ? strengths : ["Answer evaluated"], improvements.length ? improvements : ["No suggestions"], feedbackList, qObj.answer);
                state.answers[state.currentIndex] = answer;
                state.evaluations[state.currentIndex] = { score: ev.score, feedbackList, strengths, improvements };
            })
            .catch(() => {
                // Fallback to existing feedback endpoint on error
                fetchFallbackFeedback();
            });
    } else {
        // No keyword lists available — use existing feedback endpoint
        fetchFallbackFeedback();
    }

    function fetchFallbackFeedback() {
        const token = getToken();
        const url = token ? `${API_APP}/interview/feedback` : `${API_APP}/public/interview/feedback`;
        const opts = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answer, question: qObj.question })
        };
        if (token) opts.headers.Authorization = `Bearer ${token}`;

        fetch(url, opts)
            .then((res) => res.json())
            .then((data) => {
                const feedbackList = Array.isArray(data.feedback) ? data.feedback : ["Good effort."];
                const score = data.score || 85;
                const strengths = data.strengths || ["Technical clarity", "Structured response"];
                const improvements = data.improvements || ["Quantify impact with data points", "Expand implementation detail"];

                displayFeedbackInRoom(score, strengths, improvements, feedbackList, qObj.answer);
                state.answers[state.currentIndex] = answer;
                state.evaluations[state.currentIndex] = { score, feedbackList, strengths, improvements };
            })
            .catch(() => {
                const score = 82;
                const strengths = ["Good structure and vocabulary"];
                const improvements = ["Include specific metrics and framework names"];
                const feedbackList = ["Clear answer with room to add quantifiable results."];

                displayFeedbackInRoom(score, strengths, improvements, feedbackList, qObj.answer);
                state.answers[state.currentIndex] = answer;
                state.evaluations[state.currentIndex] = { score, feedbackList, strengths, improvements };
            });
    }
}

function displayFeedbackInRoom(score, strengths, improvements, feedbackList, idealAnswer) {
    document.getElementById("roomScoreBadge").textContent = `${score}/100`;

    const sList = document.getElementById("roomStrengthsList");
    sList.innerHTML = strengths.map(s => `<li>${s}</li>`).join("");

    const iList = document.getElementById("roomImprovementsList");
    iList.innerHTML = improvements.map(i => `<li>${i}</li>`).join("");

    document.getElementById("roomSampleAnswerText").textContent = idealAnswer || "Focus on metrics, architecture, and team impact.";

    document.getElementById("roomFeedbackCard").classList.remove("hidden");
    document.getElementById("btnSubmitAnswer").style.display = "none";
}

function skipInterviewQuestion() {
    const state = window.interviewState;
    state.answers[state.currentIndex] = "[Skipped Question]";
    state.evaluations[state.currentIndex] = { score: 60, strengths: ["Attempted skip"], improvements: ["Answer fully"] };
    nextInterviewQuestion();
}

function nextInterviewQuestion() {
    const state = window.interviewState;
    state.currentIndex += 1;

    if (state.currentIndex >= state.questions.length) {
        finishInterviewSession();
    } else {
        renderCurrentQuestion();
    }
}

function finishInterviewSession() {
    closeInterviewRoom();
    const state = window.interviewState;
    const role = state.activeRole;
    const evals = state.evaluations;

    const totalScore = evals.reduce((sum, e) => sum + (e.score || 75), 0);
    const avgScore = evals.length ? Math.round(totalScore / evals.length) : 80;

    const sessionRecord = {
        id: "sess-" + Date.now(),
        roleTitle: role.title,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
        score: avgScore,
        status: "Completed",
        questionsCount: state.questions.length
    };

    saveAssignedInterviewSession(sessionRecord);

    document.getElementById("summaryRoleTitle").textContent = role.title;
    document.getElementById("summaryFinalScore").textContent = avgScore;
    document.getElementById("summaryCompletionText").textContent = `Completed ${state.questions.length} out of ${state.questions.length} questions`;

    const breakdown = document.getElementById("summaryBreakdownList");
    breakdown.innerHTML = state.questions.map((q, idx) => {
        const ev = evals[idx] || { score: 75 };
        return `
            <div class="breakdown-item">
                <h4>Q${idx + 1}: ${q.question}</h4>
                <span class="badge-score">${ev.score || 75}/100</span>
            </div>
        `;
    }).join("");

    document.getElementById("interviewSummaryModal").classList.remove("hidden");
}

function closeSummaryModal() {
    document.getElementById("interviewSummaryModal").classList.add("hidden");
}

function saveAssignedInterviewSession(session) {
    const list = getStoredData("assigned_interviews");
    list.unshift(session);
    setStoredData("assigned_interviews", list);
}

function renderAssignedInterviews() {
    const container = document.getElementById("assignedList");
    if (!container) return;

    const saved = getStoredData("assigned_interviews");
    if (!saved.length) {
        container.innerHTML = `
            <div class="empty-state">
                <h3>No Assigned or Saved Interviews Yet</h3>
                <p>Select a template from 'Create Interview' tab or create a custom job description to begin!</p>
            </div>
        `;
        return;
    }

    container.innerHTML = saved.map(item => `
        <article class="assigned-card">
            <div class="assigned-info">
                <h3>${item.roleTitle}</h3>
                <p>Completed on ${item.date} · ${item.questionsCount || 4} Questions</p>
            </div>
            <div class="assigned-status-group">
                <span class="badge-score">${item.score}/100</span>
                <span class="badge-completed"><i class="fa-solid fa-check"></i> ${item.status || 'Completed'}</span>
                <button class="button small secondary" onclick="startRoleInterview('swe')">Retake Session</button>
            </div>
        </article>
    `).join("");
}

function loadSkillsPage() {
    if (!requireAuth()) return;
    updateNavActive();
    renderSkills();
}

function renderSkills() {
    const skills = getStoredData("skills");
    const skillContainer = document.getElementById("skillRoadmap");
    if (!skillContainer) return;

    if (!skills.length) {
        skillContainer.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>No Skills Added Yet</h3>
                <p>Use the form above to add your target technical skills and track your level!</p>
            </div>
        `;
        return;
    }

    const levelColors = {
        Beginner: { bg: "#eff6ff", text: "#2563eb", icon: "fa-seedling" },
        Intermediate: { bg: "#f0fdf4", text: "#16a34a", icon: "fa-layer-group" },
        Advanced: { bg: "#f3e8ff", text: "#9333ea", icon: "fa-award" }
    };

    skillContainer.innerHTML = skills
        .map((skill, index) => {
            const conf = levelColors[skill.level] || levelColors.Intermediate;
            return `
                <article class="role-card">
                    <div>
                        <div class="role-card-top">
                            <div class="role-icon-box" style="background: ${conf.bg}; color: ${conf.text};">
                                <i class="fa-solid ${conf.icon}"></i>
                            </div>
                            <div>
                                <h3 class="role-title">${skill.name}</h3>
                                <span class="badge-completed" style="background: ${conf.bg}; color: ${conf.text}; margin-top: 4px; display: inline-block;">
                                    ${skill.level}
                                </span>
                            </div>
                        </div>
                        <p class="role-desc">Tracked skill in your active preparation roadmap.</p>
                    </div>
                    <div class="role-card-footer" style="justify-content: flex-end;">
                        <button class="button secondary small" onclick="removeSkill(${index})">
                            <i class="fa-solid fa-trash-can"></i> Remove
                        </button>
                    </div>
                </article>
            `;
        })
        .join("");
}

function addSkill() {
    const name = document.getElementById("skillName").value.trim();
    const level = document.getElementById("skillLevel").value;

    if (!name) {
        return alert("Please enter a skill name.");
    }

    const skills = getStoredData("skills");
    skills.push({ name, level });
    setStoredData("skills", skills);
    document.getElementById("skillName").value = "";
    renderSkills();
}

function removeSkill(index) {
    const skills = getStoredData("skills");
    skills.splice(index, 1);
    setStoredData("skills", skills);
    renderSkills();
}

function loadJobsPage() {
    if (!requireAuth()) return;
    updateNavActive();
    searchJobs();
}

function getLearningProgress() {
    return JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}learning_progress`) || "{}");
}

function saveLearningProgress(progress) {
    localStorage.setItem(`${STORAGE_PREFIX}learning_progress`, JSON.stringify(progress));
}

function getCourseProgress(courseId, fallback = 0) {
    const savedProgress = getLearningProgress();
    const savedValue = savedProgress[courseId];
    if (typeof savedValue === "number") return savedValue;

    const course = COURSES.find((item) => item.id === courseId);
    return typeof course?.progress === "number" ? course.progress : fallback;
}

function syncCourseProgress(courseId, progressValue) {
    const progress = getLearningProgress();
    progress[courseId] = progressValue;
    saveLearningProgress(progress);

    const course = COURSES.find((item) => item.id === courseId);
    if (course) course.progress = progressValue;
    if (window.currentCourse?.id === courseId) window.currentCourse.progress = progressValue;

    return progressValue;
}

function updateLearningStats(progress) {
    const completed = Object.values(progress).filter((value) => value >= 100).length;
    document.getElementById("activeModules").textContent = LEARNING_MODULES.length;
    document.getElementById("completedModules").textContent = completed;
    document.getElementById("learningCompletion").textContent = `${Math.round((completed / LEARNING_MODULES.length) * 100)}% Complete`;
}

function renderLearningModuleDetail(moduleId) {
    const module = LEARNING_MODULES.find((item) => item.id === moduleId) || LEARNING_MODULES[0];
    const progress = getLearningProgress()[module.id] || 0;
    const detail = document.getElementById("learningModuleDetail");
    if (!detail) return;

    detail.innerHTML = `
        <div class="module-detail-header">
            <p class="eyebrow">Learning Path</p>
            <h2>${module.title}</h2>
            <p class="page-copy">${module.description}</p>
        </div>
        <div class="module-meta">
            <span>${module.lessons} lessons</span>
            <span>${module.duration}</span>
            <span>${module.focus}</span>
        </div>
        <div class="progress-bar">
            <span class="progress-bar-fill" style="width:${progress}%"></span>
        </div>
        <div class="progress-summary-text">
            <strong>${progress}% Complete</strong>
            <p>${progress === 100 ? "You finished this module." : "Continue the lessons and complete your next milestone."}</p>
        </div>
        <div class="module-actions">
            <button class="button" onclick="startLearningModule('${module.id}')">Continue Learning</button>
            <button class="button secondary" onclick="completeLearningModule('${module.id}')">Mark Complete</button>
        </div>
    `;
}

function renderLearningModules(selectedId) {
    const progress = getLearningProgress();
    const moduleList = document.getElementById("learningModuleList");
    if (!moduleList) return;

    const currentId = selectedId || window.selectedLearningModule || LEARNING_MODULES[0].id;
    window.selectedLearningModule = currentId;

    moduleList.innerHTML = LEARNING_MODULES.map((module) => {
        const completed = progress[module.id] || 0;
        const active = module.id === currentId ? "active" : "";
        return `
            <article class="module-card ${active}" data-module-id="${module.id}" onclick="selectLearningModule('${module.id}')">
                <div>
                    <h3>${module.title}</h3>
                    <p>${module.description}</p>
                </div>
                <div class="module-card-footer">
                    <span>${completed}%</span>
                    <span>${module.duration}</span>
                </div>
                <div class="progress-bar small">
                    <span class="progress-bar-fill" style="width:${completed}%"></span>
                </div>
            </article>
        `;
    }).join("");

    renderLearningModuleDetail(currentId);
    updateLearningStats(progress);
}

function selectLearningModule(moduleId) {
    window.selectedLearningModule = moduleId;
    renderLearningModules(moduleId);
}

function startLearningModule(moduleId) {
    const currentId = moduleId || window.selectedLearningModule || LEARNING_MODULES[0].id;
    selectLearningModule(currentId);
    document.querySelector(`[data-module-id="${currentId}"]`)?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function completeLearningModule(moduleId) {
    const progress = getLearningProgress();
    progress[moduleId] = 100;
    saveLearningProgress(progress);
    renderLearningModules(moduleId);
    alert("Learning module marked complete.");
}

function loadLearningPage() {
    if (!requireAuth()) return;
    updateNavActive();
    window.learningCatalogState = { search: "", category: "All" };

    const params = new URLSearchParams(window.location.search);
    const cat = params.get("category");
    if (cat) {
        window.learningCatalogState.category = decodeURIComponent(cat);
    }

    fetchLearningData().then(() => {
        renderLearningCatalog();
    });
}

async function fetchLearningData() {
    try {
        const [modulesRes, coursesRes, assessmentsRes] = await Promise.all([
            fetch(`${API_APP}/learning/modules`),
            fetch(`${API_APP}/courses`),
            fetch(`${API_APP}/assessments`)
        ]);

        if (modulesRes.ok) {
            const m = await modulesRes.json();
            if (m?.modules) LEARNING_MODULES = m.modules;
        }

        if (coursesRes.ok) {
            const c = await coursesRes.json();
            if (c?.courses) {
                const savedProgress = getLearningProgress();
                COURSES = c.courses.map((course) => ({
                    ...course,
                    progress: typeof savedProgress[course.id] === "number" ? savedProgress[course.id] : Number(course.progress) || 0
                }));
            }
        }

        if (assessmentsRes.ok) {
            const a = await assessmentsRes.json();
            if (a?.assessments) {
                ASSESSMENTS = a.assessments.map((assessment) => ({
                    ...assessment,
                    mcqQuestions: generateAssessmentMCQs(assessment.courseId)
                }));
            }
        }
    } catch (err) {
        console.warn("Unable to fetch learning data, using local fallback.", err);
    }
}

function renderLearningCatalog() {
    renderCourseCategoryFilters();

    const params = new URLSearchParams(window.location.search);
    const view = params.get("view");
    const id = params.get("id");

    const searchBox = document.querySelector(".card-panel-box");
    const pathHeader = document.querySelector(".path-header");
    const courseGrid = document.getElementById("courseGrid");
    const detailView = document.getElementById("courseDetailView");
    const assessmentView = document.getElementById("assessmentView");

    if (view === "course" && id) {
        const course = COURSES.find((c) => c.id === id) || COURSES[0];
        window.currentCourse = course;
        if (searchBox) searchBox.style.display = "none";
        if (pathHeader) pathHeader.style.display = "none";
        if (courseGrid) courseGrid.style.display = "none";
        if (assessmentView) assessmentView.classList.add("hidden");
        if (detailView) {
            detailView.classList.remove("hidden");
            renderCourseDetail(course);
        }
    } else if (view === "assessment" && id) {
        const assessment = ASSESSMENTS.find((a) => a.id === id) || ASSESSMENTS[0];
        window.currentAssessment = assessment;
        if (searchBox) searchBox.style.display = "none";
        if (pathHeader) pathHeader.style.display = "none";
        if (courseGrid) courseGrid.style.display = "none";
        if (detailView) detailView.classList.add("hidden");
        if (assessmentView) {
            assessmentView.classList.remove("hidden");
            renderAssessmentDetail(assessment);
        }
    } else {
        if (searchBox) searchBox.style.display = "block";
        if (pathHeader) pathHeader.style.display = "block";
        if (courseGrid) courseGrid.style.display = "grid";
        if (detailView) detailView.classList.add("hidden");
        if (assessmentView) assessmentView.classList.add("hidden");
        updateCourseFilters();
    }
}

function renderCourseCategoryFilters() {
    const categories = ["All", ...new Set(COURSES.map((course) => course.category || extractCourseCategory(course.title)))];
    const chipContainer = document.getElementById("courseCategoryFilters");
    if (chipContainer) {
        chipContainer.innerHTML = categories
            .map(
                (category) => `<button class="cat-chip-btn ${window.learningCatalogState.category === category ? "active" : ""}" onclick="selectCourseCategory('${category}')">${category}</button>`
            )
            .join("");
    }
}

function extractCourseCategory(title) {
    const lower = (title || "").toLowerCase();
    if (lower.includes("data structures") || lower.includes("algorithms")) return "Data Structures";
    if (lower.includes("java")) return "Java";
    if (lower.includes("data science")) return "Data Science";
    if (lower.includes("career") || lower.includes("resume") || lower.includes("portfolio")) return "Career Skills";
    return "General";
}

function categoryCount(category) {
    if (category === "All") return COURSES.length;
    return COURSES.filter((course) => (course.category || extractCourseCategory(course.title)) === category).length;
}

function selectCourseCategory(category) {
    window.location.href = `learning.html?category=${encodeURIComponent(category)}`;
}

function updateCourseFilters() {
    const searchInput = document.getElementById("courseSearch");
    window.learningCatalogState.search = searchInput?.value.trim() || "";

    const list = document.getElementById("courseGrid");
    if (!list) return;

    const searchText = window.learningCatalogState.search.toLowerCase();
    const activeCategory = window.learningCatalogState.category;

    const filteredCourses = COURSES.filter((course) => {
        const category = course.category || extractCourseCategory(course.title);
        const matchesCategory = activeCategory === "All" || category === activeCategory;
        const matchesSearch = course.title.toLowerCase().includes(searchText) || (course.description || "").toLowerCase().includes(searchText);
        return matchesCategory && matchesSearch;
    });

    list.innerHTML = filteredCourses.length
        ? filteredCourses.map((course) => renderCourseCard(course)).join("")
        : `<div class="empty-state" style="grid-column: 1 / -1;"><h3>No courses found.</h3><p>Try a different keyword or category.</p></div>`;
}

function renderCourseCard(course) {
    const category = course.category || extractCourseCategory(course.title);
    return `
        <article class="role-card" onclick="viewCourseDetail('${course.id}')" style="cursor: pointer;">
            <div>
                <div class="role-card-top">
                    <div class="role-icon-box" style="background: #eff6ff; color: #2563eb;">
                        <i class="fa-solid fa-book-open"></i>
                    </div>
                    <div>
                        <h3 class="role-title">${course.title}</h3>
                        <span class="badge-completed" style="background: #f1f5f9; color: #475569; margin-top: 4px; display: inline-block;">
                            ${course.status || 'Active'}
                        </span>
                    </div>
                </div>
                <p class="role-desc">${course.description || `${course.assessments} assessments · ${course.startDate}`}</p>
            </div>
            <div class="role-card-footer" style="justify-content: space-between;">
                <span style="font-size: 0.82rem; color: #64748b; font-weight: 600;">${category}</span>
                <button class="start-link" style="color: #2563eb;" onclick="event.stopPropagation(); viewCourseDetail('${course.id}');">
                    View Course <i class="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </article>
    `;
}

function viewCourseDetail(courseId) {
    window.location.href = `learning.html?view=course&id=${courseId}`;
}

function renderCourseDetail(course) {
    const container = document.getElementById("courseDetailContainer");
    if (!container) return;

    const courseProgress = getCourseProgress(course.id, course.progress || 0);
    const weeks = Array.isArray(course.weeks)
        ? course.weeks.map((week) => ({ week: week.week, lessons: normalizeLessonList(week.lessons) }))
        : [];

    const params = new URLSearchParams(window.location.search);
    const completedNotice = params.get("completed") ? `<div class="status-badge-success" style="margin-bottom: 16px;"><i class="fa-solid fa-check"></i> Course Marked Complete!</div>` : "";

    container.innerHTML = `
        ${completedNotice}
        <div class="course-detail-header">
            <div>
                <p class="hero-eyebrow" style="justify-content: flex-start;">${course.category || extractCourseCategory(course.title)}</p>
                <h2>${course.title}</h2>
                <p class="course-body">${course.description || "This course covers the key topics you need for your next career move."}</p>
            </div>
            <div class="detail-stats">
                <span class="badge-score">${course.status}</span>
            </div>
        </div>
        <div class="course-detail-grid">
            <div class="course-detail-main">
                <div class="detail-section">
                    <h3>About this course</h3>
                    <p class="course-body">${course.description || "A practical, guided learning path with assessments and hands-on tasks."}</p>
                </div>
                <div class="detail-section detail-summary">
                    <div><strong>Start</strong><span>${course.startDate}</span></div>
                    <div><strong>End</strong><span>${course.endDate}</span></div>
                    <div><strong>Assessments</strong><span>${course.assessments}</span></div>
                    <div><strong>Duration</strong><span>${course.duration || "Self-paced"}</span></div>
                </div>
                <div class="detail-section">
                    <h3>Weekly outline</h3>
                    ${weeks
            .map(
                (week) => `
                        <div class="lesson-group">
                            <div class="lesson-group-title">Week ${week.week}</div>
                            <div class="lesson-list">
                                ${week.lessons.map((lesson) => `<div class="lesson-item">${lesson}</div>`).join("")}
                            </div>
                        </div>
                    `
            )
            .join("")}
                </div>
            </div>
            <aside class="course-detail-sidebar">
                <div class="sidebar-box">
                    <h3>Progress</h3>
                    <div class="progress-bar">
                        <span class="progress-bar-fill" style="width:${courseProgress}%"></span>
                    </div>
                    <p>${courseProgress}% complete</p>
                </div>
                <div class="sidebar-box">
                    <h3>Actions</h3>
                    <button class="button primary" style="width:100%; margin-bottom: 10px;" onclick="startAssessmentForCourse('${course.id}')">
                        <i class="fa-solid fa-pen-to-square"></i> Start Assessment
                    </button>
                    <button class="button secondary" style="width:100%;" onclick="markCourseComplete('${course.id}')">
                        <i class="fa-solid fa-check-double"></i> Mark Complete
                    </button>
                </div>
            </aside>
        </div>
    `;
}

function normalizeLessonList(lessons) {
    if (Array.isArray(lessons)) return lessons;
    if (!lessons) return [];
    return lessons.split(/,|\n|\||;/).map((item) => item.trim()).filter(Boolean);
}

function closeCourseDetail() {
    window.location.href = "learning.html";
}

function startAssessmentForCourse(courseId) {
    const assessment = ASSESSMENTS.find((a) => a.courseId === courseId);
    if (assessment) {
        window.location.href = `learning.html?view=assessment&id=${assessment.id}`;
        return;
    }
    alert("No assessment attached to this course yet.");
}

function viewAssessmentDetail(assessmentId) {
    window.location.href = `learning.html?view=assessment&id=${assessmentId}`;
}

function renderAssessmentDetail(assessment) {
    const container = document.getElementById("assessmentContainer");
    if (!container) return;

    const questions = Array.isArray(assessment.mcqQuestions) ? assessment.mcqQuestions : [];
    container.innerHTML = `
        <div class="course-detail-header">
            <div>
                <p class="hero-eyebrow" style="justify-content: flex-start;">${assessment.title}</p>
                <h2>${assessment.title} Assessment</h2>
                <p class="course-body">Answer the MCQs to test your knowledge for this course.</p>
            </div>
            <div class="detail-stats">
                <span class="badge-score">${questions.length} Questions</span>
            </div>
        </div>
        <div class="assessment-summary">
            <div><strong>Duration</strong><span>${Math.ceil((assessment.duration || 120) / 60)} mins</span></div>
            <div><strong>Total Marks</strong><span>${assessment.totalMarks || 100}</span></div>
        </div>
        <form id="assessmentForm" class="assessment-form" onsubmit="event.preventDefault(); submitAssessment('${assessment.id}')">
            ${questions
            .map(
                (question, index) => `
                    <fieldset class="assessment-question">
                        <legend>${index + 1}. ${question.question}</legend>
                        <div class="assessment-options">
                            ${question.options
                        .map(
                            (option) => `
                                        <label>
                                            <input type="radio"
                                                   name="assessment_${assessment.id}_${index}"
                                                   value="${option}"
                                                   onchange="saveAssessmentAnswer('${assessment.id}', ${index}, this.value)" />
                                            ${option}
                                        </label>
                                    `
                        )
                        .join("")}
                        </div>
                    </fieldset>
                `
            )
            .join("")}
            <div class="assessment-actions">
                <button type="submit" class="button primary"><i class="fa-solid fa-paper-plane"></i> Submit Answers</button>
                <button type="button" class="button secondary" onclick="closeAssessmentView()">Cancel</button>
            </div>
        </form>
        <div id="assessmentResult" class="assessment-result"></div>
    `;
}

function saveAssessmentAnswer(assessmentId, questionIndex, value) {
    window.assessmentAnswers = window.assessmentAnswers || {};
    window.assessmentAnswers[assessmentId] = window.assessmentAnswers[assessmentId] || {};
    window.assessmentAnswers[assessmentId][questionIndex] = value;
}

function submitAssessment(assessmentId) {
    const assessment = ASSESSMENTS.find((a) => a.id === assessmentId);
    if (!assessment) return;

    const answers = window.assessmentAnswers?.[assessmentId] || {};
    const questions = Array.isArray(assessment.mcqQuestions) ? assessment.mcqQuestions : [];
    const score = questions.reduce((count, question, index) => {
        return count + (answers[index] === question.answer ? 1 : 0);
    }, 0);

    const calculatedScore = Math.round((score / (questions.length || 1)) * (assessment.totalMarks || 100));

    const result = document.getElementById("assessmentResult");
    if (result) {
        result.innerHTML = `
            <div class="feedback-analysis-card" style="margin-top: 20px;">
                <div class="feedback-header">
                    <div class="score-badge-circle">${calculatedScore}</div>
                    <div>
                        <h3>Assessment Completed!</h3>
                        <p>You answered ${score} out of ${questions.length} questions correctly.</p>
                    </div>
                </div>
                <button class="button primary" onclick="window.location.href='learning.html'"><i class="fa-solid fa-arrow-left"></i> Return to Learning Catalog</button>
            </div>
        `;
    }
}

function closeAssessmentView() {
    window.location.href = "learning.html";
}

function markCourseComplete(courseId) {
    syncCourseProgress(courseId, 100);
    window.location.href = `learning.html?view=course&id=${courseId}&completed=1`;
}

function searchJobs() {
    const role = document.getElementById("searchRole")?.value.trim().toLowerCase() || "";
    const location = document.getElementById("searchLocation")?.value.trim().toLowerCase() || "";
    const filteredJobs = JOB_SEARCH_LIST.filter(
        (job) => job.role.toLowerCase().includes(role) && job.location.toLowerCase().includes(location)
    );
    renderJobSearchResults(filteredJobs);
}
function searchJobs() {
    const role = document.getElementById("searchRole")?.value.trim().toLowerCase() || "";
    const location = document.getElementById("searchLocation")?.value.trim().toLowerCase() || "";
    const filteredJobs = JOB_SEARCH_LIST.filter(
        (job) => job.role.toLowerCase().includes(role) && job.location.toLowerCase().includes(location)
    );
    renderJobSearchResults(filteredJobs);
}

function renderJobSearchResults(results) {
    const jobResults = document.getElementById("jobResults");
    if (!jobResults) return;

    if (!results.length) {
        jobResults.innerHTML = `
            <div class="empty-state">
                <h3>No Matching Jobs Found</h3>
                <p>Try searching for a different role keyword or location filter.</p>
            </div>
        `;
        return;
    }

    jobResults.innerHTML = results
        .map(
            (job) => `
                <article class="assigned-card">
                    <div class="assigned-info">
                        <h3>${job.role}</h3>
                        <p><strong>${job.company}</strong> · <i class="fa-solid fa-location-dot"></i> ${job.location} · ${job.type}</p>
                        <div style="display: flex; gap: 8px; margin-top: 8px;">
                            <span class="pill-label" style="padding: 2px 10px;">Exp: ${job.experience}</span>
                            <span class="pill-label" style="padding: 2px 10px; background: #f0fdf4; color: #15803d;">Salary: ${job.salary}</span>
                        </div>
                    </div>
                    <div class="assigned-status-group">
                        <button class="button primary" onclick="applyJob('${job.company}', '${job.role}')">
                            <i class="fa-solid fa-paper-plane"></i> Apply Now
                        </button>
                    </div>
                </article>
            `
        )
        .join("");
}

function applyJob(company, role = "Job") {
    const jobs = getStoredData("jobs") || [];
    const alreadyApplied = jobs.some((job) => job.company === company && job.role === role);

    if (!alreadyApplied) {
        jobs.push({
            company,
            role,
            status: "Interview",
            appliedDate: new Date().toISOString().slice(0, 10),
            date: new Date().toISOString().slice(0, 10)
        });
        setStoredData("jobs", jobs);

        if (document.body?.dataset?.page === "analytics" && typeof renderAnalytics === "function") {
            renderAnalytics();
        }

        if (typeof renderDashboardCounts === "function") {
            renderDashboardCounts();
        }
    }

    alert(`Application Sent to ${company}`);
}

function loadAnalyticsPage() {
    if (!requireAuth()) return;
    updateNavActive();
    renderAnalytics();
}

function renderAnalytics() {
    // 1. Gather data from all modules
    const interviews = getStoredData("assigned_interviews") || [];
    const skills = getStoredData("skills") || [];
    const jobs = getStoredData("jobs") || [];
    const learning = getStoredData("learning_progress") || {};
    const productivity = getStoredData("productivity") || [];

    // --- KPIs ---
    const totalInterviews = interviews.length;
    const avgScore = totalInterviews ? Math.round(interviews.reduce((sum, i) => sum + (i.score || 0), 0) / totalInterviews) : 0;
    const totalSkills = skills.length;
    const totalJobs = jobs.length;
    const enrolledCourses = Object.keys(learning).length;
    const studyHours = productivity.reduce((sum, item) => sum + Number(item.hours || 0), 0);
    const completedTasks = productivity.reduce((sum, item) => sum + Number(item.tasks || 0), 0);
    const streakDays = calculateStreak(productivity);

    document.getElementById("kpiInterviews").textContent = totalInterviews;
    document.getElementById("kpiAvgScore").textContent = `${avgScore}/100`;
    document.getElementById("kpiSkills").textContent = totalSkills;
    document.getElementById("kpiJobs").textContent = totalJobs;
    document.getElementById("kpiCourses").textContent = enrolledCourses;
    document.getElementById("kpiStudyHours").textContent = studyHours;
    document.getElementById("kpiTasks").textContent = completedTasks;
    document.getElementById("kpiStreak").textContent = streakDays;

    // --- Module Summary Stats ---

    // Interview Mod
    const bestScore = interviews.length ? Math.max(...interviews.map(i => i.score || 0)) : 0;
    const recentTopic = interviews.length ? interviews[0].roleTitle : "N/A";
    document.getElementById("statBestScore").textContent = `${bestScore}/100`;
    document.getElementById("statRecentTopic").textContent = recentTopic;

    // Skills Mod
    const advSkills = skills.filter(s => s.level === "Advanced").length;
    const begSkills = skills.filter(s => s.level === "Beginner").length;
    document.getElementById("statAdvSkills").textContent = advSkills;
    document.getElementById("statBegSkills").textContent = begSkills;

    // Jobs Mod
    const jobInterviews = jobs.filter(j => j.status === "Interview").length;
    const jobOffers = jobs.filter(j => j.status === "Offer").length;
    document.getElementById("statJobInterviews").textContent = jobInterviews;
    document.getElementById("statJobOffers").textContent = jobOffers;

    // Learning Mod
    const compCourses = Object.values(learning).filter(p => p === 100).length;
    const assessmentsDone = (window.assessmentAnswers ? Object.keys(window.assessmentAnswers).length : 0);
    document.getElementById("statCoursesComp").textContent = compCourses;
    document.getElementById("statAssessments").textContent = assessmentsDone;


    // --- Charts ---
    renderInterviewChart(interviews);
    renderSkillsDonut(skills);
    renderProductivityChart(productivity);

    // --- Activity Feed ---
    renderActivityFeed(interviews, skills, jobs, productivity);
}

function renderInterviewChart(interviews) {
    const canvas = document.getElementById("interviewScoreChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    // Resize for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const width = rect.width;
    const height = rect.height;
    ctx.clearRect(0, 0, width, height);

    if (interviews.length === 0) {
        ctx.fillStyle = "#94a3b8";
        ctx.font = "14px Inter";
        ctx.textAlign = "center";
        ctx.fillText("No interview data available yet.", width / 2, height / 2);
        return;
    }

    const data = interviews.slice(0, 7).reverse(); // Last 7 interviews

    const padding = 40;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;

    const maxScore = 100;
    const barSpacing = 20;
    const barWidth = Math.min(40, (chartW / data.length) - barSpacing);

    // Draw grid and axes
    ctx.strokeStyle = "rgba(148, 163, 184, 0.2)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, height - padding);
    ctx.lineTo(width - padding, height - padding);
    ctx.stroke();

    // Draw bars
    data.forEach((item, i) => {
        const score = item.score || 0;
        const barH = (score / maxScore) * chartH;

        const x = padding + 20 + i * (barWidth + barSpacing);
        const y = height - padding - barH;

        // Gradient
        const grad = ctx.createLinearGradient(x, y, x, y + barH);
        grad.addColorStop(0, "rgba(59, 130, 246, 0.8)");
        grad.addColorStop(1, "rgba(59, 130, 246, 0.2)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.roundRect(x, y, barWidth, barH, [4, 4, 0, 0]);
        ctx.fill();

        // Label
        ctx.fillStyle = "#f8fafc";
        ctx.font = "11px Inter";
        ctx.textAlign = "center";
        ctx.fillText(`${score}`, x + barWidth / 2, y - 8);

        ctx.fillStyle = "#94a3b8";
        ctx.font = "10px Inter";
        let shortDate = item.date ? item.date.split(",")[0] : `S${i + 1}`;
        ctx.fillText(shortDate, x + barWidth / 2, height - padding + 15);
    });
}

function renderSkillsDonut(skills) {
    const svg = document.getElementById("skillsDonutChart");
    const legend = document.getElementById("skillsDonutLegend");
    if (!svg || !legend) return;

    if (skills.length === 0) {
        svg.innerHTML = `<text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="#94a3b8" font-size="6">No skills</text>`;
        legend.innerHTML = "";
        return;
    }

    const counts = { "Beginner": 0, "Intermediate": 0, "Advanced": 0 };
    skills.forEach(s => { if (counts[s.level] !== undefined) counts[s.level]++; });

    const total = skills.length;
    const colors = {
        "Beginner": "#38bdf8",
        "Intermediate": "#60a5fa",
        "Advanced": "#3b82f6"
    };

    let html = "";
    let legendHtml = "";
    let currentAngle = 0;
    const cx = 50;
    const cy = 50;
    const r = 40;
    const strokeW = 15;
    const dashArray = 2 * Math.PI * r;

    ["Advanced", "Intermediate", "Beginner"].forEach(level => {
        const count = counts[level];
        if (count === 0) return;

        const portion = count / total;
        const dashOffset = dashArray - (dashArray * portion);

        html += `
            <circle cx="50" cy="50" r="${r}" fill="transparent" 
                    stroke="${colors[level]}" stroke-width="${strokeW}" 
                    stroke-dasharray="${dashArray}" stroke-dashoffset="${dashOffset}"
                    transform="rotate(${currentAngle * 360 - 90} 50 50)"
                    stroke-linecap="round" />
        `;

        currentAngle += portion;

        legendHtml += `<div style="display:flex; align-items:center; gap:4px; color:var(--text);">
            <div style="width:10px; height:10px; border-radius:50%; background:${colors[level]}"></div>
            ${level} (${count})
        </div>`;
    });

    html += `<text x="50" y="50" text-anchor="middle" dominant-baseline="middle" fill="var(--text)" font-size="10" font-weight="bold">${total}</text>`;
    html += `<text x="50" y="60" text-anchor="middle" dominant-baseline="middle" fill="var(--muted)" font-size="5">Total Skills</text>`;

    svg.innerHTML = html;
    legend.innerHTML = legendHtml;
}

function renderProductivityChart(productivity) {
    const canvas = document.getElementById("productivityAreaChart");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const width = rect.width;
    const height = rect.height;
    ctx.clearRect(0, 0, width, height);

    if (productivity.length === 0) {
        ctx.fillStyle = "#94a3b8";
        ctx.font = "14px Inter";
        ctx.textAlign = "center";
        ctx.fillText("Log sessions to see productivity trends.", width / 2, height / 2);
        return;
    }

    // Process last 14 days
    const days = 14;
    const dataMap = {};
    const now = new Date();
    for (let i = days - 1; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(now.getDate() - i);
        dataMap[d.toISOString().slice(0, 10)] = 0;
    }

    productivity.forEach(p => {
        if (dataMap[p.date] !== undefined) {
            dataMap[p.date] += Number(p.hours);
        }
    });

    const dates = Object.keys(dataMap).sort();
    const values = dates.map(d => dataMap[d]);
    const maxVal = Math.max(...values, 4); // Min ceiling of 4 hours

    const padding = 30;
    const chartW = width - padding * 2;
    const chartH = height - padding * 2;
    const stepX = chartW / (days - 1);

    // Draw Area
    ctx.beginPath();
    ctx.moveTo(padding, height - padding);

    const points = [];
    dates.forEach((date, i) => {
        const val = values[i];
        const x = padding + i * stepX;
        const y = height - padding - (val / maxVal) * chartH;
        points.push({ x, y });
        ctx.lineTo(x, y);
    });

    ctx.lineTo(points[points.length - 1].x, height - padding);
    ctx.closePath();

    const grad = ctx.createLinearGradient(0, padding, 0, height - padding);
    grad.addColorStop(0, "rgba(236, 72, 153, 0.4)");
    grad.addColorStop(1, "rgba(236, 72, 153, 0.05)");
    ctx.fillStyle = grad;
    ctx.fill();

    // Draw Line
    ctx.beginPath();
    ctx.strokeStyle = "#ec4899";
    ctx.lineWidth = 3;
    points.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    // Draw Points
    points.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = "#111b34";
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle = "#f472b6";
        ctx.stroke();
    });
}

function renderActivityFeed(interviews, skills, jobs, productivity) {
    const tbody = document.getElementById("activityTableBody");
    if (!tbody) return;

    let allActivity = [];

    interviews.forEach(i => {
        allActivity.push({
            dateObj: new Date(i.date),
            dateStr: i.date,
            module: "Interview",
            action: `Completed ${i.roleTitle}`,
            status: `${i.score}/100`,
            badge: "badge-interview"
        });
    });

    skills.forEach(s => {
        // Assume skills were added recently for demo if no date, or just use today
        allActivity.push({
            dateObj: new Date(),
            dateStr: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            module: "Skill",
            action: `Tracked ${s.name}`,
            status: s.level,
            badge: "badge-skill"
        });
    });

    jobs.forEach(j => {
        allActivity.push({
            dateObj: new Date(j.dateApplied || Date.now()),
            dateStr: j.dateApplied || new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            module: "Job",
            action: `Applied: ${j.company} - ${j.role}`,
            status: j.status,
            badge: "badge-job"
        });
    });

    productivity.forEach(p => {
        allActivity.push({
            dateObj: new Date(p.date),
            dateStr: p.date,
            module: "Productivity",
            action: `Logged ${p.hours}hrs, ${p.tasks} tasks`,
            status: "Logged",
            badge: "badge-productivity"
        });
    });

    // Sort by date descending
    allActivity.sort((a, b) => b.dateObj - a.dateObj);

    // Take top 10
    const recent = allActivity.slice(0, 10);

    if (recent.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 20px;">No recent activity found across modules.</td></tr>`;
        return;
    }

    tbody.innerHTML = recent.map(item => `
        <tr>
            <td style="white-space: nowrap;">${item.dateStr}</td>
            <td><span class="type-badge ${item.badge}">${item.module}</span></td>
            <td>${item.action}</td>
            <td style="font-weight:600;">${item.status}</td>
        </tr>
    `).join("");
}

function addProductivityEntry() {
    const date = document.getElementById("sessionDate").value;
    const hours = Number(document.getElementById("sessionHours").value);
    const tasks = Number(document.getElementById("sessionTasks").value);

    if (!date || hours <= 0 || tasks < 0) {
        return alert("Please enter a valid date, hours, and tasks completed.");
    }

    const entries = getStoredData("productivity");
    entries.push({ date, hours, tasks });
    setStoredData("productivity", entries);

    document.getElementById("sessionDate").value = "";
    document.getElementById("sessionHours").value = "";
    document.getElementById("sessionTasks").value = "";

    renderAnalytics();
    if (typeof renderDashboardCounts === 'function') renderDashboardCounts();
}

window.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;
    if (page === "dashboard") loadDashboard();
    if (page === "interview") loadInterviewPage();
    if (page === "skills") loadSkillsPage();
    if (page === "jobs") loadJobsPage();
    if (page === "learning") loadLearningPage();
    if (page === "analytics") loadAnalyticsPage();
});
