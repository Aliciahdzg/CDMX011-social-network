import { onNavigate } from '../app.js';
import { LoginForm } from './loginForm.js';
import { ButtonGoogle } from './googlebutton.js';
import { spacebetween } from './spacebetween.js';
import { redirectionregister } from './redirectionregister.js';
import { logo } from './logo.js';


export const Login = () => {
  const loginView = document.createElement('section');
  const sectionChild = document.createElement('section');
  const spaceButtons = document.createElement('br');
  // Vista de login
  loginView.setAttribute('class', 'grid-father');
  // Section
  sectionChild.setAttribute('class', 'container');
  loginView.appendChild(logo());
  loginView.appendChild(sectionChild);
  // import del loginForm
  sectionChild.appendChild(LoginForm());
  sectionChild.appendChild(spacebetween());
  sectionChild.appendChild(ButtonGoogle());
  // Este es el espacio entre botones
  sectionChild.appendChild(spaceButtons);
  // Este es el boton de redireccion a registro
  sectionChild.appendChild(redirectionregister());
  return loginView;
};

/* const loginRoute = document.querySelector('#login');
loginRoute.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/login');
}); */
