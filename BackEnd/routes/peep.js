import express from 'express';
import Peep from '../models/peep.js'
import { check } from 'express-validator';
export const router = express.Router();
import { userAuth } from '../middleware/jwt.auth.js';

router.post('/',[
            check('firstName').exists().notEmpty(),
            check('lastName').exists().notEmpty(),
            check('peepContent').exists().notEmpty(),
            check('peepCreatedTime').exists().notEmpty()
], async (req, res) => {
  const newPeep = new Peep(req.body);
    try { 
        await newPeep.save();
        res.status(201).json({message: "Peep successfully added"});
      } catch (err) {
        res.status(400).json({ error: 'Adding peep failed'});
      }
    });

  router.get('/', async (req, res) => {
      try {
        const peeps = await Peep.find().sort({ peepCreatedTime: -1 });
        res.status(200).send(peeps);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
    });
  
