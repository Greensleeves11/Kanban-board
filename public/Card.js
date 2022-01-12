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

  assignToColumn() {
    if (this.column === 1) {
      return document.querySelector('.col-to-do');
    } else if (this.column === 2) {
      return document.querySelector('.col-in-progress');
    } else if (this.column === 3) {
      return document.querySelector('.col-done');
    }
  }

  assignColor() {
    const card = document.getElementById(`${this.id}`);
    if (this.importance === 1) {
      card.style.backgroundColor = document.getElementById(
        'color-not-important'
      ).value;
    } else if (this.importance === 2) {
      card.style.backgroundColor =
        document.getElementById('color-important').value;
    } else if (this.importance === 3) {
      card.style.backgroundColor =
        document.getElementById('color-urgent').value;
    }
  }
}
