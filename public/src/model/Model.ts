import { CategoryService } from '../services/CategoryService.js';
import { CounterService } from '../services/CounterService.js';
import { TaskService } from '../services/TaskService.js';
import { DataService } from '../services/DataService.js';
import { ListVO } from './ListVO.js';
import { CategoryVO } from './CategoryVO.js';

export class Model {
  dataService: DataService;
  categoryService: CategoryService;
  counterService: CounterService;
  taskService: TaskService;
  localData:
    | [
        [ListVO, ListVO, ListVO],
        [CategoryVO, CategoryVO, CategoryVO],
        { counter: number; _id: string }
      ]
    | undefined;
  constructor() {
    this.dataService = new DataService('http://localhost:5000/api/routes/data');
    this.categoryService = new CategoryService(
      'http://localhost:5000/api/routes/category'
    );
    this.counterService = new CounterService(
      'http://localhost:5000/api/routes/counter'
    );
    this.taskService = new TaskService('http://localhost:5000/api/routes/task');
  }
}
