import { TaskController } from './TaskController.js';
import { data } from './model/data.js';

const taskController = new TaskController();
taskController.init();

const form = document.querySelector('.new-card');
form.addEventListener('submit', e => {
  e.preventDefault();
  taskController.createTask();
  console.log(data);
});
