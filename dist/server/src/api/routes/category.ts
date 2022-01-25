import express from 'express';

import { categoryModel } from '../../models/Category.js';
export const router = express.Router();

router.get('/', async (req, res) => {
  const categories = await categoryModel.find({});

  try {
    res.send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/', async (req, res) => {
  const category = new categoryModel(req.body);

  try {
    await category.save();
    res.send(category);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    await categoryModel.findByIdAndUpdate(req.params.id, req.body);
    // await categoryModel.save();
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const category = await categoryModel.findByIdAndDelete(req.params.id);

    if (!category) res.status(404).send('No item found');
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
});

// module.exports = router;
