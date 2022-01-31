import { View } from './View';

export class FormView extends View {
  constructor() {
    super();
    this.template = `<div class="form-container">
    <form class="form" id="login" name="login">
      <h1 class="form-title">Kanban board</h1>

      <div class="form-input-group">
        <input
          type="text"
          name="username"
          class="form-input"
          placeholder="Username"
          autofocus
          id="login-username"
        />
        <input
          type="password"
          name="password"
          class="form-input"
          placeholder="Password"
          id="login-password"
        />
      </div>
      <button class="form-button" type="submit" id="login-btn">
        Sign in
      </button>
      <p class="form-text">
        <a href="#login" class="form-link" id="link-create-account"
          >Create account</a
        >
      </p>
    </form>
    <form
      class="form form-hidden"
      id="create-account"
      name="create-account"
    >
      <h1 class="form-title">Create account</h1>
      <!-- <div class="form-message form-message-error">
        Enter username and password
      </div> -->
      <div class="form-input-group">
        <input
          type="text"
          name="username"
          class="form-input"
          placeholder="Username"
          id="create-account-username"
        />
        <input
          type="password"
          name="password"
          class="form-input"
          placeholder="Password"
          id="create-account-password"
        />
      </div>
      <button class="form-button" type="submit" id="create-account-btn">
        Sign up
      </button>
      <p class="form-text">
        <a href="#login" class="form-link" id="link-login"
          >I already have an account</a
        >
      </p>
    </form>
  </div>`;
  }
}
