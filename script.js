// import { UI, Storage } from './classes.js';

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
        localStorage.setItem('cards', JSON.stringify(listOfCards));
        localStorage.setItem('counter', Card.counter);
        localStorage.setItem('colors', JSON.stringify(listOfColors));
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
        listOfCards = Storage.getCards();
        listOfCards.forEach(card => {
            UI.renderCard(card, card.body)
        })
    }

    static createCard(e) {
        e.preventDefault();
        const body = document.querySelector('#new-card-text');
        if (body.value !== '') {
            const importance = UI.checkImportance();
            const card = new Card(body.value, importance);
            listOfCards.push(card);
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
                    ${body}
                </p>
            </section>
            `
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
        const card = document.getElementById(`${newCard.id}`)
        if (newCard.importance === 1) {
            card.style.backgroundColor = document.getElementById('color-not-important').value;
        } else if (newCard.importance === 2) {
            card.style.backgroundColor = document.getElementById('color-important').value;
        } else if (newCard.importance === 3) {
            card.style.backgroundColor = document.getElementById('color-urgent').value;
        }
    }

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
        this.assignColumnValue(event.target, id);
        dropzone.appendChild(draggableElement);
        event.dataTransfer.clearData();
        Storage.update();
    }

    static assignColumnValue(target, id) {
        if (target.classList[1] === 'col-to-do') {
            listOfCards[id - 1].column = 1;
        } else if (target.classList[1] === 'col-in-progress') {
            listOfCards[id - 1].column = 2;
        } else if (target.classList[1] === 'col-done') {
            listOfCards[id - 1].column = 3;
        }
    }

    static removeCardFromDOM() {
        const cardToRemove = document.getElementById(`${this.currentCard.id}`);
        // if (parseInt(cardToRemove.id) === Card.counter - 1) {
        //     Card.counter--;
        // }
        cardToRemove.remove();
    }

    static removeCardObj() {
        const id = this.currentCard.id;
        for (let card of listOfCards) {
            if (card.id == id) {
                listOfCards.splice(id - 1, 1);
                break;
            }
        }
        this.removeCardFromDOM();
        Storage.update();
    }

    static clearAll() {
        for (let i = 0; i < listOfCards.length; i++) {
            document.getElementById(`${listOfCards[i].id}`).remove();
        }
        listOfCards = [];
        listOfColors = [];
        Card.counter = 1;
        Storage.clear();
    }

    static changeColor(event) {

        const id = event.target.id;
        if (id === 'color-not-important') {
    
            listOfCards.forEach((card) => {
                if (card.importance === 1) {
                    document.getElementById(`${card.id}`).style.backgroundColor = event.target.value;
                }
            })

            listOfColors[0] = event.target.value;
            
        } else if (id === 'color-important') {
    
            listOfCards.forEach((card) => {
                if (card.importance === 2) {
                    document.getElementById(`${card.id}`).style.backgroundColor = event.target.value;
                }
            })

            listOfColors[1] = event.target.value;
    
        } else if (id === 'color-urgent') {
    
            listOfCards.forEach((card) => {
                if (card.importance === 3) {
                    document.getElementById(`${card.id}`).style.backgroundColor = event.target.value;
                }
            })

            listOfColors[2] = event.target.value;
    
        }
        Storage.update();
    }

    static setColors() {
        listOfColors = Storage.getColors();
        colorPickerNotImportant.setAttribute('value', listOfColors[0]);
        colorPickerImportant.setAttribute('value', listOfColors[1]);
        colorPickerUrgent.setAttribute('value', listOfColors[2]);
    }
}



const form = document.querySelector('.new-card');
form.addEventListener('submit', UI.createCard);

const colorPickerNotImportant = document.getElementById('color-not-important')
const colorPickerImportant = document.getElementById('color-important')
const colorPickerUrgent = document.getElementById('color-urgent')
colorPickerNotImportant.addEventListener("input", UI.changeColor, false);
colorPickerImportant.addEventListener("input", UI.changeColor, false);
colorPickerUrgent.addEventListener("input", UI.changeColor, false);

let listOfCards;
let listOfColors;

const bin = document.getElementById('bin');
bin.addEventListener('click', UI.clearAll);

window.addEventListener('DOMContentLoaded', UI.init);

