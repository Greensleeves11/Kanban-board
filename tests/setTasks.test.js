const { Controller } = require('../public/src/Controller');
const { TaskVO } = require('../public/src/model/TaskVO');

const controller = new Controller();

controller.model.localData = [
  [
    {
      label: 'To do',
      items: [
        {
          index: 119,
          body: 'modified 2',
          category: 'c-not-important',
          column: 'To do',
          _id: '61e808c974325f9ea848d80f',
          columnID: '61e59d4f75cc8be14f148e0b',
        },
      ],
      _id: '61e59d4f75cc8be14f148e0b',
    },
    {
      label: 'In progress',
      items: [
        {
          index: 121,
          body: 'dsds',
          category: 'c-not-important',
          column: 'In progress',
          _id: '61e8126cf8afc65b5a23b6d4',
          columnID: '61e59d5e75cc8be14f148e0d',
        },
      ],
      _id: '61e59d5e75cc8be14f148e0d',
    },
    {
      label: 'Done',
      items: [
        {
          index: 122,
          body: 'dasd',
          category: 'c-important',
          column: 'Done',
          _id: '61e8126ff8afc65b5a23b6e0',
          columnID: '61e59d7975cc8be14f148e0f',
        },
      ],
      _id: '61e59d7975cc8be14f148e0f',
    },
  ],
  [
    {
      index: 'c-not-important',
      label: 'not important',
      color: '#bdcf81',
      _id: '61e72c1e457e4eff6639a334',
    },
    {
      index: 'c-important',
      label: 'important',
      color: '#73b3ce',
      _id: '61e72c37457e4eff6639a337',
    },
    {
      index: 'c-urgent',
      label: 'urgent',
      color: '#dd5f5f',
      _id: '61e72c42457e4eff6639a339',
    },
  ],
  {
    _id: '61e59e2c75cc8be14f148e12',
    counter: 160,
    __v: 0,
  },
];

describe('Set columns test', () => {
  test('it should create new TaskVOs', () => {
    controller.setTasks();
    const result = [
      controller.model.localData[0][0].items[0] instanceof TaskVO,
      controller.model.localData[0][1].items[0] instanceof TaskVO,
      controller.model.localData[0][2].items[0] instanceof TaskVO,
    ];
    expect(result).toStrictEqual([true, true, true]);
  });
});
