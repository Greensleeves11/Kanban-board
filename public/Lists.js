import Storage from './Storage.js';

export default class Lists {
  static listOfCards;
  static listOfColors;

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

  static assignColumnValue(target, id) {
    const index = this.findIndexById(id);
    if (target.classList.contains('col-to-do')) {
      Lists.listOfCards[index].column = 1;
    } else if (target.classList.contains('col-in-progress')) {
      Lists.listOfCards[index].column = 2;
    } else if (target.classList.contains('col-done')) {
      Lists.listOfCards[index].column = 3;
    }
  }

  static changeColor(event) {
    const id = event.target.id;
    if (id === 'color-not-important') {
      Lists.listOfCards.forEach(card => {
        if (card.importance === 1) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      Lists.listOfColors[0] = event.target.value;
    } else if (id === 'color-important') {
      Lists.listOfCards.forEach(card => {
        if (card.importance === 2) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      Lists.listOfColors[1] = event.target.value;
    } else if (id === 'color-urgent') {
      Lists.listOfCards.forEach(card => {
        if (card.importance === 3) {
          document.getElementById(`${card.id}`).style.backgroundColor =
            event.target.value;
        }
      });
      Lists.listOfColors[2] = event.target.value;
    }
    Storage.update();
  }

  static setColors() {
    Lists.listOfColors = Storage.getColors();
    const colorPickerNotImportant = document.getElementById(
      'color-not-important'
    );
    const colorPickerImportant = document.getElementById('color-important');
    const colorPickerUrgent = document.getElementById('color-urgent');
    colorPickerNotImportant.setAttribute('value', Lists.listOfColors[0]);
    colorPickerImportant.setAttribute('value', Lists.listOfColors[1]);
    colorPickerUrgent.setAttribute('value', Lists.listOfColors[2]);
  }
}
