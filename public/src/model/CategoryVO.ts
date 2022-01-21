export class CategoryVO {
  index: number;
  label: string;
  color: string;
  _id: string;

  constructor(index: number, label: string, color: string, _id: string) {
    (this.index = index),
      (this.label = label),
      (this.color = color),
      (this._id = _id);
  }
}
