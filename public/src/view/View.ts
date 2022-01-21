export class View {
  template = '';
  render = (element, position) => {
    element.insertAdjacentHTML(position, this.template);
  };
}
