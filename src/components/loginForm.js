import { onNavigate } from '../app.js';
import { auth } from '../firebase.js';
import { Posts } from './CRUDposts.js';

export function LoginForm() {
  const loginForm = document.createElement('form');
  const inputMail = document.createElement('input');
  const displayPassword = document.createElement('div');
  const inputPassword = document.createElement('input');
  const showPassword = document.createElement('img');
  const hidePassword = document.createElement('img');
  const buttonLogin = document.createElement('button');

  // Section
  loginForm.id = 'login';
  // Primer hijo del form
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('class', 'form-elements');
  inputMail.setAttribute('placeholder', 'Correo');
  inputMail.setAttribute('name', 'email');
  inputMail.id = 'emailLogin';
  loginForm.appendChild(inputMail);
  // password
  inputPassword.setAttribute('type', 'password');
  displayPassword.setAttribute('class', 'form-elements');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.className = 'input-password';
  // Investigar por que el name es password-user OJO
  inputPassword.setAttribute('name', 'password-user');
  inputPassword.id = 'passwordLogin';
  inputPassword.autocomplete = 'on';
  showPassword.className = 'eye-img';
  showPassword.src = 'images/eye-regular.svg';
  showPassword.type = 'button';
  hidePassword.src = 'images/eye-slash-regular.svg';
  hidePassword.className = 'eye-img';
  hidePassword.type = 'button';
  hidePassword.id = 'hidePassword';
  displayPassword.appendChild(inputPassword);
  displayPassword.appendChild(showPassword);
  loginForm.appendChild(displayPassword);
  // listener de ocultar y mostrar contraseña
  showPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const inputType = document.getElementById('passwordLogin');
    if (inputType.type === 'password') {
      inputType.type = 'text';
      displayPassword.replaceChild(hidePassword, showPassword);
    }
  });
  hidePassword.addEventListener('click', (e) => {
    e.preventDefault();
    const inputType = document.getElementById('passwordLogin');
    if (inputType.type === 'text') {
      inputType.type = 'password';
      displayPassword.replaceChild(showPassword, hidePassword);
    }
  });

  // Tercer hijo del form enviar
  buttonLogin.setAttribute('type', 'submit');
  // buttonLogin.setAttribute('value', 'enviar');
  buttonLogin.setAttribute('class', 'signup-button');
  buttonLogin.id = 'submitLogin';
  buttonLogin.textContent = 'Inicia Sesión';
  loginForm.appendChild(buttonLogin);
  // firebase
  buttonLogin.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Posts();
        // const user = userCredential.user;
        onNavigate('/feed');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
  return loginForm;
}
