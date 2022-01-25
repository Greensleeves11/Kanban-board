import { View } from './View';

export class ControlPanelView extends View {
  constructor() {
    super();
    this.template = template;
  }
}

const template = `<form action="#" class="new-card">
<label for="new-card-text" hidden>Create new card</label>
<textarea name="" id="new-card-text" cols="20" rows="10"></textarea>
<div class="importance">
  <div>
    <input
      type="color"
      name="not-important-picker"
      id="c-not-important"
    />
  </div>
  <label for="not-important">Not important</label>
  <input
    type="radio"
    name="importance"
    id="not-important"
    value="1"
    checked
  />
</div>
<div class="importance">
  <div>
    <input
      type="color"
      name="important-picker"
      id="c-important"
    />
  </div>
  <label for="important">Important</label>
  <input type="radio" name="importance" id="important" value="2" />
</div>
<div class="importance">
  <div>
    <input type="color" name="urgent-picker" id="c-urgent" />
  </div>
  <label for="urgent">Urgent</label>
  <input type="radio" name="importance" id="urgent" value="3" />
</div>
<label for="btn-form" hidden>Form button</label>
<input type="submit" value="Create" class="btn" />
</form>`;
