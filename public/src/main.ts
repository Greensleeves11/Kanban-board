import '../style.css';
import '../login.css';
import '../img/cancel.png';
import { Controller } from './Controller';
import { FormController } from './FormController';

const root = document.getElementById('root');

let currentPath = window.location.hash;

if (currentPath === '') {
  root!.innerHTML = 'You are on home page';
} else if (currentPath === '#login') {
  var formController = new FormController();
  formController.init();
} else if (currentPath === '#board') {
  var controller = new Controller();
  controller.init();
}

export { controller };
