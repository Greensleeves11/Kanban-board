import { Schema, model, Types } from 'mongoose';

interface List {
  label: string;
  items: Types.Array<object>;
}

const ListSchema = new Schema<List>({
  label: { type: String, required: true },
  items: { type: [Object], required: true },
});

export const listModel = model<List>('List', ListSchema);

// import mongoose from 'mongoose';

// export const ListSchema = new mongoose.Schema({
//   label: {
//     type: String,
//     required: true,
//   },
//   items: {
//     type: [Object],
//     required: true,
//   },
// });
