import { TaskListView } from './TaskListView.js';
import { ControlPanelView } from './ControlPanelView.js';
import { ColumnView } from './ColumnView.js';
import { ListVO } from '../model/ListVO.js';

export class UIView {
  template = '<div class="board-container"></div>';
  children;
  element: HTMLElement | undefined;
  constructor(columnList: ListVO[]) {
    const controlPanelView = new ColumnView(
      'Create/remove task',
      new ControlPanelView()
    );
    const columnViewList = columnList.map(
      column => new ColumnView(column.label, new TaskListView(column.items))
    );
    this.children = [controlPanelView, ...columnViewList];
  }
  render = (element: HTMLElement | null, position: InsertPosition) => {
    if (element) {
      element.insertAdjacentHTML(position, this.template);
      this.element = element.querySelector('.board-container') as HTMLElement;

      this.children.forEach(child =>
        child.render(this.element as HTMLElement, position)
      );
    }
  };
}
