const express = require('express');
const router = express.Router();
const data = require('./data');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
  const test = req.body;
  data.push(req.body);
  res.send(data);
});

module.exports = router;
