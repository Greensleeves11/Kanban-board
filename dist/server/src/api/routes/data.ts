import express from 'express';
import { taskModel } from '../../models/Task.js';
import { categoryModel } from '../../models/Category.js';
import { listModel } from '../../models/List.js';
import { counterModel } from '../../models/Counter.js';

export const router = express.Router();

router.get('/', async (req, res) => {
  const lists = await listModel.find({});
  const tasks = await taskModel.find({});
  const categories = await categoryModel.find({});
  const counter = await counterModel.find({});

  const data: [
    [typeof lists[0], typeof lists[1], typeof lists[2]],
    typeof categories,
    typeof counter[0]
  ] = [[lists[0], lists[1], lists[2]], categories, counter[0]];

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
