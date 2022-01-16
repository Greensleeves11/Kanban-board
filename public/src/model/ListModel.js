import { ListService } from '../services/ListService.js';
import { CategoryService } from '../services/CategoryService.js';
import { Service } from '../services/Service.js';

export class ListModel {
  constructor() {
    this.service = new Service('http://localhost:5000/api/routes');
    this.listService = new ListService();
    this.categoryService = new CategoryService();
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
