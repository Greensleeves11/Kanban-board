import { ListModel } from './model/ListModel.js';
import { UIView } from './view/UIView.js';

export class TaskController {
  constructor() {
    this.model = new ListModel();
    this.root = document.getElementById('root');
  }

  init = () => {
    this.view = new UIView(this.model.getItems());
    this.view.render(this.root, 'beforeend');
  };

  rerender = () => {
    // TODO: remove UIView from DOM
    // init data
    // render UIView
  };
}
