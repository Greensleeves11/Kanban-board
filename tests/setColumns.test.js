const { Controller } = require('../public/src/Controller');
const { ListVO } = require('../public/src/model/ListVO');

const controller = new Controller();

controller.model.localData = [
  [
    {
      label: 'To do',
      items: [],
      _id: '61e59d4f75cc8be14f148e0b',
    },
    {
      label: 'In progress',
      items: [],
      _id: '61e59d5e75cc8be14f148e0d',
    },
    {
      label: 'Done',
      items: [],
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
  test('it should create new ListVOs', () => {
    controller.setColumns();
    const result = [
      controller.model.localData[0][0] instanceof ListVO,
      controller.model.localData[0][1] instanceof ListVO,
      controller.model.localData[0][2] instanceof ListVO,
    ];
    expect(result).toStrictEqual([true, true, true]);
  });
});
