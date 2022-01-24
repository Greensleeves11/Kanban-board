export class TaskVO {
  index: number;
  body: string;
  category: string;
  column?: string;
  _id: string | undefined;
  columnID: string | undefined;
  constructor(
    index: number,
    body: string,
    category: string,
    column?: string,
    _id?: string,
    columnID?: string
  ) {
    (this.index = index),
      (this.body = body),
      (this.category = category),
      (this.column = column);
    this._id = _id;
    this.columnID = columnID;
  }
}
