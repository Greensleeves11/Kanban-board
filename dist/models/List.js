"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// const mongoose = require('mongoose');
exports.ListSchema = new mongoose_1.default.Schema({
    label: {
        type: String,
        required: true,
    },
    items: {
        type: [Object],
        required: true,
    },
});
// module.exports = mongoose.model('List', ListSchema);
//# sourceMappingURL=List.js.map