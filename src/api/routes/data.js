const express = require('express');
const taskModel = require('../../models/Task');
const listModel = require('../../models/List');
const categoryModel = require('../../models/Category');
const counterModel = require('../../models/Counter');
const router = express.Router();

router.get('/', async (req, res) => {
  const lists = await listModel.find({});
  const tasks = await taskModel.find({});
  const categories = await categoryModel.find({});
  const counter = await counterModel.find({});

  const data = [[lists[0], lists[1], lists[2]], categories, counter[0]];

  tasks.forEach(task => {
    if (task.columnID === data[0][0].id) {
      lists[0].items.push(task);
    } else if (task.columnID === data[0][1].id) {
      lists[1].items.push(task);
    } else {
      lists[2].items.push(task);
    }
  });

  try {
    res.send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
