import Storage from './Storage.js';
import { dataLists } from './script.js';

export default class Lists {
  constructor() {
    this.listOfCards = [];
    this.listOfColors = [];
  }

  static findIndexById(id) {
    let index;
    for (let i = 0; i < dataLists.listOfCards.length; i++) {
      if (dataLists.listOfCards[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  }

  static assignColumnValue(target, id) {
    const index = this.findIndexById(id);
    if (target.classList.contains('col-to-do')) {
      dataLists.listOfCards[index].column = 1;
    } else if (target.classList.contains('col-in-progress')) {
      dataLists.listOfCards[index].column = 2;
    } else if (target.classList.contains('col-done')) {
      dataLists.listOfCards[index].column = 3;
    }
  }

  static changeColor(event) {
    const id = event.target.id;
    if (id === 'color-not-important') {
      dataLists.listOfCards.forEach(card => {
        if (card.importance === 1) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      dataLists.listOfColors[0] = event.target.value;
    } else if (id === 'color-important') {
      dataLists.listOfCards.forEach(card => {
        if (card.importance === 2) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      dataLists.listOfColors[1] = event.target.value;
    } else if (id === 'color-urgent') {
      dataLists.listOfCards.forEach(card => {
        if (card.importance === 3) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      dataLists.listOfColors[2] = event.target.value;
    }
    Storage.update();
  }

  static setColors() {
    dataLists.listOfColors = Storage.getColors();
    const colorPickerNotImportant = document.getElementById(
      'color-not-important'
    );
    const colorPickerImportant = document.getElementById('color-important');
    const colorPickerUrgent = document.getElementById('color-urgent');
    colorPickerNotImportant.setAttribute('value', dataLists.listOfColors[0]);
    colorPickerImportant.setAttribute('value', dataLists.listOfColors[1]);
    colorPickerUrgent.setAttribute('value', dataLists.listOfColors[2]);
  }
}
