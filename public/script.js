import Card from './Card.js';
import UI from './UI.js';
import Lists from './Lists.js';
import { cardFactory } from './cardFactory.js';

const form = document.querySelector('.new-card');
form.addEventListener('submit', e => {
  e.preventDefault();
  cardFactory();
});

const colorPickerNotImportant = document.getElementById('color-not-important');
const colorPickerImportant = document.getElementById('color-important');
const colorPickerUrgent = document.getElementById('color-urgent');
colorPickerNotImportant.addEventListener('input', Lists.changeColor, false);
colorPickerImportant.addEventListener('input', Lists.changeColor, false);
colorPickerUrgent.addEventListener('input', Lists.changeColor, false);

const bin = document.getElementById('bin');
bin.addEventListener('dragover', e => {
  e.preventDefault();
});
bin.addEventListener('drop', Card.removeCardObj);

const colToDo = document.querySelector('.col-to-do');
colToDo.addEventListener('dragover', e => {
  e.preventDefault();
});
colToDo.addEventListener('drop', Card.onDrop);

const colInProgress = document.querySelector('.col-in-progress');
colInProgress.addEventListener('dragover', e => {
  e.preventDefault();
});
colInProgress.addEventListener('drop', Card.onDrop);

const colDone = document.querySelector('.col-done');
colDone.addEventListener('dragover', e => {
  e.preventDefault();
});
colDone.addEventListener('drop', Card.onDrop);

window.addEventListener('DOMContentLoaded', UI.init);
