import { onNavigate } from '../app.js';
import { ButtonGoogle } from './googlebutton.js';
import { spacebetween } from './spacebetween.js';
import { logo } from './logo.js';

export const Signup = () => {
  const signupView = document.createElement('section');
  const sectionChild = document.createElement('section');
  const signupForm = document.createElement('form');
  const inputMail = document.createElement('input');
  const inputPassword = document.createElement('input');
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
  inputPassword.setAttribute('class', 'form-elements');
  inputPassword.setAttribute('placeholder', 'Contraseña');
  // Investigar por que el name es password-user OJO
  inputPassword.setAttribute('name', 'password-user');
  inputPassword.id = 'passwordUser';
  signupForm.appendChild(inputPassword);
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
    console.log('ya te registraste');
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('esta es la promesa');
      })
      .catch((error) => {
        // const errorCode = error.code;
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
    onNavigate('/login');
  });
  return signupView;
};

/*const signupRoute = document.querySelector('#signup');
signupRoute.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/signup');
});*/