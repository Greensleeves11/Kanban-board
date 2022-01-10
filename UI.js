import Card from './Card.js';
import Colors from './Colors.js';
import Lists from './Lists.js';
import Storage from './Storage.js';

export default class UI {
  static currentCard;

  static init() {
    Colors.setColors();
    UI.displayCards();
  }

  static displayCards() {
    Lists.listOfCards = Storage.getCards();
    Lists.listOfCards.forEach(card => {
      UI.renderCard(card);
    });
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

  static renderCard(card) {
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
    Colors.assignColor(card);
    const newCard = document.getElementById(`${card.id}`);
    newCard.addEventListener('dragstart', Card.onDragStart);
    this.cleanTextArea();
  }

  static cleanTextArea() {
    const textarea = document.querySelector('#new-card-text');
    textarea.value = '';
  }

  static removeCardFromDOM() {
    const cardToRemove = document.getElementById(`${this.currentCard.id}`);
    cardToRemove.remove();
  }
}