export class ListVO {
  constructor(id) {
    (this.id = id), (this.label = `Task ${id}`), (this.items = []);
  }
}
