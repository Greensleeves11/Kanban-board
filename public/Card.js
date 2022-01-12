import Storage from './Storage.js';
import { panelUI } from './script.js';
import { dataLists } from './script.js';

export default class Card {
  static counter = Storage.getCounter();
  constructor(body, importance) {
    this.body = body;
    this.id = Card.counter++;
    this.column = 1;
    this.importance = importance;
  }

  static removeCardObj() {
    const id = panelUI.currentCard.id;
    const index = dataLists.findIndexById(id);
    dataLists.listOfCards.splice(index, 1);
    panelUI.removeCardFromDOM();
    Storage.update();
  }

  static onDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    panelUI.currentCard = e.currentTarget;
  }

  static onDrop(e) {
    if (e.target.classList.contains('col-body')) {
      const id = e.dataTransfer.getData('text');
      const draggableElement = document.getElementById(id);
      const dropzone = e.target;
      dataLists.assignColumnValue(e.target, id);
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
