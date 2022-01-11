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
    const index = Lists.findIndexById(id);
    console.log(index);
    Lists.listOfCards.splice(index, 1);
    UI.removeCardFromDOM();
    Storage.update();
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
      Lists.assignColumnValue(event.target, id);
      dropzone.appendChild(draggableElement);
      event.dataTransfer.clearData();
      Storage.update();
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
