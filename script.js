import { Storage, Card, UI, Colors } from './classes.js';

const form = document.querySelector('.new-card');
form.addEventListener('submit', Card.createCard);

const colorPickerNotImportant = document.getElementById('color-not-important');
const colorPickerImportant = document.getElementById('color-important');
const colorPickerUrgent = document.getElementById('color-urgent');
colorPickerNotImportant.addEventListener('input', Colors.changeColor, false);
colorPickerImportant.addEventListener('input', Colors.changeColor, false);
colorPickerUrgent.addEventListener('input', Colors.changeColor, false);

const bin = document.getElementById('bin');
bin.addEventListener('dragover', Card.onDragOver);
bin.addEventListener('drop', Card.removeCardObj);

const colToDo = document.querySelector('.col-to-do');
colToDo.addEventListener('dragover', Card.onDragOver);
colToDo.addEventListener('drop', Card.onDrop);

const colInProgress = document.querySelector('.col-in-progress');
colInProgress.addEventListener('dragover', Card.onDragOver);
colInProgress.addEventListener('drop', Card.onDrop);

const colDone = document.querySelector('.col-done');
colDone.addEventListener('dragover', Card.onDragOver);
colDone.addEventListener('drop', Card.onDrop);

window.addEventListener('DOMContentLoaded', UI.init);
