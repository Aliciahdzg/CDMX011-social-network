import { onNavigate } from '../app.js';
import { LoginForm } from './loginForm.js';
import { ButtonGoogle } from './googlebutton.js';
import { spacebetween } from './spacebetween.js';
import { redirectionregister } from './redirectionregister.js';
import { logo } from './logo.js';

export const Home = () => {
  const homeView = document.createElement('section');
  const secondChild = document.createElement('section');
  const loginForm = document.createElement('form');
  const inputMail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const spaceButtons = document.createElement('br');
  // Vista de home
  homeView.setAttribute('class', 'grid-father');
  // Segundo section
  secondChild.setAttribute('class', 'container');
  homeView.appendChild(logo());
  homeView.appendChild(secondChild);
  // Inicio de la segunda seccion
  loginForm.id = 'login';
  secondChild.appendChild(LoginForm());
  // Primer hijo del form
  inputMail.setAttribute('type', 'email');
  inputMail.setAttribute('class', 'form-elements');
  inputMail.setAttribute('placeholder', 'Correo');
  inputMail.setAttribute('name', 'email');
  inputMail.id = 'emailLogin';
  loginForm.appendChild(inputMail);
  // Segundo hijo del form 
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('class', 'form-elements');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  // Investigar por que el name es password-user OJO
  inputPassword.setAttribute('name', 'password-user');
  inputPassword.id = 'passwordLogin';
  loginForm.appendChild(inputPassword);
  // Tercer hijo del form enviar
  buttonLogin.setAttribute('type', 'submit');
  // buttonLogin.setAttribute('value', 'enviar');
  buttonLogin.setAttribute('class', 'signup-button');
  buttonLogin.id = 'submitLogin';
  buttonLogin.textContent = 'Inicia Sesión';
  loginForm.appendChild(buttonLogin);
  // Insertar el "o" del diseño
  secondChild.appendChild(spacebetween());
  secondChild.appendChild(ButtonGoogle());
  // Este es el espacio entre botones
  secondChild.appendChild(spaceButtons);
  // Este es el boton de redireccion a registro
  secondChild.appendChild(redirectionregister());
  return homeView;
};

/*const homeRoute = document.querySelector('#home');
homeRoute.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/');
});*/