import { TaskVO } from './TaskVO';

export class ListVO {
  label: string;
  items: TaskVO[];
  _id: string;
  constructor(label: string, items: TaskVO[], _id: string) {
    (this.label = label), (this.items = items), (this._id = _id);
  }
}
