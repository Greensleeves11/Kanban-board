const express = require('express');
const taskModel = require('../../models/Task');
const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await taskModel.find({});

  try {
    res.send(tasks);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const task = new taskModel(req.body);

  try {
    await task.save();
    res.send(task);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await taskModel.findByIdAndUpdate(req.params.id, req.body);
    // await taskModel.save();
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const task = await taskModel.findByIdAndDelete(req.params.id);

    if (!task) response.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
