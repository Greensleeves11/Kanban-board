export class TaskVO {
  constructor(index, body, category, column, _id, columnID) {
    (this.index = index),
      (this.body = body),
      (this.category = category),
      (this.column = column);
    this._id = _id;
    this.columnID = columnID;
  }
}
