import express from 'express';
import { counterModel } from '../../models/Counter.js';

export const router = express.Router();

router.get('/', async (req, res) => {
  const counter = await counterModel.find({});
  try {
    res.send(counter[0]);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const counter = new counterModel(req.body);

  try {
    await counter.save();
    res.send(counter);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const counter = await counterModel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    // await counterModel.save();
    res.status(200);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const counter = await counterModel.findByIdAndDelete(req.params.id);

    if (!counter) res.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

// module.exports = router;
