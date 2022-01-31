export class View {
  template = '';
  render = (element: HTMLElement | null, position: InsertPosition) => {
    if (element) {
      element.insertAdjacentHTML(position, this.template);
    }
  };
}
