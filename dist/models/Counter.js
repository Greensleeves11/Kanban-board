"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.counterModel = void 0;
var mongoose_1 = require("mongoose");
var CounterSchema = new mongoose_1.Schema({
    counter: { type: Number, required: true },
});
exports.counterModel = (0, mongoose_1.model)('Counter', CounterSchema);
// import mongoose from 'mongoose';
// export const CounterSchema = new mongoose.Schema({
//   counter: {
//     type: Number,
//     required: true,
//   },
// });
//# sourceMappingURL=Counter.js.map