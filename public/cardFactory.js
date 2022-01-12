import UI from './UI.js';
import Card from './Card.js';
import Lists from './Lists.js';
import Storage from './Storage.js';

export const cardFactory = function () {
  const body = document.querySelector('#new-card-text');
  if (body.value !== '') {
    const importance = UI.checkImportance();
    const card = new Card(body.value, importance);
    Lists.listOfCards.push(card);
    UI.renderCard(card);
    Storage.update();
    return card;
  }
};
