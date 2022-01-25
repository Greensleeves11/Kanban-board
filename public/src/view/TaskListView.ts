import { TaskVO } from '../model/TaskVO.js';
import { TaskView } from './TaskView.js';

export class TaskListView {
  children: TaskView[];
  constructor(cardItems: TaskVO[]) {
    this.children = cardItems.map(item => {
      return new TaskView(item);
    });
  }

  render(parentElement: HTMLElement, position: InsertPosition) {
    this.children.forEach(child => {
      child.render(parentElement, position);
    });
  }
}
