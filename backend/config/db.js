const mysql = require("mysql2");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "prasanna",
    database: process.env.DB_NAME || "cc"
});

connection.connect((err) => {
    if (err) {
        console.error("Database Error:", err);
    } else {
        console.log("MySQL Connected");
    }
});

const createUsersTable = `
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=INNODB;
`;

connection.query(createUsersTable, (err) => {
    if (err) {
        console.error("Failed to ensure users table:", err);
    }
});

module.exports = connection;