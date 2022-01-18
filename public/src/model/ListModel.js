import { ListService } from '../services/ListService.js';
import { CategoryService } from '../services/CategoryService.js';
import { CounterService } from '../services/CounterService.js';
import { Service } from '../services/Service.js';

export class ListModel {
  constructor() {
    this.service = new Service('http://localhost:5000/api/routes');
    this.listService = new ListService('http://localhost:5000/api/routes/data');
    this.categoryService = new CategoryService(
      'http://localhost:5000/api/routes/category'
    );
    this.counterService = new CounterService(
      'http://localhost:5000/api/routes/counter'
    );
  }

  getItems = () => {
    this.service.getData().then(data => {
      return data;
    });
  };

  updateData = data => {
    this.service.postData(data);
  };
  editTask = task => {};
  deleteTask = task => {};
}
