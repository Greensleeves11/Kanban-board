export class View {
  template = '';
  render = (element: HTMLElement, position: InsertPosition) => {
    element.insertAdjacentHTML(position, this.template);
  };
}
