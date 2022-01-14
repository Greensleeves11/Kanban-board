import { TaskController } from './TaskController.js';
import { data } from './model/data.js';
import { Service } from './services/Service.js';
import { localDataCreator } from './localDataCreator.js';

// const service = new Service('http://localhost:5000/api/routes');
export const taskController = new TaskController();

// taskController.fetchAndInit();

taskController.init();
localDataCreator();

// taskController.rerender();
