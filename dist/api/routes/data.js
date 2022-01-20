"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Task_1 = require("../../models/Task");
var Category_1 = require("../../models/Category");
var List_1 = require("../../models/List");
var Counter_1 = require("../../models/Counter");
// const express = require('express');
// const taskModel = require('../../models/Task');
// const listModel = require('../../models/List');
// const categoryModel = require('../../models/Category');
// const counterModel = require('../../models/Counter');
var router = express_1.default.Router();
router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var lists, tasks, categories, counter, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, List_1.ListSchema.find({})];
            case 1:
                lists = _a.sent();
                return [4 /*yield*/, Task_1.TaskSchema.find({})];
            case 2:
                tasks = _a.sent();
                return [4 /*yield*/, Category_1.CategorySchema.find({})];
            case 3:
                categories = _a.sent();
                return [4 /*yield*/, Counter_1.CounterSchema.find({})];
            case 4:
                counter = _a.sent();
                data = [[lists[0], lists[1], lists[2]], categories, counter[0]];
                tasks.forEach(function (task) {
                    if (task.columnID === data[0][0].id) {
                        lists[0].items.push(task);
                    }
                    else if (task.columnID === data[0][1].id) {
                        lists[1].items.push(task);
                    }
                    else {
                        lists[2].items.push(task);
                    }
                });
                try {
                    res.send(data);
                }
                catch (err) {
                    res.status(500).send(err);
                }
                return [2 /*return*/];
        }
    });
}); });
module.exports = router;
//# sourceMappingURL=data.js.map