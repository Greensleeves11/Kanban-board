import mongoose from 'mongoose';

// const mongoose = require('mongoose');

export const ListSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  items: {
    type: [Object],
    required: true,
  },
});

// module.exports = mongoose.model('List', ListSchema);
