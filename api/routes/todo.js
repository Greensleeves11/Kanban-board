const express = require('express');
const router = express.Router();
const listModel = require('../../models/List');

router.patch('/', async (req, res) => {
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
    res.status(200).send('Successfully added');
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await listModel.findOneAndUpdate(
      {
        label: 'To do',
      },
      {
        $pull: {
          items: {
            id: parseInt(req.params.id),
          },
        },
      }
    );
    res.status(200).send('Successfully deleted');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
