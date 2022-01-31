import { TaskVO } from '../model/TaskVO';
import { View } from './View';

export class TaskView extends View {
  constructor(task: TaskVO) {
    super();
    this.template = `<div class='card' draggable='true' id='${task.index}'>
  <section class="card-header">
    <p class="card-text-header">
     Task #${task.index}
   </p>
   <img src="img/cancel.png" alt="remove task" class="remove-task" />
   <img src="img/information-button.png" alt="task info" class="task-info" />
   <span class="tooltip-text">Created by: ${task.createdBy}</span>
  </section>
  <section class="card-body">
    <p class="card-text" contenteditable="true">
      ${task.body}
    </p>
  </section>
</div>`;
  }
}
