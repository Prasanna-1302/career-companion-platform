const express = require("express");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const appRoutes = require("./routes/appRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*", methods: ["GET", "POST"] }
});

module.exports.io = io;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../frontend")));

app.use("/api/auth", authRoutes);
app.use("/api/app", appRoutes);

// Simple health endpoint to verify server routing
app.get('/api/health', (req, res) => {
    const feedback = "Good effort";
    const score = 85;
    const strengths = ["Clear structure", "Relevant domain terminology"];
    const improvements = ["Quantify impact with data points", "Expand technical execution steps"];
    
    io.emit('feedbackUpdated', { feedback, score, strengths, improvements });
    res.json({ success: true, feedback, score, strengths, improvements });
});

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

io.on('connection', (socket) => {
    console.log('Client connected', socket.id);
    socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
    });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
    try {
        const routes = (app._router && app._router.stack)
            ? app._router.stack
                  .filter((r) => r.route || r.name === 'router')
                  .map((r) => {
                      if (r.route) return `${Object.keys(r.route.methods).join(',').toUpperCase()} ${r.route.path}`;
                      if (r.name === 'router' && r.handle && r.regexp) return `ROUTER ${r.regexp}`;
                      return r.name || 'unknown';
                  })
            : [];
        if (routes.length > 0) {
            console.log('Registered route handlers:');
            routes.forEach((rt) => console.log(' -', rt));
        }
    } catch (e) {
        console.log('Could not list routes', e.message);
    }
});