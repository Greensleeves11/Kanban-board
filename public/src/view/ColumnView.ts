import { ControlPanelView } from './ControlPanelView';
import { TaskListView } from './TaskListView';

export class ColumnView {
  title: string;
  childElement: ColumnView;
  template: string;
  columnBody: Element | undefined;
  constructor(
    title: string,
    childElement: ColumnView | TaskListView | ControlPanelView
  ) {
    this.title = title;
    this.childElement = childElement as ColumnView;
    this.template = `<div class="col">
    <div class="col-title">
    <p class="title-text">${title}</p>
    </div>
    <div class="col-body">
    </div>
    </div>`;
  }

  render = (parentElement: Element, position: InsertPosition) => {
    parentElement.insertAdjacentHTML(position, this.template);
    const allColumnBodies = parentElement.querySelectorAll('.col-body');
    this.columnBody = allColumnBodies[allColumnBodies.length - 1];

    this.childElement.render(this.columnBody, position);
  };
}
