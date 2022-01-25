import { TaskVO } from './model/TaskVO';

export const taskFactory = (
  index: number,
  body: string,
  category: string,
  column?: string,
  _id?: string,
  columnID?: string
) => {
  return new TaskVO(index, body, category, column, _id, columnID);
};
