const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connection = require("../config/db");

const JWT_SECRET = process.env.JWT_SECRET || "careercompanionsecret";

exports.register = (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "Name, email, and password are required." });
    }

    const checkSql = "SELECT id FROM users WHERE email = ?";
    connection.query(checkSql, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Database error." });
        }

        if (results.length > 0) {
            return res.status(400).json({ success: false, message: "Email already registered." });
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        const insertSql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

        connection.query(insertSql, [name, email, hashedPassword], (insertErr, insertResult) => {
            if (insertErr) {
                console.error(insertErr);
                return res.status(500).json({ success: false, message: "Failed to create user." });
            }

            const user = {
                id: insertResult.insertId,
                name,
                email
            };

            const token = jwt.sign(user, JWT_SECRET, { expiresIn: "2h" });
            res.json({ success: true, token, user });
        });
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required." });
    }

    const sql = "SELECT * FROM users WHERE email = ?";
    connection.query(sql, [email], (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: "Database error." });
        }

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: "Invalid credentials." });
        }

        const user = results[0];
        const passwordMatches = bcrypt.compareSync(password, user.password);

        if (!passwordMatches) {
            return res.status(401).json({ success: false, message: "Invalid User." });
        }

        const payload = {
            id: user.id,
            name: user.name,
            email: user.email
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "2h" });
        res.json({ success: true, token, user: payload });
    });
};
