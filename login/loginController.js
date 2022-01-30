const linkCreateAccount = document.querySelector('#link-create-account');
const linkLogin = document.querySelector('#link-login');

linkCreateAccount.addEventListener('click', () => {
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.classList.toggle('form-hidden');
  });
});

linkLogin.addEventListener('click', () => {
  const forms = document.querySelectorAll('.form');
  forms.forEach(form => {
    form.classList.toggle('form-hidden');
  });
});

function validateCreateAccountFormUsername() {
  const errors = document.querySelectorAll('.form-input-error');
  if (errors) {
    errors.forEach(error => {
      error.remove();
    });
  }
  const username = document.forms['create-account']['username'].value;
  if (!username) {
    document
      .querySelector('#create-account-username')
      .insertAdjacentHTML(
        'afterend',
        '<div class="form-input-error">Please enter the username</div>'
      );
  } else if (username.length < 3) {
    document
      .querySelector('#create-account-username')
      .insertAdjacentHTML(
        'afterend',
        '<div class="form-input-error">Username must contain at least 3 characters</div>'
      );
  } else if (username.indexOf(' ') !== -1) {
    document
      .querySelector('#create-account-username')
      .insertAdjacentHTML(
        'afterend',
        '<div class="form-input-error">Username cannot contain spaces</div>'
      );
  }
}

function validateCreateAccountFormPassword() {
  const password = document.forms['create-account']['password'].value;
  if (!password) {
    document
      .querySelector('#create-account-password')
      .insertAdjacentHTML(
        'afterend',
        '<div class="form-input-error">Please enter the password</div>'
      );
  } else if (password.length < 6) {
    document
      .querySelector('#create-account-password')
      .insertAdjacentHTML(
        'afterend',
        '<div class="form-input-error">Password must contain at least 6 characters</div>'
      );
  } else if (password.indexOf(' ') !== -1) {
    document
      .querySelector('#create-account-password')
      .insertAdjacentHTML(
        'afterend',
        '<div class="form-input-error">Password cannot contain spaces</div>'
      );
  }
}

const forms = document.querySelectorAll('.form');
const createAccountForm = forms[1];
createAccountForm.addEventListener('submit', e => {
  e.preventDefault();
  validateCreateAccountFormUsername();
  validateCreateAccountFormPassword();
});

function validateLoginForm() {
  const error = document.querySelector('.form-message-error');
  if (error) {
    error.remove();
  }
  const header = document.querySelector('.form-title');
  header.insertAdjacentHTML(
    'afterend',
    `<div class="form-message-error">
  Wrong username and password combination
</div>`
  );
}

const loginForm = forms[0];
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  validateLoginForm();
});
