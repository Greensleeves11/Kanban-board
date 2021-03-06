"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listModel = void 0;
var mongoose_1 = require("mongoose");
var ListSchema = new mongoose_1.Schema({
    label: { type: String, required: true },
    items: { type: [Object], required: true },
});
exports.listModel = (0, mongoose_1.model)('List', ListSchema);
//# sourceMappingURL=List.js.map