import { CategoryService } from '../services/CategoryService.js';
import { CounterService } from '../services/CounterService.js';
import { TaskService } from '../services/TaskService.js';
import { DataService } from '../services/DataService.js';
var Model = (function () {
    function Model() {
        this.dataService = new DataService('http://localhost:5000/api/routes/data');
        this.categoryService = new CategoryService('http://localhost:5000/api/routes/category');
        this.counterService = new CounterService('http://localhost:5000/api/routes/counter');
        this.taskService = new TaskService('http://localhost:5000/api/routes/task');
    }
    return Model;
}());
export { Model };
//# sourceMappingURL=Model.js.map