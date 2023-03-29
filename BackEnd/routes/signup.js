import express from 'express';
import {body} from 'express-validator';
import bcrypt from 'bcryptjs';
import User from '../models/user.js';
import jwt from 'jsonwebtoken';

export const router = express.Router();

router.post('/', [
  body('firstName').exists().isLength({ min: 2 }),
  body('lastName').exists().isLength({ min: 2 }),
  body('email').exists().isEmail().notEmpty(),
  body('password').exists().isLength({ min: 6 })
], async (req, res) => {
  try{
  const { firstName, lastName, email, password } = req.body;
  const existingUser = await User.findOne({ email });
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
    await newUser.save();
    const token = jwt.sign(
  { firstName, lastName},
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);
    return res.status(201).json({ message: 'User created successfully', token});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal server error' });
  }
});

