import { onNavigate } from './app.js';

export const Signup = () => {
  const signupView = document.createElement('section');
  const sectionChild = document.createElement('section');
  const signupForm = document.createElement('form');
  const inputMail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonSignup = document.createElement('button');
  const oFromDesign = document.createElement('p');
  const spanSpace = document.createElement('span');
  const googleButton = document.createElement('button');
  const googleImg = document.createElement('img');
  const buttonGoogleDiv = document.createElement('div');
  const loginButton = document.createElement('button');
  const spaceButtons = document.createElement('br');
  // Vista de login
  signupView.setAttribute('class', 'grid-father');
  // Section
  sectionChild.setAttribute('class', 'container');
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
  // Insertar el "o" del diseño
  oFromDesign.setAttribute('class', 'hr-test');
  oFromDesign.appendChild(spanSpace);
  spanSpace.textContent = 'ó';
  sectionChild.appendChild(oFromDesign);
  // Boton de google
  googleButton.setAttribute('type', 'button');
  googleButton.setAttribute('class', 'signup-google button-google');
  // googleButton.setAttribute('class', 'button-google');
  googleButton.id = 'registerGoogle';
  // Imagen del logo de google
  googleImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg ';
  googleButton.appendChild(googleImg);
  buttonGoogleDiv.setAttribute('class', 'access-google');
  buttonGoogleDiv.textContent = 'Accede con Google';
  googleButton.appendChild(buttonGoogleDiv);
  sectionChild.appendChild(googleButton);
  // Este es el espacio entre botones
  sectionChild.appendChild(spaceButtons);
  // Este es el boton de redireccion a login
  loginButton.setAttribute('class', 'login-in-register');
  loginButton.setAttribute('type', 'button');
  loginButton.textContent = 'Inicia Sesion Aquí';
  sectionChild.appendChild(loginButton);
  loginButton.addEventListener('click', () => {
    onNavigate('/login');
  });
  return signupView;
};

const signupRoute = document.querySelector('#signup');
signupRoute.addEventListener('click', () => {
  onNavigate('/signup');
});
