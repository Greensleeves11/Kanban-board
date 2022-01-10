import Lists from './Lists.js';
import Storage from './Storage.js';

export default class Colors {
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
