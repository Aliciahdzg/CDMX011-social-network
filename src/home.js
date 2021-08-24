import { onNavigate } from './app.js';
import { LoginForm } from './loginForm.js';

export const Home = () => {
  const homeView = document.createElement('section');
  const title = document.createElement('h1');
  const firstChild = document.createElement('section');
  const secondChild = document.createElement('section');
  const imgLogo = document.createElement('img');
  const imgLogoLand = document.createElement('img');
  const welcomeText = document.createElement('p');
  //Login
  const oFromDesign = document.createElement('p');
  const spanSpace = document.createElement('span');
  const googleButton = document.createElement('button');
  const googleImg = document.createElement('img');
  const buttonGoogleDiv = document.createElement('div');
  const registerButton = document.createElement('button');
  const spaceButtons = document.createElement('br');
  // Vista de home
  homeView.setAttribute('class', 'grid-father');
  // Primer section
  firstChild.setAttribute('class', 'container');
  // Segundo section
  secondChild.setAttribute('class', 'container');
  homeView.appendChild(firstChild);
  homeView.appendChild(secondChild);
  // Titulo del Logo Landscape
  title.textContent = 'Plantagram';
  title.setAttribute('class', 'logo');
  title.id = 'logo-title';
  firstChild.appendChild(title);
  // Imagen del portrait
  imgLogo.src = 'logo.png';
  imgLogo.alt = 'plantita';
  imgLogo.setAttribute('class', 'image-size');
  imgLogo.id = 'logo-img';
  firstChild.appendChild(imgLogo);
  // Imagen del Landscape
  imgLogoLand.src = 'girls.jpg';
  imgLogoLand.alt = 'chicas';
  imgLogoLand.setAttribute('class', 'image-size');
  imgLogoLand.id = 'logo-img-land';
  firstChild.appendChild(imgLogoLand);
  // Texto de bienvenida
  welcomeText.setAttribute('class', 'welcolme-text');
  welcomeText.textContent = 'Bienvenid@ a la plataforma destinada a los amantes de plantas';
  // Inicio de la segunda seccion
  secondChild.appendChild(LoginForm);
  // Insertar el "o" del diseño
  oFromDesign.setAttribute('class', 'hr-test');
  oFromDesign.appendChild(spanSpace);
  spanSpace.textContent = 'ó';
  secondChild.appendChild(oFromDesign);
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
  secondChild.appendChild(googleButton);
  // Este es el espacio entre botones
  secondChild.appendChild(spaceButtons);
  // Este es el boton de redireccion a registro
  registerButton.setAttribute('class', 'login-in-register');
  registerButton.setAttribute('type', 'button');
  registerButton.textContent = 'Registrate Aqui';
  secondChild.appendChild(registerButton);
  registerButton.addEventListener('click', () => {
    onNavigate('/signup');
  });
  return homeView;
};

const homeRoute = document.querySelector('#home');
homeRoute.addEventListener('click', () => {
  onNavigate('/');
});