import Card from './Card.js';
import Storage from './Storage.js';
import { panelUI } from './script.js';
import { dataLists } from './script.js';
import { service } from './script.js';

export const cardFactory = function () {
  const body = document.querySelector('#new-card-text');
  if (body.value !== '') {
    const importance = panelUI.checkImportance();
    const card = new Card(body.value, importance);
    dataLists.listOfCards.push(card);
    panelUI.renderCard(card);
    Storage.update();
    service.postData({
      cards: dataLists.listOfCards,
      colors: dataLists.listOfColors,
      counter: Card.counter,
    });
    service.getData();
    return card;
  }
};
