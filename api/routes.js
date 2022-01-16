const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

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
  fs.writeFileSync(path.join(__dirname, 'data.json'), newData, err => {
    if (err) throw err;
    console.log('File created');
  });
});

router.put('/', (req, res) => {
  const modifiedTask = JSON.stringify(req.body);
  console.log(data);
});

module.exports = router;
