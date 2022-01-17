const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  id: {
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
});

module.exports = mongoose.model('Task', TaskSchema);
