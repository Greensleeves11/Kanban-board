import { View } from './View.js';

export class TaskView extends View {
  constructor(task) {
    super();
    this.template = `<div class='card' draggable='true' id='${task.id}'>
  <section class="card-header">
    <p class="card-text-header">
     Task #${task.id}
   </p>
  </section>
  <section class="card-body">
    <p class="card-text" contenteditable="true">
      ${task.text}
    </p>
  </section>
</div>`;
  }
}
