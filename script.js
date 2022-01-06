// import { UI, Storage } from './classes.js';

class Card {
    static counter = 1;
    constructor(body, importance) {
        this.body = body;
        this.id = Card.counter++;
        this.column = 1;
        this.importance = importance;
    }
}

class UI {

    // display cards

    // add card
    static createCard(e) {
        e.preventDefault();
        const body = document.querySelector('#new-card-text');
        if (body.value !== '') {
            const importance = UI.checkImportance();
            const card = new Card(body.value, importance);
            list.push(card);
            UI.renderCard(card, body);
            return card;
        }  
    }

    // check importance
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

    // render card
    static renderCard(card, body) {
        const toDoColumn = document.querySelector('.col-to-do');
        const newCard = document.createElement('div');
        newCard.classList.add('card');
        newCard.setAttribute('draggable', 'true');
        newCard.setAttribute('ondragstart', 'UI.onDragStart(event);');
        newCard.setAttribute('id', `${card.id}`);
        newCard.innerHTML = 
            `
            <section class="card-header">
                <p class="card-text-header">
                    Task #${newCard.id}
                </p>
            </section>
            <section class="card-body">
                <p class="card-text" contenteditable="true">
                    ${body.value}
                </p>
            </section>
            `
        toDoColumn.appendChild(newCard);
        newCard.style.backgroundColor = this.toDoColor || 'rgba(244, 140, 6, .5)';
        body.value = '';
    }

    // move card to another column
    static currentCard;

    static onDragStart(event) {
        event.dataTransfer.setData('text/plain', event.target.id);
        this.currentCard = event.currentTarget;
    }

    static onDragOver(event) {
        event.preventDefault();
    }

    static onDrop(event) {
        const id = event.dataTransfer.getData('text');
        const draggableElement = document.getElementById(id);
        const dropzone = event.target;
        dropzone.appendChild(draggableElement);
        this.changeColorOnDrop(dropzone);
        event.dataTransfer.clearData();
    }

    // remove card from DOM
    static removeCard() {
        const cardToRemove = document.getElementById(`${this.currentCard.id}`);
        if (parseInt(cardToRemove.id) === Card.counter - 1) {
            Card.counter--;
        }
        cardToRemove.remove();
    }

    // remove card from array of cards
    static removeCardObj() {
        const id = this.currentCard.id;
        for (let card of list) {
            if (card.id == id) {
                list.splice(id - 1, 1);
                break;
            }
        }
        this.removeCard();
    }

    // Change color
    static toDoColor;
    static progressColor;
    static doneColor;

    static changeColor(event) {

        const id = event.target.id;
        if (id === 'color-todo') {
    
            const col = document.querySelector('.col-to-do')
            const cards = col.querySelectorAll('.card');
            cards.forEach((card) => {
                card.style.backgroundColor = event.target.value;
            })
    
            colorPickerToDo.value = event.target.value;
            this.toDoColor = colorPickerToDo.value;
            
        } else if (id === 'color-progress') {
    
            const col = document.querySelector('.col-in-progress')
            const cards = col.querySelectorAll('.card');
            cards.forEach((card) => {
                card.style.backgroundColor = event.target.value;
            })
    
            colorPickerProgress.value = event.target.value;
            this.progressColor = colorPickerProgress.value;
    
        } else if (id === 'color-done') {
    
            const col = document.querySelector('.col-done')
            const cards = col.querySelectorAll('.card');
            cards.forEach((card) => {
                card.style.backgroundColor = event.target.value;
            })
    
            colorPickerDone.value = event.target.value;
            this.doneColor = colorPickerDone.value;
    
        }
    }

    static changeColorOnDrop(dropzone) {
        if (dropzone.classList[1] === 'col-to-do') {
            this.currentCard.style.backgroundColor = this.toDoColor || 'rgba(244, 140, 6, .5)';
        } else if (dropzone.classList[1] === 'col-in-progress') {
            this.currentCard.style.backgroundColor = this.progressColor || 'rgba(3, 149, 228, .5)';
        } else if (dropzone.classList[1] === 'col-done')  {
            this.currentCard.style.backgroundColor = this.doneColor || 'rgba(167, 201, 87, .7)';
        }
    }

}

class Storage {

    // get cards

    // add card

    // remove card

}

const form = document.querySelector('.new-card');
form.addEventListener('submit', UI.createCard);

const colorPickerToDo = document.querySelector('.picker-todo');
const colorPickerProgress = document.querySelector('.picker-progress');
const colorPickerDone = document.querySelector('.picker-done');
colorPickerToDo.addEventListener("input", UI.changeColor, false);
colorPickerProgress.addEventListener("input", UI.changeColor, false);
colorPickerDone.addEventListener("input", UI.changeColor, false);

const list = [];

