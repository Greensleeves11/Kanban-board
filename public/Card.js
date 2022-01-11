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

  static removeCardObj() {
    const id = UI.currentCard.id;
    const index = Lists.findIndexById(id);
    Lists.listOfCards.splice(index, 1);
    UI.removeCardFromDOM();
    Storage.update();
  }

  static onDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    UI.currentCard = e.currentTarget;
  }

  static onDrop(e) {
    if (e.target.classList.contains('col-body')) {
      const id = e.dataTransfer.getData('text');
      const draggableElement = document.getElementById(id);
      const dropzone = e.target;
      Lists.assignColumnValue(e.target, id);
      dropzone.appendChild(draggableElement);
      e.dataTransfer.clearData();
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

  static assignColor(newCard) {
    const card = document.getElementById(`${newCard.id}`);
    if (newCard.importance === 1) {
      card.style.backgroundColor = document.getElementById(
        'color-not-important'
      ).value;
    } else if (newCard.importance === 2) {
      card.style.backgroundColor =
        document.getElementById('color-important').value;
    } else if (newCard.importance === 3) {
      card.style.backgroundColor =
        document.getElementById('color-urgent').value;
    }
  }
}
