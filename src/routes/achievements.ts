import express from 'express';

const router = express.Router();

// GET /api/achievements
router.get('/', (req, res) => {
    // Fetch and return all achievements
    res.send('All achievements');
});

// GET /api/achievements/user
router.get('/user', (req, res) => {
    // Fetch and return achievements for a specific user
    res.send('User achievements');
});

// GET /api/leaderboard
router.get('/leaderboard', (req, res) => {
    // Fetch and return leaderboard
    res.send('Leaderboard');
});

export default router;