import { Storage, Card, UI } from './classes.js';

const form = document.querySelector('.new-card');
form.addEventListener('submit', UI.createCard);

const colorPickerNotImportant = document.getElementById('color-not-important');
const colorPickerImportant = document.getElementById('color-important');
const colorPickerUrgent = document.getElementById('color-urgent');
colorPickerNotImportant.addEventListener('input', UI.changeColor, false);
colorPickerImportant.addEventListener('input', UI.changeColor, false);
colorPickerUrgent.addEventListener('input', UI.changeColor, false);

const bin = document.getElementById('bin');
bin.addEventListener('click', UI.clearAll);
bin.addEventListener('dragover', UI.onDragOver);
bin.addEventListener('drop', UI.removeCardObj);

const colToDo = document.querySelector('.col-to-do');
colToDo.addEventListener('dragover', UI.onDragOver);
colToDo.addEventListener('drop', UI.onDrop);

const colInProgress = document.querySelector('.col-in-progress');
colInProgress.addEventListener('dragover', UI.onDragOver);
colInProgress.addEventListener('drop', UI.onDrop);

const colDone = document.querySelector('.col-done');
colDone.addEventListener('dragover', UI.onDragOver);
colDone.addEventListener('drop', UI.onDrop);

window.addEventListener('DOMContentLoaded', UI.init);
