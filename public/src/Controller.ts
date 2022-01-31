import { Model } from './model/Model';
import { UIView } from './view/UIView';
import { CategoryVO } from './model/CategoryVO';
import { taskFactory } from './taskFactory';
import { TaskView } from './view/TaskView';
import { ListVO } from './model/ListVO';
import { TaskVO } from './model/TaskVO';
import { SignOutBtnView } from './view/SignOutBtnView';

export class Controller {
  model: Model;
  root: HTMLElement | null;
  view: UIView | undefined;
  signOutBtnView: SignOutBtnView;
  constructor() {
    this.model = new Model();
    this.root = document.getElementById('root');
    this.signOutBtnView = new SignOutBtnView();
  }

  init = async () => {
    this.model.localData = await this.model.dataService.get();
    if (this.model.localData) {
      this.view = new UIView(this.model.localData[0]);
      this.view.render(this.root, 'beforeend');
      this.signOutBtnView.render(this.root, 'beforeend');
      this.setData();
      this.addEventListeners();
    }
  };

  setData = () => {
    this.setCategories();
    this.setColumns();
    this.setTasks();
  };

  setCategories = () => {
    if (this.model.localData) {
      for (let i = 0; i < this.model.localData[1].length; i++) {
        this.model.localData[1][i] = new CategoryVO(
          this.model.localData[1][i].index,
          this.model.localData[1][i].label,
          this.model.localData[1][i].color,
          this.model.localData[1][i]._id
        );
        const picker = <HTMLInputElement>(
          document.getElementById(this.model.localData[1][i].index.toString())
        );
        picker.value = this.model.localData[1][i].color;
      }
      this.colorAllTasks();
    }
  };

  setColumns = () => {
    if (this.model.localData) {
      for (let i = 0; i < this.model.localData[0].length; i++) {
        this.model.localData[0][i] = new ListVO(
          this.model.localData[0][i].label,
          this.model.localData[0][i].items,
          this.model.localData[0][i]._id
        );
      }
    }
  };

  setTasks = () => {
    if (this.model.localData) {
      this.model.localData[0]?.forEach(column => {
        for (let i = 0; i < column.items.length; i++) {
          column.items[i] = new TaskVO(
            column.items[i].index,
            column.items[i].body,
            column.items[i].category,
            column.items[i].createdBy,
            column.label,
            column.items[i]._id,
            column.items[i].columnID
          );
        }
      });
    }
  };

  colorTask = (task: TaskVO) => {
    const picker = <HTMLInputElement>document.getElementById(task.category);
    const taskToColor = document.getElementById(task.index.toString());
    if (taskToColor) {
      taskToColor.style.backgroundColor = picker.value;
    }
  };

  colorAllTasks = () => {
    if (this.model.localData) {
      this.model.localData[0]?.forEach(column => {
        column.items.forEach((task: TaskVO) => {
          const picker = <HTMLInputElement>(
            document.getElementById(task.category)
          );
          const taskToColor = document.getElementById(task.index.toString());
          if (taskToColor) {
            taskToColor.style.backgroundColor = picker.value;
          }
        });
      });
    }
  };

  createTask = () => {
    const body = <HTMLTextAreaElement>document.querySelector('#new-card-text');
    const importance: number | undefined = this.checkCategory();
    const category: string | undefined = this.setCategoryLabel(importance);
    const createdBy = sessionStorage.getItem('loggedUser');
    const task: TaskVO = taskFactory(
      this.model.localData![2].counter++,
      body.value,
      category!,
      createdBy!
    );
    this.model.localData![0][0].items.push(task);
    body.value = '';
    return task;
  };

  checkCategory = (): number | undefined => {
    const radioButtons = document.getElementsByName('importance');
    let importance;
    radioButtons.forEach(btn => {
      const button = btn as HTMLInputElement;
      if (button.checked) {
        importance = parseInt(button.value);
      }
    });
    return importance;
  };

  setCategoryLabel = (importance: number | undefined): string | undefined => {
    let category;
    if (importance === 1) {
      category = 'c-not-important';
    } else if (importance === 2) {
      category = 'c-important';
    } else if (importance === 3) {
      category = 'c-urgent';
    }
    return category;
  };

  removeTaskById = (index: number) => {
    if (this.model.localData) {
      this.model.localData[0]?.forEach(column => {
        for (let i = 0; i < column.items.length; i++) {
          if (column.items[i].index === index) {
            column.items.splice(i, 1);
            break;
          }
        }
      });
    }
  };

  addRemoveListener = (task: TaskVO) => {
    const iconParent = document.getElementById(task.index.toString());
    if (iconParent) {
      const icon = iconParent.children[0].children[1];
      icon.addEventListener('click', e => {
        this.processRemoval(e);
      });
    }
  };

  addRemoveListeners = () => {
    const removeIcons = document.querySelectorAll('.remove-task');
    removeIcons.forEach(icon => {
      icon.addEventListener('click', e => {
        this.processRemoval(e);
      });
    });
  };

