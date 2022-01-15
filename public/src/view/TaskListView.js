import { TaskView } from './TaskView.js';

export class TaskListView {
  constructor(cardItems) {
    this.children = cardItems.map(item => {
      console.log(item);
      return new TaskView(item);
    });
  }

  render(parentElement, position) {
    this.children.forEach(child => {
      child.render(parentElement, position);
    });
  }
}
