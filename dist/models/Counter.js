"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CounterSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
// const mongoose = require('mongoose');
exports.CounterSchema = new mongoose_1.default.Schema({
    counter: {
        type: Number,
        required: true,
    },
});
// module.exports = mongoose.model('Counter', CounterSchema);
//# sourceMappingURL=Counter.js.map