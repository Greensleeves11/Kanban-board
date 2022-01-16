const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const data = require('./data.json');

router.get('/', (req, res) => {
  const data = fs.readFileSync(
    path.join(__dirname, 'data.json'),
    'utf8',
    err => {
      if (err) {
        throw err;
      }
    }
  );
  res.send(data);
});

router.post('/', (req, res) => {
  const newData = JSON.stringify(req.body);
  console.log(newData);
  fs.writeFileSync(path.join(__dirname, 'data.json'), newData, err => {
    if (err) throw err;
    console.log('File created');
  });

  const data = fs.readFileSync(
    path.join(__dirname, 'data.json'),
    'utf8',
    err => {
      if (err) {
        throw err;
      }
    }
  );
  res.send(data);
  console.log(data);
});

console.log(data);

module.exports = router;
