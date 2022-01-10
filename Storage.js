import Lists from './Lists.js';
import Card from './Card.js';

export default class Storage {
  static getCards() {
    let cards;
    if (localStorage.getItem('cards') === null) {
      cards = [];
    } else {
      cards = JSON.parse(localStorage.getItem('cards'));
    }
    return cards;
  }

  static update() {
    localStorage.setItem('cards', JSON.stringify(Lists.listOfCards));
    localStorage.setItem('counter', Card.counter);
    localStorage.setItem('colors', JSON.stringify(Lists.listOfColors));
  }

  static clear() {
    localStorage.removeItem('cards');
    localStorage.removeItem('counter');
    localStorage.removeItem('colors');
  }

  static getCounter() {
    let counter;
    if (localStorage.getItem('counter') === null) {
      counter = 1;
    } else {
      counter = localStorage.getItem('counter');
    }
    return counter;
  }

  static getColors() {
    let colors;
    if (localStorage.getItem('colors') === null) {
      colors = ['#91c346', '#0395e4', '#db4d4d'];
    } else {
      colors = JSON.parse(localStorage.getItem('colors'));
    }
    return colors;
  }
}
