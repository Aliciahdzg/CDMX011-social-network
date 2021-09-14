import { onNavigate } from '../app.js';
import { ButtonGoogle } from './googlebutton.js';
import { spacebetween } from './spacebetween.js';
import { logo } from './logo.js';
import { signUp } from '../firebase.js';

export const Signup = () => {
  const signupView = document.createElement('section');
  const sectionChild = document.createElement('section');
  const signupForm = document.createElement('form');
  const inputMail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const displayPassword = document.createElement('div');
  const showPassword = document.createElement('img');
  const hidePassword = document.createElement('img');
  const buttonSignup = document.createElement('button');
  const loginButton = document.createElement('button');
  const spaceButtons = document.createElement('br');
  // Vista de login
  signupView.setAttribute('class', 'grid-father');
  // Section
  sectionChild.setAttribute('class', 'container');
  signupView.appendChild(logo());
  signupView.appendChild(sectionChild);
  signupForm.id = 'signup';
  sectionChild.appendChild(signupForm);
  // Primer hijo del form
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('class', 'form-elements');
  inputMail.setAttribute('placeholder', 'Correo');
  inputMail.setAttribute('name', 'email');
  inputMail.id = 'emailUser';
  signupForm.appendChild(inputMail);
  // Segundo hijo del form
  inputPassword.setAttribute('type', 'password');
  displayPassword.setAttribute('class', 'form-elements');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.className = 'input-password';
  inputPassword.setAttribute('name', 'password-user');
  inputPassword.id = 'passwordUser';
  inputPassword.autocomplete = 'on';
  showPassword.className = 'eye-img';
  showPassword.src = 'images/eye-regular.svg';
  showPassword.type = 'button';
  hidePassword.src = 'images/eye-slash-regular.svg';
  hidePassword.className = 'eye-img';
  hidePassword.type = 'button';
  displayPassword.appendChild(inputPassword);
  displayPassword.appendChild(showPassword);
  signupForm.appendChild(displayPassword);
  // listener de ocultar y mostrar contraseña
  showPassword.addEventListener('click', (e) => {
    e.preventDefault();
    const inputType = document.getElementById('passwordUser');
    if (inputType.type === 'password') {
      inputType.type = 'text';
      displayPassword.replaceChild(hidePassword, showPassword);
    }
  });
  hidePassword.addEventListener('click', (e) => {
    e.preventDefault();
    const inputType = document.getElementById('passwordUser');
    if (inputType.type === 'text') {
      inputType.type = 'password';
      displayPassword.replaceChild(showPassword, hidePassword);
    }
  });
  // Tercer hijo del form enviar
  buttonSignup.setAttribute('type', 'submit');
  // buttonSignup.setAttribute('value', 'enviar');
  buttonSignup.setAttribute('class', 'signup-button');
  buttonSignup.id = 'submitBTN';
  buttonSignup.textContent = 'Regístrate';
  signupForm.appendChild(buttonSignup);
  // Esta es la parte del firebase
  buttonSignup.addEventListener('click', (e) => {
    e.preventDefault();
    // const button = document.getElementById('submitBTN').value;
    const email = document.getElementById('emailUser').value;
    const password = document.getElementById('passwordUser').value;

    signUp(email, password)
      .then(() => {
        alert('usuario registrado');
        onNavigate('/feed');
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
  sectionChild.appendChild(spacebetween());
  sectionChild.appendChild(ButtonGoogle());
  // Este es el espacio entre botones
  sectionChild.appendChild(spaceButtons);
  // Este es el boton de redireccion a login
  loginButton.setAttribute('class', 'login-in-register');
  loginButton.setAttribute('type', 'button');
  loginButton.textContent = 'Inicia Sesion Aquí';
  sectionChild.appendChild(loginButton);
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });
  return signupView;
};
