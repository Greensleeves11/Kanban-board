"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
var CategoryService_js_1 = require("../services/CategoryService.js");
var CounterService_js_1 = require("../services/CounterService.js");
var TaskService_js_1 = require("../services/TaskService.js");
var DataService_js_1 = require("../services/DataService.js");
var Model = (function () {
    function Model() {
        this.dataService = new DataService_js_1.DataService('http://localhost:5000/api/routes/data');
        this.categoryService = new CategoryService_js_1.CategoryService('http://localhost:5000/api/routes/category');
        this.counterService = new CounterService_js_1.CounterService('http://localhost:5000/api/routes/counter');
        this.taskService = new TaskService_js_1.TaskService('http://localhost:5000/api/routes/task');
    }
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=Model.js.map