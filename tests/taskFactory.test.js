const { taskFactory } = require('../public/src/taskFactory');
const { TaskVO } = require('../public/src/model/TaskVO');

const cases = [
  [1, 'test task', 'To do'],
  [2, 'test task2', 'To do'],
  [3, 'test task3', 'To do'],
];

describe('Task factory test', () => {
  test.each(cases)(
    'given %p, %p and %p as arguments, returns instance of TaskVO',
    (firstArg, secondArg, thirdArg) => {
      const result = taskFactory(firstArg, secondArg, thirdArg);
      const taskInstance = result instanceof TaskVO;
      expect(taskInstance).toBe(true);
    }
  );
});
