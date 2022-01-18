const express = require('express');
const router = express.Router();
const listModel = require('../../models/List');

router.patch('/:id', async (req, res) => {
  try {
    await listModel.findOneAndUpdate(
      {
        id: parseInt(req.params.id),
      },
      {
        $set: {
          body: req.body,
        },
      }
    );
    res.status(200).send('Successfully modified');
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
