import express from 'express';
import { userModel } from '../../models/User.js';

export const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await userModel.find({});

  try {
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const task = new userModel(req.body);

  try {
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});
