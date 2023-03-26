import express from 'express';
import Peep from '../models/peep.js'
import { userAuth } from '../middleware/jwt.auth.js';

export const router = express.Router();

router.get('/', userAuth, async (req, res) => {
    try {
      const peeps = await Peep.find().sort({ peepCreatedTime: -1 });
      res.json(peeps);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

