import { TaskVO } from './model/TaskVO.js';

export const taskFactory = (id, body, category) => {
  return new TaskVO(id, body, category);
};
