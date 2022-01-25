"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
var mongoose_1 = require("mongoose");
var CategorySchema = new mongoose_1.Schema({
    index: { type: String, required: true },
    label: { type: String, required: true },
    color: { type: String, required: true },
});
exports.categoryModel = (0, mongoose_1.model)('Category', CategorySchema);
//# sourceMappingURL=Category.js.map