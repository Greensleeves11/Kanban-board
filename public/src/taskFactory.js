import { TaskVO } from './model/TaskVO.js';

export const taskFactory = (index, body, category, column) => {
  return new TaskVO(index, body, category, column);
};
