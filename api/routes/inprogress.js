const express = require('express');
const router = express.Router();
const listModel = require('../../models/List');

router.patch('/', async (req, res) => {
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
    await listModel.save();
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
