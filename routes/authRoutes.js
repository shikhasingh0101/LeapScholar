import express from 'express';
import { signupUser, signinUser } from '../controllers/authControllers.js'; // Import signup and signin logic

const router = express.Router();

// User signup route
router.post('/register', signupUser);

// User signin route
router.post('/login', signinUser);

export default router;
