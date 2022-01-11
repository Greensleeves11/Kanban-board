import Lists from './Lists.js';
import Storage from './Storage.js';
import UI from './UI.js';

export default class Card {
  static counter = Storage.getCounter();
  constructor(body, importance) {
    this.body = body;
    this.id = Card.counter++;
    this.column = 1;
    this.importance = importance;
  }
  static createCard(e) {
    e.preventDefault();
    const body = document.querySelector('#new-card-text');
    if (body.value !== '') {
      const importance = UI.checkImportance();
      const card = new Card(body.value, importance);
      Lists.listOfCards.push(card);
      UI.renderCard(card);
      Storage.update();
    }
  }

  static removeCardObj() {
    const id = UI.currentCard.id;
    console.log(id);
    const index = Card.findIndexById(id);
    console.log(index);
    Lists.listOfCards.splice(index, 1);
    UI.removeCardFromDOM();
    Storage.update();
  }

  static findIndexById(id) {
    let index;
    for (let i = 0; i < Lists.listOfCards.length; i++) {
      if (Lists.listOfCards[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  }

  static onDragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    UI.currentCard = event.currentTarget;
  }

  static onDragOver(event) {
    event.preventDefault();
  }

  static onDrop(event) {
    if (event.target.classList.contains('col-body')) {
      const id = event.dataTransfer.getData('text');
      const draggableElement = document.getElementById(id);
      const dropzone = event.target;
      Card.assignColumnValue(event.target, id);
      dropzone.appendChild(draggableElement);
      event.dataTransfer.clearData();
      Storage.update();
    }
  }

  static assignColumnValue(target, id) {
    const index = this.findIndexById(id);
    if (target.classList[1] === 'col-to-do') {
      Lists.listOfCards[index].column = 1;
    } else if (target.classList[1] === 'col-in-progress') {
      Lists.listOfCards[index].column = 2;
    } else if (target.classList[1] === 'col-done') {
      Lists.listOfCards[index].column = 3;
    }
  }

  static assignToColumn(card) {
    if (card.column === 1) {
      return document.querySelector('.col-to-do');
    } else if (card.column === 2) {
      return document.querySelector('.col-in-progress');
    } else if (card.column === 3) {
      return document.querySelector('.col-done');
    }
  }
}
