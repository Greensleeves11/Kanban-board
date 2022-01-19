export class TaskVO {
  constructor(index, body, category, column, _id) {
    (this.index = index),
      (this.body = body),
      (this.category = category),
      (this.column = column);
    this._id = _id;
  }
}
