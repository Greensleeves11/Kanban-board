import { ListService } from '../services/ListService.js';
import { CategoryService } from '../services/CategoryService.js';

export class ListModel {
  constructor() {
    this.listService = new ListService();
    this.categoryService = new CategoryService();
  }
  #items = [];
  getItems = () => {
    // this.listService.getItems();
    // this.categoryService.getItems();
    // this is mock data further work needed
    return [
      { label: 'todo', items: [{ id: 1, text: 'mock1', category: 1 }] },
      { label: 'in progress', items: [{ id: 2, text: 'mock2', category: 1 }] },
      { label: 'done', items: [{ id: 3, text: 'mock3', category: 1 }] },
    ];
  };
  addTask = task => {};
  editTask = task => {};
  deleteTask = task => {};
}
