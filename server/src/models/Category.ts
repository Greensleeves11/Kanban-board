import { Schema, model } from 'mongoose';

interface Category {
  index: string;
  label: string;
  color: string;
}

const CategorySchema = new Schema<Category>({
  index: { type: String, required: true },
  label: { type: String, required: true },
  color: { type: String, required: true },
});

export const categoryModel = model<Category>('Category', CategorySchema);

// import mongoose from 'mongoose';

// export const CategorySchema = new mongoose.Schema({
//   index: {
//     type: String,
//     required: true,
//   },
//   label: {
//     type: String,
//     required: true,
//   },
//   color: {
//     type: String,
//     required: true,
//   },
// });
