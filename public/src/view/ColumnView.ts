export class ColumnView {
  title: string;
  // to do: give better type for childElement
  childElement: any;
  template: string;
  // to do: give better type for columnBody
  columnBody: any;
  constructor(title: string, childElement: object) {
    this.title = title;
    this.childElement = childElement;
    this.template = `<div class="col">
    <div class="col-title">
    <p class="title-text">${title}</p>
    </div>
    <div class="col-body">
    </div>
    </div>`;
  }

  render = (parentElement: HTMLElement, position: InsertPosition) => {
    parentElement.insertAdjacentHTML(position, this.template);
    const allColumnBodies = parentElement.querySelectorAll('.col-body');
    this.columnBody = allColumnBodies[allColumnBodies.length - 1];

    this.childElement.render(this.columnBody, position);
  };
}
