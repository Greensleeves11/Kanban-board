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
import { Model } from './model/Model.js';
import { UIView } from './view/UIView.js';
import { CategoryVO } from './model/CategoryVO.js';
import { taskFactory } from './taskFactory.js';
import { TaskView } from './view/TaskView.js';
import { ListVO } from './model/ListVO.js';
import { TaskVO } from './model/TaskVO.js';
var TaskController = (function () {
    function TaskController() {
        var _this = this;
        this.init = function () { return __awaiter(_this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.model;
                        return [4, this.model.dataService.get()];
                    case 1:
                        _a.localData = _b.sent();
                        if (this.model.localData) {
                            this.view = new UIView(this.model.localData[0]);
                            this.view.render(this.root, 'beforeend');
                            this.setData();
                            this.addEventListeners();
                        }
                        return [2];
                }
            });
        }); };
        this.setData = function () {
            _this.setCategories();
            _this.setColumns();
            _this.setTasks();
        };
        this.setCategories = function () {
            if (_this.model.localData) {
                for (var i = 0; i < _this.model.localData[1].length; i++) {
                    _this.model.localData[1][i] = new CategoryVO(_this.model.localData[1][i].index, _this.model.localData[1][i].label, _this.model.localData[1][i].color, _this.model.localData[1][i]._id);
                    var picker = (document.getElementById(_this.model.localData[1][i].index.toString()));
                    picker.value = _this.model.localData[1][i].color;
                }
                _this.colorAllTasks();
            }
        };
        this.setColumns = function () {
            if (_this.model.localData) {
                for (var i = 0; i < _this.model.localData[0].length; i++) {
                    _this.model.localData[0][i] = new ListVO(_this.model.localData[0][i].label, _this.model.localData[0][i].items, _this.model.localData[0][i]._id);
                }
            }
        };
        this.setTasks = function () {
            var _a;
            if (_this.model.localData) {
                (_a = _this.model.localData[0]) === null || _a === void 0 ? void 0 : _a.forEach(function (column) {
                    for (var i = 0; i < column.items.length; i++) {
                        column.items[i] = new TaskVO(column.items[i].index, column.items[i].body, column.items[i].category, column.label, column.items[i]._id, column.items[i].columnID);
                    }
                });
            }
        };
        this.colorTask = function (task) {
            var picker = document.getElementById(task.category);
            document.getElementById(task.index.toString()).style.backgroundColor =
                picker.value;
        };
        this.colorAllTasks = function () {
            var _a;
            if (_this.model.localData) {
                (_a = _this.model.localData[0]) === null || _a === void 0 ? void 0 : _a.forEach(function (column) {
                    column.items.forEach(function (task) {
                        var picker = (document.getElementById(task.category));
                        document.getElementById(task.index.toString()).style.backgroundColor = picker.value;
                    });
                });
            }
        };
        this.createTask = function () {
            var body = document.querySelector('#new-card-text');
            var category = _this.checkCategory();
            var task = taskFactory(_this.model.localData[2].counter++, body.value, category);
            _this.model.localData[0][0].items.push(task);
            body.value = '';
            return task;
        };
        this.checkCategory = function () {
            var radioButtons = document.getElementsByName('importance');
            var importance;
            var category = '';
            radioButtons.forEach(function (btn) {
                var button = btn;
                if (button.checked) {
                    importance = parseInt(button.value);
                    if (importance === 1) {
                        category = 'c-not-important';
                    }
                    else if (importance === 2) {
                        category = 'c-important';
                    }
                    else if (importance === 3) {
                        category = 'c-urgent';
                    }
                }
            });
            return category;
        };
        this.removeTaskById = function (index) {
            var _a;
            if (_this.model.localData) {
                (_a = _this.model.localData[0]) === null || _a === void 0 ? void 0 : _a.forEach(function (column) {
                    for (var i = 0; i < column.items.length; i++) {
                        if (column.items[i].index === index) {
                            column.items.splice(i, 1);
                            break;
                        }
                    }
                });
            }
        };
        this.addRemoveListener = function (task) {
            var icon = document.getElementById(task.index.toString()).children[0]
                .children[1];
            icon.addEventListener('click', function (e) {
                _this.processRemoval(e);
            });
        };
        this.addRemoveListeners = function () {
            var removeIcons = document.querySelectorAll('.remove-task');
            removeIcons.forEach(function (icon) {
                icon.addEventListener('click', function (e) {
                    _this.processRemoval(e);
                });
            });
        };
        this.processRemoval = function (e) {
            var _a;
            var task = document.getElementById(e.target.parentElement.parentElement.id);
            if (task) {
                task.remove();
                var taskDB_1;
                if (_this.model.localData) {
                    (_a = _this.model.localData[0]) === null || _a === void 0 ? void 0 : _a.forEach(function (column) {
                        column.items.forEach(function (item) {
                            if (item.index === parseInt(task.id)) {
                                taskDB_1 = item;
                            }
                        });
                    });
                }
                _this.removeTaskById(parseInt(e.target.parentElement.parentElement.id));
                if (taskDB_1) {
                    _this.model.taskService.delete(taskDB_1);
                }
            }
        };
        this.addFormListener = function () {
            var form = document.querySelector('.new-card');
            if (form) {
                form.addEventListener('submit', function (e) {
                    _this.processSubmit(e);
                });
            }
        };
        this.processSubmit = function (e) { return __awaiter(_this, void 0, void 0, function () {
            var body, task, taskView, column, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        e.preventDefault();
                        body = document.querySelector('#new-card-text');
                        if (!(body.value !== '')) return [3, 2];
                        task = this.createTask();
                        taskView = new TaskView(task);
                        column = document.querySelectorAll('.col-body')[1];
                        taskView.render(column, 'beforeend');
                        this.colorTask(task);
                        this.addRemoveListener(task);
                        this.addOnDragStartListener(task);
                        this.addTaskEditListener(task);
                        this.model.taskService.add(task);
                        if (this.model.localData) {
                            this.model.counterService.update(this.model.localData[2]);
                        }
                        _a = this.model;
                        return [4, this.model.dataService.get()];
                    case 1:
                        _a.localData = _b.sent();
                        this.setTasks();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        }); };
        this.addOnDragStartListener = function (task) {
            var item = document.getElementById(task.index.toString());
            if (item) {
                item.addEventListener('dragstart', function (e) {
                    e.dataTransfer.setData('text/plain', e.target.id);
                });
            }
        };
        this.addOnDragOverListener = function () {
            var columns = document.querySelectorAll('.col-body');
            columns.forEach(function (column) {
                column.addEventListener('dragover', function (e) {
                    e.preventDefault();
                });
            });
        };
        this.addOnDropListener = function () {
            var columns = document.querySelectorAll('.col-body');
            columns.forEach(function (column) {
                column.addEventListener('drop', function (e) {
                    if (e.target.classList.contains('col-body')) {
                        var id = e.dataTransfer.getData('text');
                        var draggableElement_1 = document.getElementById(id);
                        var dropzone = e.target;
                        dropzone.appendChild(draggableElement_1);
                        e.dataTransfer.clearData();
                        var columnFrom_1 = {
                            label: '',
                            items: [],
                            _id: '',
                        };
                        if (_this.model.localData) {
                            _this.model.localData[0].forEach(function (column) {
                                column.items.forEach(function (task) {
                                    if (task.index === parseInt(draggableElement_1.id)) {
                                        columnFrom_1 = column;
                                    }
                                });
                            });
                        }
                        var columnTo = {
                            label: '',
                            items: [],
                            _id: '',
                        };
                        var columns_1 = document.querySelectorAll('.col-body');
                        for (var i = 1; i < columns_1.length; i++) {
                            if (columns_1[i] === dropzone && _this.model.localData) {
                                columnTo = _this.model.localData[0][i - 1];
                                break;
                            }
                        }
                        var taskIndex = 0;
                        for (var i = 0; i < columnFrom_1.items.length; i++) {
                            if (columnFrom_1.items[i].index === parseInt(draggableElement_1.id)) {
                                taskIndex = i;
                                break;
                            }
                        }
                        columnTo.items.push(columnFrom_1.items.splice(taskIndex, 1)[0]);
                        var task = columnTo.items[columnTo.items.length - 1];
                        task.columnID = columnTo._id;
                        _this.model.taskService.edit(task);
                    }
                });
            });
        };
        this.addColorChangeListeners = function () {
            var pickers = document.querySelectorAll('*[id^="c-"]');
            pickers.forEach(function (picker) {
                picker.addEventListener('change', function (e) {
                    if (_this.model.localData) {
                        _this.model.localData[1].forEach(function (category) {
                            if (category.index === picker.id) {
                                category.color = e.target.value;
                                _this.model.categoryService.edit(category);
                            }
                        });
                    }
                    if (_this.model.localData) {
                        _this.model.localData[0].forEach(function (column) {
                            column.items.forEach(function (item) {
                                if (item.category === picker.id) {
                                    document.getElementById(item.index.toString()).style.backgroundColor = e.target.value;
                                }
                            });
                        });
                    }
                });
            });
        };
        this.addTaskEditListener = function (task) {
            var contentEditable = document.getElementById(task.index.toString())
                .children[1].children[0];
            contentEditable.addEventListener('blur', function () {
                if (_this.model.localData) {
                    _this.model.localData[0].forEach(function (column) {
                        column.items.forEach(function (item) {
                            if (item.index ===
                                parseInt(contentEditable.parentNode.parentNode.id)) {
                                item.body = contentEditable.innerText;
                            }
                        });
                    });
                    _this.model.taskService.edit(task);
                }
            });
        };
        this.addEventListeners = function () {
            _this.addFormListener();
            _this.addOnDragOverListener();
            _this.addOnDropListener();
            _this.addColorChangeListeners();
            if (_this.model.localData) {
                _this.model.localData[0].forEach(function (column) {
                    column.items.forEach(function (task) {
                        _this.addRemoveListener(task);
                        _this.addTaskEditListener(task);
                        _this.addOnDragStartListener(task);
                    });
                });
            }
        };
        this.model = new Model();
        this.root = document.getElementById('root');
    }
    return TaskController;
}());
export { TaskController };
//# sourceMappingURL=TaskController.js.map