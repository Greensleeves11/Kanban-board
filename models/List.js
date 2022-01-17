const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model('List', ListSchema);
