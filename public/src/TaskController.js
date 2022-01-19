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
    this.model.localData = await this.model.listService.getData();
    this.view = new UIView(this.model.localData[0]);
    this.view.render(this.root, 'beforeend');
    this.setData();
    this.addEventListeners();
  };

  setData = () => {
    this.setCategories();
    this.setColumns();
    this.setTasks();
  };

  setCategories = () => {
    for (let i = 0; i < this.model.localData[1].length; i++) {
      this.model.localData[1][i] = new CategoryVO(
        this.model.localData[1][i].index,
        this.model.localData[1][i].label,
        this.model.localData[1][i].color
      );
      const picker = document.getElementById(this.model.localData[1][i].id);
      picker.value = this.model.localData[1][i].color;
    }
    this.colorAllTasks();
  };

  setColumns = () => {
    for (let i = 0; i < this.model.localData[0].length; i++) {
      this.model.localData[0][i] = new ListVO(
        this.model.localData[0][i].label,
        this.model.localData[0][i].items,
        this.model.localData[0][i]._id
      );
    }
  };

  setTasks = () => {
    this.model.localData[0].forEach(column => {
      for (let i = 0; i < column.items.length; i++) {
        column.items[i] = new TaskVO(
          column.items[i].index,
          column.items[i].body,
          column.items[i].category,
          column.label,
          column.items[i]._id,
          column.items[i].columnID
        );
      }
    });
  };

  colorTask = task => {
    document.getElementById(task.index).style.backgroundColor =
      document.getElementById(task.category).value;
  };

  colorAllTasks = () => {
    this.model.localData[0].forEach(column => {
      column.items.forEach(task => {
        document.getElementById(task.index).style.backgroundColor =
          document.getElementById(task.category).value;
      });
    });
  };

  createTask = () => {
    const body = document.querySelector('#new-card-text');
    const category = this.checkCategory();
    const column = document.querySelectorAll('.col-body')[1];
    const task = taskFactory(
      this.model.localData[2].counter++,
      body.value,
      category,
      column.label
    );
    this.model.localData[0][0].items.push(task);
    body.value = '';
    return task;
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

  removeTaskById = index => {
    this.model.localData[0].forEach(column => {
      for (let i = 0; i < column.items.length; i++) {
        if (column.items[i].index === index) {
          column.items.splice(i, 1);
          break;
        }
      }
    });
  };

  addRemoveListener = task => {
    const icon = document.getElementById(task.index).children[0].children[1];
    icon.addEventListener('click', e => {
      this.processRemoval(e);
    });
  };

  addRemoveListeners = () => {
    const removeIcons = document.querySelectorAll('.remove-task');
    removeIcons.forEach(icon => {
      icon.addEventListener('click', e => {
        this.processRemoval(e);
      });
    });
  };

  processRemoval = function (e) {
    const task = document.getElementById(
      e.target.parentElement.parentElement.id
    );
    task.remove();
    // this.model.updateData(this.model.localData);
    let taskDB;
    this.model.localData[0].forEach(column => {
      column.items.forEach(item => {
        if (item.index === parseInt(task.id)) {
          taskDB = item;
        }
      });
    });
    this.removeTaskById(parseInt(e.target.parentElement.parentElement.id));
    this.model.taskService.delete(taskDB);
  };

  addFormListener = () => {
    const form = document.querySelector('.new-card');
    form.addEventListener('submit', e => {
      this.processSubmit(e);
    });
  };

  processSubmit = async function (e) {
    e.preventDefault();
    const body = document.querySelector('#new-card-text');
    if (body.value !== '') {
      const task = this.createTask();
      const taskView = new TaskView(task);
      const column = document.querySelectorAll('.col-body')[1];
      taskView.render(column, 'beforeend');
      this.colorTask(task);
      this.addRemoveListener(task);
      this.addOnDragStartListener(task);
      this.addTaskEditListener(task);
      // this.model.updateData(this.model.localData);
      this.model.taskService.postTask(task);
      this.model.counterService.update(this.model.localData[2]);
      this.model.localData = await this.model.listService.getData();
      this.setTasks();
    }
  };

  addOnDragStartListener = task => {
    const item = document.getElementById(task.index);
    item.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', e.target.id);
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
              if (task.index === parseInt(draggableElement.id)) {
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
            if (columnFrom.items[i].index === parseInt(draggableElement.id)) {
              taskIndex = i;
              break;
            }
          }

          columnTo.items.push(columnFrom.items.splice(taskIndex, 1)[0]);
          // this.model.updateData(this.model.localData);
          const task = columnTo.items[columnTo.items.length - 1];
          task.columnID = columnTo._id;
          this.model.taskService.edit(task);
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

  addTaskEditListener = task => {
    const contentEditable = document.getElementById(task.index).children[1]
      .children[0];
    contentEditable.addEventListener('blur', () => {
      this.model.localData[0].forEach(column => {
        column.items.forEach(item => {
          if (
            item.index === parseInt(contentEditable.parentNode.parentNode.id)
          ) {
            item.body = contentEditable.innerText;
          }
        });
      });
      // this.model.updateData(this.model.localData);
      this.model.taskService.edit(task);
    });
  };

  addEventListeners = () => {
    this.addFormListener();
    this.addOnDragOverListener();
    this.addOnDropListener();
    this.addColorChangeListeners();

    this.model.localData[0].forEach(column => {
      column.items.forEach(task => {
        this.addRemoveListener(task);
        this.addTaskEditListener(task);
        this.addOnDragStartListener(task);
      });
    });
  };

  // rerender = () => {
  //   document.querySelector('.board-container').remove();
  //   this.model.localData[1] = [];
  //   this.init();
  // };
}
