"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// const mongoose = require('mongoose');
exports.TaskSchema = new mongoose_1.default.Schema({
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
// module.exports = mongoose.model('Task', TaskSchema);
//# sourceMappingURL=Task.js.map