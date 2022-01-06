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
    }

    static clear() {
        localStorage.removeItem('cards');
        localStorage.removeItem('counter');
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
                    ${body}
                </p>
            </section>
            `
        toDoColumn.appendChild(newCard);
        this.assignColor(card);

        const textarea = document.querySelector('#new-card-text');
        textarea.value = '';
    }

    static assignColor(newCard) {
        const card = document.getElementById(`${newCard.id}`)
        if (newCard.importance === 1) {
            card.style.backgroundColor = this.colorNotImportant;
        } else if (newCard.importance === 2) {
            card.style.backgroundColor = this.colorImportant;
        } else if (newCard.importance === 3) {
            card.style.backgroundColor = this.colorUrgent;
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
        dropzone.appendChild(draggableElement);
        event.dataTransfer.clearData();
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
        Card.counter = 1;
        Storage.clear();
    }

    static colorNotImportant = document.getElementById('color-not-important').value;
    static colorImportant = document.getElementById('color-important').value;
    static colorUrgent = document.getElementById('color-urgent').value;

    static changeColor(event) {

        const id = event.target.id;
        if (id === 'color-not-important') {
    
            listOfCards.forEach((card) => {
                if (card.importance === 1) {
                    document.getElementById(`${card.id}`).style.backgroundColor = event.target.value;
                }
            })
            
        } else if (id === 'color-important') {
    
            listOfCards.forEach((card) => {
                if (card.importance === 2) {
                    document.getElementById(`${card.id}`).style.backgroundColor = event.target.value;
                }
            })

            this.colorImportant = event.target.value;
    
        } else if (id === 'color-urgent') {
    
            listOfCards.forEach((card) => {
                if (card.importance === 3) {
                    document.getElementById(`${card.id}`).style.backgroundColor = event.target.value;
                }
            })

            this.colorUrgent = event.target.value;
    
        }
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

const bin = document.getElementById('bin');
bin.addEventListener('click', UI.clearAll);

window.addEventListener('DOMContentLoaded', UI.displayCards);

