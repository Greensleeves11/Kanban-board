"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// const mongoose = require('mongoose');
exports.CategorySchema = new mongoose_1.default.Schema({
    index: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});
// module.exports = mongoose.model('Category', CategorySchema);
//# sourceMappingURL=Category.js.map