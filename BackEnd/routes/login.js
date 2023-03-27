// import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import express from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';

export const router = express.Router();

router.post('/', [
  body('email').exists().isEmail().notEmpty(),
  body('password').exists().notEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  return res.status(200).json({ message: 'Login successful!' });
});

export default router;

  // Create JWT
  // const token = jwt.sign(
  //   { userId: user._id, email: user.email },
  //   process.env.JWT_SECRET,
  //   { expiresIn: '24h' }
  // );
  // return res.status(200).json({ token });
  // const generateJwtSecret = () => {return crypto.randomBytes(64).toString('hex');};
  // const JWT_SECRET = generateJwtSecret();
