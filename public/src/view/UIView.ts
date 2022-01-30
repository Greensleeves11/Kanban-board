import { TaskListView } from './TaskListView';
import { ControlPanelView } from './ControlPanelView';
import { ColumnView } from './ColumnView';
import { ListVO } from '../model/ListVO';

export class UIView {
  template = '<div class="board-container"></div>';
  children;
  element: HTMLElement | undefined;
  constructor(columnList: ListVO[]) {
    const controlPanelView = new ColumnView(
      'Create task',
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
