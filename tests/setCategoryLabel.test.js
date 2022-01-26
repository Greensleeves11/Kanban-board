const { Controller } = require('../public/src/Controller');

const controller = new Controller();

const cases = [
  [1, 'c-not-important'],
  [2, 'c-important'],
  [3, 'c-urgent'],
];

describe('Set category label test', () => {
  test.each(cases)(
    'given %p as argument, returns %p',
    (firstArg, secondArg) => {
      const result = controller.setCategoryLabel(firstArg);
      expect(result).toBe(secondArg);
    }
  );
});
