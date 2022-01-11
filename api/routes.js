const express = require('express');
const router = express.Router();
const data = require('./data');
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => res.json(data));

router.post('/', (req, res) => {
  const newData = req.body;
  fs.writeFile(path.join(__dirname, 'data.js'), newData, err => {
    if (err) throw err;
    console.log('File created');
  });

  // const test = req.body;
  // console.log(data);
  // data.push(test);
  res.json(data);
  console.log(data);
});

module.exports = router;
