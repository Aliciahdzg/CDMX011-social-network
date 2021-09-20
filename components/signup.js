import { onNavigate } from '../app.js';
import { ButtonGoogle } from './googlebutton.js';
import { spacebetween } from './spacebetween.js';
import { logo } from './logo.js';
import { signUp } from '../firebase.js';

export const Signup = () => {
  // se crean todos los elementos de DOM
  const signupView = document.createElement('section');
  const sectionChild = document.createElement('section');
  const signupForm = document.createElement('form');
  const inputMail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const displayPassword = document.createElement('div');
  const togglePassword = document.createElement('img');
  const buttonSignup = document.createElement('button');
  const loginButton = document.createElement('button');
  const spaceButtons = document.createElement('br');
  // Section signup que contiene todos los elementos de la vista general
  signupView.setAttribute('class', 'grid-father');
  // Section que contiene logo y form
  sectionChild.setAttribute('class', 'container');
  signupView.appendChild(logo());
  signupView.appendChild(sectionChild);
  signupForm.id = 'signup';
  sectionChild.appendChild(signupForm);
  // Input del email
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('class', 'form-elements');
  inputMail.setAttribute('placeholder', 'Correo');
  inputMail.setAttribute('name', 'email');
  inputMail.id = 'emailUser';
  signupForm.appendChild(inputMail);
  // A continuacion el input de password
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  inputPassword.className = 'input-password';
  inputPassword.setAttribute('name', 'password-user');
  inputPassword.id = 'passwordUser';
  inputPassword.autocomplete = 'on';
  displayPassword.setAttribute('class', 'form-elements');
  displayPassword.id = 'displayPassword';
  togglePassword.id = 'togglePassword';
  togglePassword.className = 'eye-img';
  togglePassword.src = 'images/eye-regular.jpeg';
  togglePassword.type = 'button';
  displayPassword.appendChild(inputPassword);
  displayPassword.appendChild(togglePassword);
  signupForm.appendChild(displayPassword);
  // listener de ocultar y mostrar contraseña
  togglePassword.addEventListener('click', (e) => {
    e.preventDefault();
    const inputType = document.getElementById('passwordUser');
    if (inputType.type === 'password') {
      inputType.type = 'text';
      togglePassword.src = 'images/eye-slash-regular.jpeg';
    } else {
      inputType.type = 'password';
      togglePassword.src = 'images/eye-regular.jpeg';
    }
  });
  // Tercer hijo del form enviar
  buttonSignup.setAttribute('type', 'submit');
  buttonSignup.setAttribute('class', 'signup-button');
  buttonSignup.id = 'submitBTN';
  buttonSignup.textContent = 'Regístrate';
  signupForm.appendChild(buttonSignup);
  // Esta es la parte del firebase
  buttonSignup.addEventListener('click', (e) => {
    e.preventDefault();

    const email = signupForm.querySelector('#emailUser').value;
    const password = signupForm.querySelector('#passwordUser').value;

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
