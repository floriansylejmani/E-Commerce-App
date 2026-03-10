import { Router } from 'express';

const router = Router();

// GET /api/grammar
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Grammar API!' });
});

// GET /api/grammar/:id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.json({ message: `You requested grammar item with ID: ${id}` });
});

export default router;