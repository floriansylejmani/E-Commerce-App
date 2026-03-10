import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();

// Mock user data (Replace this with your database logic) 
const users = [];
const SECRET_KEY = 'your_secret_key_here'; // Change this to a secure key

// User Registration Endpoint
router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully' });
});

// User Login Endpoint
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);
    if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
});

// JWT Token Refresh Endpoint
router.post('/refresh', (req, res) => {
    const { token } = req.body;
    if (!token) return res.sendStatus(401);
    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        const newToken = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token: newToken });
    });
});

export default router;