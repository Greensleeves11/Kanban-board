import { TaskVO } from '../model/TaskVO.js';
import { View } from './View.js';

export class TaskView extends View {
  constructor(task: TaskVO) {
    super();
    this.template = `<div class='card' draggable='true' id='${task.index}'>
  <section class="card-header">
    <p class="card-text-header">
     Task #${task.index}
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
