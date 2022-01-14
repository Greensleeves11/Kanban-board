import { ListService } from '../services/ListService.js';
import { CategoryService } from '../services/CategoryService.js';
import { Service } from '../services/Service.js';

export class ListModel {
  constructor() {
    this.service = new Service('http://localhost:5000/api/routes');
    this.listService = new ListService();
    this.categoryService = new CategoryService();
  }
  #items = [];
  getItems = () => {
    this.service.getData().then(data => {
      return data;
    });
  };

  // this.listService.getItems();
  // this.categoryService.getItems();
  // this is mock data further work needed
  // return [
  //   [
  //     {
  //       label: 'todo',
  //       items: [{ id: 1, text: 'mock1', category: 'c-not-important' }],
  //     },
  //     {
  //       label: 'in progress',
  //       items: [{ id: 2, text: 'mock2', category: 'c-important' }],
  //     },
  //     {
  //       label: 'done',
  //       items: [{ id: 3, text: 'mock3', category: 'c-urgent' }],
  //     },
  //   ],
  //   [
  //     { id: 'c-not-important', label: 'not important', color: '#91c346' },
  //     { id: 'c-important', label: 'important', color: '#0395e4' },
  //     { id: 'c-urgent', label: 'urgent', color: '#db4d4d' },
  //   ],
  // ];
  addTask = data => {
    this.service.postData(data);
  };
  editTask = task => {};
  deleteTask = task => {};
}