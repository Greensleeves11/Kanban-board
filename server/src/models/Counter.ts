import mongoose from 'mongoose';

// const mongoose = require('mongoose');

export const CounterSchema = new mongoose.Schema({
  counter: {
    type: Number,
    required: true,
  },
});

// module.exports = mongoose.model('Counter', CounterSchema);
