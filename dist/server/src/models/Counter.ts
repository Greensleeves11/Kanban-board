import { Schema, model } from 'mongoose';

interface Counter {
  counter: number;
}

const CounterSchema = new Schema<Counter>({
  counter: { type: Number, required: true },
});

export const counterModel = model<Counter>('Counter', CounterSchema);

// import mongoose from 'mongoose';

// export const CounterSchema = new mongoose.Schema({
//   counter: {
//     type: Number,
//     required: true,
//   },
// });
