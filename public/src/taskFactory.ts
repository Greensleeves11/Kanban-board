import { TaskVO } from './model/TaskVO';

export const taskFactory = (
  index: number,
  body: string,
  category: string,
  createdBy: string,
  column?: string,
  _id?: string,
  columnID?: string
) => {
  return new TaskVO(index, body, category, createdBy, column, _id, columnID);
};
