const express = require('express');
const counterModel = require('../../models/Counter');
const router = express.Router();

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
    await counterModel.findByIdAndUpdate(req.params.id, req.body);
    await counterModel.save();
    res.send(counter);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const counter = await counterModel.findByIdAndDelete(req.params.id);

    if (!counter) response.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
