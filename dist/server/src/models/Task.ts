import { Schema, model } from 'mongoose';

interface Task {
  index: number;
  body: string;
  category: string;
  createdBy: string;
  columnID: string;
}

const TaskSchema = new Schema<Task>({
  index: { type: Number, required: true },
  body: { type: String, required: true },
  category: { type: String, required: true },
  createdBy: { type: String, required: true },
  columnID: { type: String, required: true },
});

export const taskModel = model<Task>('Task', TaskSchema);

// import mongoose from 'mongoose';

// export const TaskSchema = new mongoose.Schema({
//   index: {
//     type: Number,
//     required: true,
//   },
//   body: {
//     type: String,
//     required: true,
//   },
//   category: {
//     type: String,
//     required: true,
//   },
//   columnID: {
//     type: String,
//     required: true,
//   },
// });
