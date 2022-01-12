import Card from './Card.js';
import Lists from './Lists.js';
import Storage from './Storage.js';
import { dataLists } from './script.js';

export default class UI {
  constructor() {
    this.currentCard;
  }

  init() {
    Lists.setColors();
    this.displayCards();
  }

  displayCards() {
    dataLists.listOfCards = Storage.getCards();
    dataLists.listOfCards.forEach(card => {
      this.renderCard(card);
    });
  }

  checkImportance() {
    const radioButtons = document.getElementsByName('importance');
    let importance;
    for (let button of radioButtons) {
      if (button.checked) {
        importance = button.attributes.value.value;
      }
    }
    return parseInt(importance);
  }

  renderCard(card) {
    const body = card.body;
    const column = Card.assignToColumn(card);
    column.insertAdjacentHTML(
      'beforeend',
      `<div class='card' draggable='true' id='${card.id}'>
        <section class="card-header">
          <p class="card-text-header">
           Task #${card.id}
         </p>
        </section>
        <section class="card-body">
          <p class="card-text" contenteditable="true">
            ${body}
          </p>
        </section>
      </div>`
    );
    Card.assignColor(card);
    const newCard = document.getElementById(`${card.id}`);
    newCard.addEventListener('dragstart', Card.onDragStart);
    this.cleanTextArea();
  }

  cleanTextArea() {
    const textarea = document.querySelector('#new-card-text');
    textarea.value = '';
  }

  removeCardFromDOM() {
    const cardToRemove = document.getElementById(`${this.currentCard.id}`);
    cardToRemove.remove();
  }
}
