import { TaskView } from './TaskView.js';

export class TaskListView {
  // to do: give better type for children
  children: any;
  constructor(cardItems) {
    this.children = cardItems.map(item => {
      return new TaskView(item);
    });
  }

  render(parentElement, position) {
    this.children.forEach(child => {
      child.render(parentElement, position);
    });
  }
}
