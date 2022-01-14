import { ListModel } from './model/ListModel.js';
import { UIView } from './view/UIView.js';
import { CategoryVO } from './Model/CategoryVO.js';
import { data } from './model/data.js';
import { taskFactory } from './TaskFactory.js';

export class TaskController {
  constructor() {
    this.model = new ListModel();
    this.root = document.getElementById('root');
  }

  init = () => {
    this.view = new UIView(this.model.getItems()[0]);
    this.view.render(this.root, 'beforeend');
    this.setCategories();
  };

  rerender = () => {
    // TODO: remove UIView from DOM
    // init data
    // render UIView
  };

  setCategories = () => {
    this.model.getItems()[1].forEach(category => {
      data[1].push(new CategoryVO(category.id, category.label, category.color));
      const picker = document.getElementById(category.id);
      picker.value = category.color;
    });
    this.colorTasks();
    console.log(data);
  };

  colorTasks = () => {
    this.model.getItems()[0].forEach(column => {
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
      console.log(data[0]);
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
}
