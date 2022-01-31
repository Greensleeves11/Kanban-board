import { Model } from './model/Model';
import { FormView } from './view/FormView';
import SHA256 from 'crypto-js/sha256';

export class FormController {
  root: HTMLElement | null;
  view: FormView | undefined;
  model: Model;
  constructor() {
    this.model = new Model();
    this.root = document.getElementById('root');
  }

  init = () => {
    if (this.root) {
      this.view = new FormView();
      this.view.render(this.root, 'beforeend');
      this.addEventListeners();
    }
  };

  createUser = (formUsername: string, formPassword: string) => {
    const user = {
      username: formUsername,
      password: formPassword,
    };
    this.model.userService.add(user);
  };

  addEventListeners = () => {
    this.addLinkCreateAccountListener();
    this.addLinkLoginListener();
    this.addCreateAccountFormListener();
    this.addLoginFormListener();
  };

  addLinkCreateAccountListener = () => {
    const linkCreateAccount = document.querySelector('#link-create-account');
    if (linkCreateAccount) {
      linkCreateAccount.addEventListener('click', () => {
        const forms = document.querySelectorAll('.form');
        forms.forEach(form => {
          form.classList.toggle('form-hidden');
        });
      });
    }
  };

  addLinkLoginListener = () => {
    const linkLogin = document.querySelector('#link-login');
    if (linkLogin) {
      linkLogin.addEventListener('click', () => {
        const forms = document.querySelectorAll('.form');
        forms.forEach(form => {
          form.classList.toggle('form-hidden');
        });
      });
    }
  };

  addCreateAccountFormListener = () => {
    const forms = document.querySelectorAll('.form');
    const createAccountForm = forms[1];
    createAccountForm.addEventListener('submit', async e => {
      e.preventDefault();

      const message = document.querySelector('.form-message-success');
      if (message) {
        message.remove();
      }

      const data = await this.model.userService.get();

      const username = this.validateCreateAccountFormUsername(data);
      const password = this.validateCreateAccountFormPassword();
      if (username && password) {
        this.createUser(username, password);

        const header = document.querySelectorAll('.form-title')[1];
        if (header) {
          header.insertAdjacentHTML(
            'afterend',
            `<div class="form-message-success">
              Account successfully created
            </div>`
          );
        }

        document.querySelector('#create-account-username')!.innerHTML = '';
        document.querySelector('#create-account-password')!.innerHTML = '';
      }
    });
  };

  signIn = async (e: Event) => {
    e.preventDefault();

    const data = await this.model.userService.get();

    const userValidated = this.validateLoginForm(data);
    if (userValidated) {
      window.location.hash = '#board';
      sessionStorage.setItem('loggedUser', userValidated);
      location.reload();
    }
  };

  addLoginFormListener = () => {
    const forms = document.querySelectorAll('.form');
    const loginForm = forms[0];
    loginForm.addEventListener('submit', this.signIn);
  };

  validateCreateAccountFormUsername = (data: any[]) => {
    const errors = document.querySelectorAll('.form-input-error');
    if (errors) {
      errors.forEach(error => {
        error.remove();
      });
    }
    const usernameInput = document.querySelector('#create-account-username');
    const username = (
      document.getElementById('create-account-username') as HTMLInputElement
    ).value;
    if (usernameInput) {
      if (!username) {
        usernameInput.insertAdjacentHTML(
          'afterend',
          '<div class="form-input-error">Please enter the username</div>'
        );
        return false;
      } else if (username.length < 3) {
        usernameInput.insertAdjacentHTML(
          'afterend',
          '<div class="form-input-error">Username must contain at least 3 characters</div>'
        );
        return false;
      } else if (username.indexOf(' ') !== -1) {
        usernameInput.insertAdjacentHTML(
          'afterend',
          '<div class="form-input-error">Username cannot contain spaces</div>'
        );
        return false;
      } else if (username) {
        var usernameExists;
        data.forEach(user => {
          if (user.username === username) {
            usernameInput.insertAdjacentHTML(
              'afterend',
              '<div class="form-input-error">User with this name already exists</div>'
            );
            usernameExists = true;
          }
        });
      }
    }
    if (usernameExists) {
      return false;
    } else {
      return username;
    }
  };

  validateCreateAccountFormPassword = () => {
    const password = (
      document.getElementById('create-account-password') as HTMLInputElement
    ).value;
    const passwordInput = document.querySelector('#create-account-password');
    if (passwordInput) {
      if (!password) {
        passwordInput.insertAdjacentHTML(
          'afterend',
          '<div class="form-input-error">Please enter the password</div>'
        );
        return false;
      } else if (password.length < 6) {
        passwordInput.insertAdjacentHTML(
          'afterend',
          '<div class="form-input-error">Password must contain at least 6 characters</div>'
        );
        return false;
      } else if (password.indexOf(' ') !== -1) {
        passwordInput.insertAdjacentHTML(
          'afterend',
          '<div class="form-input-error">Password cannot contain spaces</div>'
        );
        return false;
      } else {
        return password;
      }
    }
    return false;
  };

  validateLoginForm = (data: any[]) => {
    const error = document.querySelector('.form-message-error');
    if (error) {
      error.remove();
    }

    let usernameValidated = false;
    let passwordValidated = false;

    const usernameInput = document.querySelector('#login-username');
    const usernameV = (
      document.getElementById('login-username') as HTMLInputElement
    ).value;
    if (usernameInput) {
      if (usernameV) {
        data.forEach(user => {
          if (usernameV === user.username) {
            usernameValidated = true;
          }
        });
      }

      const usernameInput = document.querySelector('#login-password');
      const passwordV = (
        document.getElementById('login-password') as HTMLInputElement
      ).value;
      if (usernameInput) {
        if (passwordV) {
          data.forEach(user => {
            if (JSON.stringify(SHA256(passwordV).words) === user.password) {
              passwordValidated = true;
            }
          });
        }
      }
      if (usernameValidated && passwordValidated) {
        return usernameV;
      } else {
        const header = document.querySelector('.form-title');
        if (header) {
          header.insertAdjacentHTML(
            'afterend',
            `<div class="form-message-error">
      Wrong username and password combination
    </div>`
          );
        }
      }
    }
    return false;
  };
}
