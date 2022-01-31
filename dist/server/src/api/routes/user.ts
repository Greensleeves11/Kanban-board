import express from 'express';
import { userModel } from '../../models/User.js';
import SHA256 from 'crypto-js/sha256';

export const router = express.Router();

router.get('/', async (req, res) => {
  const users = await userModel.find({});

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  req.body.password = JSON.stringify(SHA256(req.body.password).words);
  const user = new userModel(req.body);

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});
