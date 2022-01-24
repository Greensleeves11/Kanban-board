export class CategoryVO {
  index: string;
  label: string;
  color: string;
  _id: string;

  constructor(index: string, label: string, color: string, _id: string) {
    (this.index = index),
      (this.label = label),
      (this.color = color),
      (this._id = _id);
  }
}
