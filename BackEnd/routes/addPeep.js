import express from 'express';
import Peep from '../models/peep.js'
import { userAuth } from '../middleware/jwt.auth.js';

export const router = express.Router();


router.post('/', userAuth, async (req, res) => {
    const { firstName, lastName, peepContent } = req.body;

    try {
        const newPeep = new Peep({
          firstName,
          lastName,
          peepContent,
          peepCreatedTime: new Date().toISOString()
        });
    
        await newPeep.save();
        res.json(newPeep);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
    });


