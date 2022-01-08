class Lists {
  static listOfCards;
  static listOfColors;
}

class Storage {
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

class Card {
  static counter = Storage.getCounter();
  constructor(body, importance) {
    this.body = body;
    this.id = Card.counter++;
    this.column = 1;
    this.importance = importance;
  }
}

class UI {
  static init() {
    UI.setColors();
    UI.displayCards();
  }

  static displayCards() {
    Lists.listOfCards = Storage.getCards();
    Lists.listOfCards.forEach(card => {
      UI.renderCard(card, card.body);
    });
  }

  static createCard(e) {
    e.preventDefault();
    const body = document.querySelector('#new-card-text');
    if (body.value !== '') {
      const importance = UI.checkImportance();
      const card = new Card(body.value, importance);
      Lists.listOfCards.push(card);
      UI.renderCard(card, body.value);
      Storage.update();
      return card;
    }
  }

  static checkImportance() {
    const radioButtons = document.getElementsByName('importance');
    let importance;
    for (let button of radioButtons) {
      if (button.checked) {
        importance = button.attributes.value.value;
      }
    }
    return parseInt(importance);
  }

  static renderCard(card, body) {
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.setAttribute('draggable', 'true');
    newCard.addEventListener('dragstart', UI.onDragStart);
    newCard.setAttribute('id', `${card.id}`);
    newCard.innerHTML = `
            <section class="card-header">
                <p class="card-text-header">
                    Task #${newCard.id}
                </p>
            </section>
            <section class="card-body">
                <p class="card-text" contenteditable="true">
                    ${body}
                </p>
            </section>
            `;
    const column = this.assignToColumn(card);
    column.appendChild(newCard);
    this.assignColor(card);

    const textarea = document.querySelector('#new-card-text');
    textarea.value = '';
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

  static currentCard;

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
      UI.assignColumnValue(event.target, id);
      console.log(event.target);
      dropzone.appendChild(draggableElement);
      event.dataTransfer.clearData();
      Storage.update();
    }
  }

  static assignColumnValue(target, id) {
    if (target.classList[1] === 'col-to-do') {
      Lists.listOfCards[id - 1].column = 1;
    } else if (target.classList[1] === 'col-in-progress') {
      Lists.listOfCards[id - 1].column = 2;
    } else if (target.classList[1] === 'col-done') {
      Lists.listOfCards[id - 1].column = 3;
    }
  }

  static removeCardFromDOM() {
    const cardToRemove = document.getElementById(`${this.currentCard.id}`);
    cardToRemove.remove();
  }

  static removeCardObj() {
    const id = UI.currentCard.id;
    for (let card of Lists.listOfCards) {
      if (card.id == id) {
        Lists.listOfCards.splice(Lists.listOfCards[id - 1], 1);
        break;
      }
    }
    UI.removeCardFromDOM();
    Storage.update();
  }

  static clearAll() {
    for (let i = 0; i < Lists.listOfCards.length; i++) {
      document.getElementById(`${Lists.listOfCards[i].id}`).remove();
    }
    Lists.listOfCards = [];
    Lists.listOfColors = [];
    Card.counter = 1;
    Storage.clear();
    UI.init();
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

export { Storage, Card, UI };
