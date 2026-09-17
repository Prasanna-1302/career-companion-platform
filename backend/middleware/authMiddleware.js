const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "careercompanionsecret";

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ success: false, message: "Unauthorized access." });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Invalid token." });
        }

        req.user = decoded;
        next();
    });
};
