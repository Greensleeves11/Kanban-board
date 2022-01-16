import { ListModel } from './model/ListModel.js';
import { UIView } from './view/UIView.js';
import { CategoryVO } from './Model/CategoryVO.js';
import { taskFactory } from './TaskFactory.js';
import { TaskView } from './view/TaskView.js';
import { ListVO } from './model/ListVO.js';
import { TaskVO } from './model/TaskVO.js';

export class TaskController {
  constructor() {
    this.model = new ListModel();
    this.root = document.getElementById('root');
  }

  init = async () => {
    this.model.localData = await this.model.service.getData();
    this.view = new UIView(this.model.localData[0]);
    this.view.render(this.root, 'beforeend');
    this.setCategories();
    this.setColumns();
    this.setTasks();
    this.addEventListeners();
  };

  rerender = () => {
    document.querySelector('.board-container').remove();
    this.model.localData[1] = [];
    this.init();
  };

  setCategories = () => {
    for (let i = 0; i < this.model.localData[1].length; i++) {
      this.model.localData[1][i] = new CategoryVO(
        this.model.localData[1][i].id,
        this.model.localData[1][i].label,
        this.model.localData[1][i].color
      );
      const picker = document.getElementById(this.model.localData[1][i].id);
      picker.value = this.model.localData[1][i].color;
    }
    this.colorTasks();
  };

  setColumns = () => {
    for (let i = 0; i < this.model.localData[0].length; i++) {
      this.model.localData[0][i] = new ListVO(
        this.model.localData[0][i].label,
        this.model.localData[0][i].items
      );
    }
  };

  setTasks = () => {
    this.model.localData[0].forEach(column => {
      for (let i = 0; i < column.items.length; i++) {
        column.items[i] = new TaskVO(
          column.items[i].id,
          column.items[i].body,
          column.items[i].category
        );
      }
    });
  };

  colorTasks = () => {
    this.model.localData[0].forEach(column => {
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
      const task = taskFactory(
        this.model.localData[2].counter++,
        body.value,
        category
      );
      // data[0][0].items.push(task);
      this.model.localData[0][0].items.push(task);
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
    this.model.localData[0].forEach(column => {
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
        await this.model.updateData(this.model.localData);
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
      await this.model.updateData(this.model.localData);
      // this.rerender();
      const taskView = new TaskView(task);
      const column = document.querySelectorAll('.col-body')[1];
      taskView.render(column, 'beforeend');
      this.colorTasks();
      this.addRemoveListeners();
      this.addOnDragStartListener();
    });
  };

  addOnDragStartListener = () => {
    const tasks = document.querySelectorAll('.card');
    tasks.forEach(task => {
      task.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.id);
      });
    });
  };

  addOnDragOverListener = () => {
    const columns = document.querySelectorAll('.col-body');
    columns.forEach(column => {
      column.addEventListener('dragover', e => {
        e.preventDefault();
      });
    });
  };

  addOnDropListener = () => {
    const columns = document.querySelectorAll('.col-body');
    columns.forEach(column => {
      column.addEventListener('drop', e => {
        if (e.target.classList.contains('col-body')) {
          const id = e.dataTransfer.getData('text');
          const draggableElement = document.getElementById(id);
          const dropzone = e.target;
          dropzone.appendChild(draggableElement);
          e.dataTransfer.clearData();

          let columnFrom;
          this.model.localData[0].forEach(column => {
            column.items.forEach(task => {
              if (task.id === parseInt(draggableElement.id)) {
                columnFrom = column;
              }
            });
          });

          let columnTo;
          const columns = document.querySelectorAll('.col-body');
          for (let i = 1; i < columns.length; i++) {
            if (columns[i] === dropzone) {
              columnTo = this.model.localData[0][i - 1];
              break;
            }
          }

          let taskIndex;
          for (let i = 0; i < columnFrom.items.length; i++) {
            if (columnFrom.items[i].id === parseInt(draggableElement.id)) {
              taskIndex = i;
              break;
            }
          }

          columnTo.items.push(columnFrom.items.splice(taskIndex, 1)[0]);
          this.model.updateData(this.model.localData);
        }
      });
    });
  };

  addColorChangeListeners = () => {
    const pickers = document.querySelectorAll('*[id^="c-"]');
    pickers.forEach(picker => {
      picker.addEventListener('change', e => {
        this.model.localData[1].forEach(category => {
          if (category.id === picker.id) {
            category.color = e.target.value;
          }
        });
        this.model.localData[0].forEach(column => {
          column.items.forEach(item => {
            if (item.category === picker.id) {
              document.getElementById(item.id).style.backgroundColor =
                e.target.value;
            }
          });
        });
        this.model.updateData(this.model.localData);
      });
    });
  };

  addEventListeners = () => {
    this.addFormListener();
    this.addRemoveListeners();
    this.addOnDragStartListener();
    this.addOnDragOverListener();
    this.addOnDropListener();
    this.addColorChangeListeners();
  };
}
