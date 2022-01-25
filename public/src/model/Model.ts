import { CategoryService } from '../services/CategoryService';
import { CounterService } from '../services/CounterService';
import { TaskService } from '../services/TaskService';
import { DataService } from '../services/DataService';
import { ListVO } from './ListVO';
import { CategoryVO } from './CategoryVO';

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
