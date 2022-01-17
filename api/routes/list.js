const express = require('express');
const listModel = require('../../models/List');
const router = express.Router();

router.get('/', async (req, res) => {
  const lists = await listModel.find({});

  try {
    res.send(lists);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const list = new listModel(req.body);

  try {
    await list.save();
    res.send(list);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await listModel.findByIdAndUpdate(req.params.id, req.body);
    await listModel.save();
    res.send(list);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/todo', async (req, res) => {
  try {
    await listModel.findOneAndUpdate(
      {
        label: 'To do',
      },
      {
        $push: {
          items: req.body,
        },
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/inprogress', async (req, res) => {
  try {
    await listModel.findOneAndUpdate(
      {
        label: 'In progress',
      },
      {
        $push: {
          items: req.body,
        },
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/done', async (req, res) => {
  try {
    await listModel.findOneAndUpdate(
      {
        label: 'Done',
      },
      {
        $push: {
          items: req.body,
        },
      }
    );
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const list = await listModel.findByIdAndDelete(req.params.id);

    if (!list) response.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
