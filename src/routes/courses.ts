import express from 'express';
import { Course } from '../models/Course'; // Assuming you have a Course model

const router = express.Router();

// GET /api/courses
router.get('/', async (req, res) => {
    try {
        const courses = await Course.find(); // Fetch all courses from the database
        res.json(courses);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// GET /api/courses/:id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const course = await Course.findById(id); // Fetch a single course by ID
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json(course);
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

export default router;