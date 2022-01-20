const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  columnID: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
