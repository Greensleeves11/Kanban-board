import Card from './Card.js';
import Storage from './Storage.js';
import { dataLists } from './script.js';
import { panelUI } from './script.js';

export default class UI {
  constructor() {
    this.currentCard;
  }

  init() {
    dataLists.setColors();
    this.displayCards();
  }

  displayCards() {
    dataLists.listOfCards = Storage.getCards();
    const tempList = dataLists.listOfCards;
    Card.counter -= tempList.length;
    dataLists.listOfCards = [];
    tempList.forEach(card => {
      const newCard = new Card(card.body, card.importance);
      newCard.column = card.column;
      newCard.id = card.id;
      dataLists.listOfCards.push(newCard);
      panelUI.renderCard(newCard);
      Storage.update();
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
    const column = card.assignToColumn();
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
    card.assignColor();
    const newCard = document.getElementById(`${card.id}`);
    newCard.addEventListener('dragstart', card.onDragStart);
    this.cleanTextArea();
  }

  cleanTextArea() {
    const textarea = document.querySelector('#new-card-text');
    textarea.value = '';
  }
}
