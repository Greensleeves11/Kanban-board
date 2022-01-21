export class ListVO {
  label: string;
  // not sure here - check if it can be object[]
  items: object[];
  _id: string;
  constructor(label: string, items: object[], _id: string) {
    (this.label = label), (this.items = items), (this._id = _id);
  }
}
