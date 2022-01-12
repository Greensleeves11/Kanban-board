import Storage from './Storage.js';

export default class Lists {
  constructor() {
    this.listOfCards;
    this.listOfColors;
  }

  findIndexById(id) {
    let index;
    for (let i = 0; i < this.listOfCards.length; i++) {
      if (this.listOfCards[i].id == id) {
        index = i;
        break;
      }
    }
    return index;
  }

  assignColumnValue(target, id) {
    const index = this.findIndexById(id);
    if (target.classList.contains('col-to-do')) {
      this.listOfCards[index].column = 1;
    } else if (target.classList.contains('col-in-progress')) {
      this.listOfCards[index].column = 2;
    } else if (target.classList.contains('col-done')) {
      this.listOfCards[index].column = 3;
    }
  }

  changeColor(event) {
    const id = event.target.id;
    if (id === 'color-not-important') {
      this.listOfCards.forEach(card => {
        if (card.importance === 1) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      this.listOfColors[0] = event.target.value;
    } else if (id === 'color-important') {
      this.listOfCards.forEach(card => {
        if (card.importance === 2) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      this.listOfColors[1] = event.target.value;
    } else if (id === 'color-urgent') {
      this.listOfCards.forEach(card => {
        if (card.importance === 3) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      this.listOfColors[2] = event.target.value;
    }
    Storage.update();
  }

  setColors() {
    this.listOfColors = Storage.getColors();
    const colorPickerNotImportant = document.getElementById(
      'color-not-important'
    );
    const colorPickerImportant = document.getElementById('color-important');
    const colorPickerUrgent = document.getElementById('color-urgent');
    colorPickerNotImportant.setAttribute('value', this.listOfColors[0]);
    colorPickerImportant.setAttribute('value', this.listOfColors[1]);
    colorPickerUrgent.setAttribute('value', this.listOfColors[2]);
  }
}
