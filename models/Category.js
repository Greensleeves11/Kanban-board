const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  index: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Category', CategorySchema);
