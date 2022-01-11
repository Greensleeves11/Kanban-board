const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const data = fs.readFileSync(path.join(__dirname, 'data.js'), 'utf8', err => {
  if (err) {
    throw err;
  }
});
console.log(data);

router.get('/', (req, res) => res.send(data));

router.post('/', (req, res) => {
  console.log(req.body);
  const newData = req.body;
  console.log(newData);
  fs.writeFile(path.join(__dirname, 'data.js'), newData, err => {
    if (err) throw err;
    console.log('File created');
  });

  // const test = req.body;
  // console.log(data);
  // data.push(test);
  res.send(data);
  console.log(data);
});

module.exports = router;
