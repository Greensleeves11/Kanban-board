"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
var moment_1 = __importDefault(require("moment"));
// const moment = require('moment');
var logger = function (req, res, next) {
    console.log("".concat(req.protocol, "://").concat(req.get('host')).concat(req.originalUrl, ": ").concat((0, moment_1.default)().format()));
    next();
};
exports.logger = logger;
// module.exports = logger;
//# sourceMappingURL=logger.js.map