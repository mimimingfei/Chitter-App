import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';

export const router = express.Router();

router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
    const existingUser = await User.findOne({ email: req.body.email});
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    try {
      await newUser.save();
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

