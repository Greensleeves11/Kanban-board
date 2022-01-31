"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskModel = void 0;
var mongoose_1 = require("mongoose");
var TaskSchema = new mongoose_1.Schema({
    index: { type: Number, required: true },
    body: { type: String, required: true },
    category: { type: String, required: true },
    createdBy: { type: String, required: true },
    columnID: { type: String, required: true },
});
exports.taskModel = (0, mongoose_1.model)('Task', TaskSchema);
//# sourceMappingURL=Task.js.map