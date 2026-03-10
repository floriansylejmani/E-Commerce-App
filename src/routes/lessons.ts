import { Router } from 'express';

const router = Router();

// GET /api/lessons/:id
router.get('/lessons/:id', (req, res) => {
    const lessonId = req.params.id;
    // Logic to get lesson by ID
    res.send(`Lesson ID: ${lessonId}`);
});

// GET /api/lessons/:id/content
router.get('/lessons/:id/content', (req, res) => {
    const lessonId = req.params.id;
    // Logic to get content of the lesson by ID
    res.send(`Content of lesson ID: ${lessonId}`);
});

export default router;