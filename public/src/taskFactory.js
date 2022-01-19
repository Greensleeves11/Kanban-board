import { TaskVO } from './model/TaskVO.js';

export const taskFactory = (index, body, category, column, _id, columnID) => {
  return new TaskVO(index, body, category, column, _id, columnID);
};