  processRemoval = (e: Event) => {
    // to do: think about better solution
    const task = document.getElementById(
      (e.target as HTMLElement).parentElement!.parentElement!.id
    );
    if (task) {
      task.remove();
      let taskDB;
      if (this.model.localData) {
        this.model.localData[0]?.forEach((column: ListVO) => {
          column.items.forEach(item => {
            if (item.index === parseInt(task.id)) {
              taskDB = item;
            }
          });
        });
      }
      // here as well: better solution needed
      this.removeTaskById(
        parseInt((e.target as HTMLElement).parentElement!.parentElement!.id)
      );
      if (taskDB) {
        this.model.taskService.delete(taskDB);
      }
    }
  };

  addFormListener = () => {
    const form = document.querySelector('.new-card');
    if (form) {
      form.addEventListener('submit', e => {
        this.processSubmit(e);
      });
    }
  };

  processSubmit = async (e: Event) => {
    e.preventDefault();
    const body = <HTMLTextAreaElement>document.querySelector('#new-card-text');
    if (body.value !== '') {
      const task = this.createTask();
      const taskView = new TaskView(task);
      const column = document.querySelectorAll('.col-body')[1];
      taskView.render(column as HTMLElement, 'beforeend');
      this.colorTask(task);
      this.addRemoveListener(task);
      this.addOnDragStartListener(task);
      this.addTaskEditListener(task);
      this.model.taskService.add(task);
      if (this.model.localData) {
        this.model.counterService.update(this.model.localData[2]);
      }
      this.model.localData = await this.model.dataService.get();
      this.setTasks();
    }
  };

  addOnDragStartListener = (task: TaskVO) => {
    const item = document.getElementById(task.index.toString());
    if (item) {
      item.addEventListener('dragstart', e => {
        if (e.dataTransfer) {
          e.dataTransfer.setData('text/plain', (e.target as HTMLElement).id);
        }
      });
    }
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
        if ((e.target as HTMLElement).classList.contains('col-body')) {
          const id = (e as DragEvent).dataTransfer?.getData('text');
          const draggableElement = document.getElementById(id!);
          const dropzone = e.target;
          (dropzone as HTMLElement).appendChild(draggableElement as Node);
          (e as DragEvent).dataTransfer?.clearData();

          let columnFrom: ListVO = {
            label: '',
            items: [],
            _id: '',
          };
          if (this.model.localData && draggableElement) {
            this.model.localData[0].forEach((column: ListVO) => {
              column.items.forEach((task: TaskVO) => {
                if (task.index === parseInt(draggableElement.id)) {
                  columnFrom = column;
                }
              });
            });
          }

          let columnTo: ListVO = {
            label: '',
            items: [],
            _id: '',
          };
          const columns = document.querySelectorAll('.col-body');
          for (let i = 1; i < columns.length; i++) {
            if (columns[i] === dropzone && this.model.localData) {
              columnTo = this.model.localData[0][i - 1];
              break;
            }
          }

          let taskIndex: number = 0;
          if (draggableElement) {
            for (let i = 0; i < columnFrom.items.length; i++) {
              if (columnFrom.items[i].index === parseInt(draggableElement.id)) {
                taskIndex = i;
                break;
              }
            }
          }

          columnTo.items.push(columnFrom.items.splice(taskIndex, 1)[0]);
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
        if (this.model.localData) {
          this.model.localData[1].forEach((category: CategoryVO) => {
            if (category.index === picker.id) {
              category.color = (e.target as HTMLInputElement).value;
              this.model.categoryService.edit(category);
            }
          });
        }
        if (this.model.localData) {
          this.model.localData[0].forEach((column: ListVO) => {
            column.items.forEach(item => {
              if (item.category === picker.id) {
                const colorPicker = document.getElementById(
                  item.index.toString()
                );
                if (colorPicker) {
                  colorPicker.style.backgroundColor = (
                    e.target as HTMLInputElement
                  ).value;
                }
              }
            });
          });
        }
      });
    });
  };

  addTaskEditListener = (task: TaskVO) => {
    const taskItem = document.getElementById(task.index.toString());
    if (taskItem) {
      const contentEditable = taskItem.children[1].children[0];
      contentEditable.addEventListener('blur', () => {
        if (this.model.localData) {
          this.model.localData[0].forEach((column: ListVO) => {
            column.items.forEach(item => {
              if (
                item.index ===
                parseInt(
                  (contentEditable.parentNode!.parentNode! as HTMLElement).id
                )
              ) {
                item.body = (contentEditable as HTMLElement).innerText;
              }
            });
          });
          this.model.taskService.edit(task);
        }
      });
    }
  };

  addSignOutBtnListener = () => {
    const btn = document.querySelector('.sign-out-btn');
    btn?.addEventListener('click', () => {
      sessionStorage.clear();
      window.location.hash = '#login';
      window.location.reload();
    });
  };

  addEventListeners = () => {
    this.addFormListener();
    this.addOnDragOverListener();
    this.addOnDropListener();
    this.addColorChangeListeners();
    this.addSignOutBtnListener();

    if (this.model.localData) {
      this.model.localData[0].forEach((column: ListVO) => {
        column.items.forEach(task => {
          this.addRemoveListener(task);
          this.addTaskEditListener(task);
          this.addOnDragStartListener(task);
        });
      });
    }
  };
}
