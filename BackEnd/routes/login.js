// import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import express from 'express';
import {body} from 'express-validator';
import bcrypt from 'bcryptjs';

export const router = express.Router();
router.post('/', [
  body('email').exists().isEmail().notEmpty(),
  body('password').exists().notEmpty()
], async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Create JWT
    // const token = jwt.sign(
    //   { userId: user._id, email: user.email },
    //   process.env.JWT_SECRET,
    //   { expiresIn: '24h' }
    // );
    // return res.status(200).json({ token });
    return res.status(200).json({message:'Login successful'})
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});