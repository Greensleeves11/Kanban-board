import { TaskListView } from './TaskListView.js';
import { ControlPanelView } from './ControlPanelView.js';
import { ColumnView } from './ColumnView.js';

export class UIView {
  template = '<div class="board-container"></div>';
  constructor(columnList) {
    this.children = [];

    const controlPanelView = new ColumnView(
      'Create/remove task',
      new ControlPanelView()
    );
    const columnViewList = columnList.map(
      column => new ColumnView(column.label, new TaskListView(column.items))
    );
    this.children = [controlPanelView, ...columnViewList];
  }
  render = (element, position) => {
    //TODO: we need to clear root element before render
    element.insertAdjacentHTML(position, this.template);
    this.element = element.querySelector('.board-container');

    this.children.forEach(child => child.render(this.element, position));
  };
}
