import express from 'express';
import Peep from '../models/peep.js'
import { check, validationResult } from 'express-validator';
export const router = express.Router();


router.post('/',[
            check('firstName').exists().notEmpty(),
            check('lastName').exists().notEmpty(),
            check('peepContent').exists().notEmpty(),
            check('dateAndTimePosted').exists().notEmpty()
], async (req, res) => {
  const newPeep = new Peep(req.body);
    try { 
        await newPeep.save();
        res.status(201).json({message: "Peep successfully added"});
      } catch (err) {
        res.status(400).json({ error: 'Adding peep failed'});
      }
    });


