import { CategoryService } from '../services/CategoryService';
import { CounterService } from '../services/CounterService';
import { TaskService } from '../services/TaskService';
import { DataService } from '../services/DataService';
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