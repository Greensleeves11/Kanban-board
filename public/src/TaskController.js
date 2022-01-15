import { ListModel } from './model/ListModel.js';
import { UIView } from './view/UIView.js';
import { CategoryVO } from './Model/CategoryVO.js';
import { data } from './model/data.js';
import { taskFactory } from './TaskFactory.js';
import { TaskView } from './view/TaskView.js';

export class TaskController {
  constructor() {
    this.model = new ListModel();
    this.root = document.getElementById('root');
  }

  init = async () => {
    this.serverData = await this.model.service.getData();
    this.view = new UIView(this.serverData[0]);
    this.view.render(this.root, 'beforeend');
    this.setCategories();
    this.addFormListener();
    this.addRemoveListeners();
  };

  rerender = () => {
    document.querySelector('.board-container').remove();
    data[1] = [];
    this.init();

    // TODO: remove UIView from DOM
    // init data
    // render UIView
  };

  setCategories = () => {
    this.serverData[1].forEach(category => {
      data[1].push(new CategoryVO(category.id, category.label, category.color));
      const picker = document.getElementById(category.id);
      picker.value = category.color;
    });
    this.colorTasks();
  };

  colorTasks = () => {
    this.serverData[0].forEach(column => {
      column.items.forEach(task => {
        document.getElementById(task.id).style.backgroundColor =
          document.getElementById(task.category).value;
      });
    });
  };

  createTask = () => {
    const body = document.querySelector('#new-card-text');
    if (body.value !== '') {
      const category = this.checkCategory();
      const task = taskFactory(data[2].counter++, body.value, category);
      data[0][0].items.push(task);
      this.serverData[0][0].items.push(task);
      body.value = '';
      return task;
    }
  };

  checkCategory = () => {
    const radioButtons = document.getElementsByName('importance');
    let importance;
    let category;
    for (let button of radioButtons) {
      if (button.checked) {
        importance = parseInt(button.attributes.value.value);
        if (importance === 1) {
          category = 'c-not-important';
        } else if (importance === 2) {
          category = 'c-important';
        } else if (importance === 3) {
          category = 'c-urgent';
        }
      }
    }
    return category;
  };

  removeTaskById = id => {
    data[0].forEach(column => {
      for (let i = 0; i < column.items.length; i++) {
        if (column.items[i].id === id) {
          column.items.splice(i, 1);
          break;
        }
      }
    });
    this.serverData[0].forEach(column => {
      for (let i = 0; i < column.items.length; i++) {
        if (column.items[i].id === id) {
          column.items.splice(i, 1);
          break;
        }
      }
    });
  };

  addRemoveListeners = () => {
    const removeIcons = document.querySelectorAll('.remove-task');
    removeIcons.forEach(icon => {
      icon.addEventListener('click', async e => {
        this.removeTaskById(parseInt(e.target.parentElement.parentElement.id));
        await this.model.updateData(data);
        // this.rerender();
        const task = document.getElementById(
          e.target.parentElement.parentElement.id
        );
        task.remove();
      });
    });
  };

  addFormListener = () => {
    const form = document.querySelector('.new-card');
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const task = this.createTask();
      await this.model.updateData(data);
      // this.rerender();
      const taskView = new TaskView(task);
      const column = document.querySelectorAll('.col-body')[1];
      taskView.render(column, 'beforeend');
      this.colorTasks();
      this.addRemoveListeners();
    });
  };
}
