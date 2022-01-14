import { View } from './View.js';

export class TaskView extends View {
  constructor(task) {
    super();
    this.template = `<div class='card' draggable='true' id='${task.id}'>
  <section class="card-header">
    <p class="card-text-header">
     Task #${task.id}
   </p>
   <img src="img/cancel.png" alt="remove task" class="remove-task" />
  </section>
  <section class="card-body">
    <p class="card-text" contenteditable="true">
      ${task.body}
    </p>
  </section>
</div>`;
  }
}