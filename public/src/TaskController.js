import { ListModel } from './model/ListModel.js';
import { UIView } from './view/UIView.js';
import { CategoryVO } from './Model/CategoryVO.js';

export class TaskController {
  constructor() {
    this.model = new ListModel();
    this.root = document.getElementById('root');
  }

  init = () => {
    this.view = new UIView(this.model.getItems()[0]);
    this.view.render(this.root, 'beforeend');
    this.setColors();
  };

  rerender = () => {
    // TODO: remove UIView from DOM
    // init data
    // render UIView
  };

  // setColors = () => {
  //   this.categories = this.model.getItems()[1].map(category => {
  //     const newCategory = new CategoryVO(
  //       category.id,
  //       category.label,
  //       category.color
  //     );
  //     const picker = document.getElementById(category.id);
  //     picker.value = category.color;
  //   });
  // };

  setColors = () => {
    this.model.getItems()[1].forEach(category => {
      const picker = document.getElementById(category.id);
      picker.value = category.color;

      this.colorTasks();
    });
  };

  colorTasks = () => {
    this.model.getItems()[0].forEach(column => {
      column.items.forEach(task => {
        document.getElementById(task.id).style.backgroundColor =
          document.getElementById(task.category).value;
      });
    });
  };
}
