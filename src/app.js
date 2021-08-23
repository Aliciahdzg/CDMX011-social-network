import { home } from './components/home.js';
import { signup } from './components/signup.js';
import { login } from './components/login.js';

const routes = {
  '/': home,
  '/login': login,
  '/signup': signup,
};

const rootDiv = document.querySelector('#root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
  window.history.pushState({},
    pathname,
    window.location.origin + pathname);
  // eliminar todos los nodos hijos de rootdiv

  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

const homeRoute = document.querySelector('#home');

/* function homeCharge() {
  return onNavigate('/');
} */

homeRoute.addEventListener('click', () => {
  onNavigate('/');
});
const loginRoute = document.querySelector('#login');
loginRoute.addEventListener('click', () => {
  onNavigate('/login');
});
const signupRoute = document.querySelector('#signup');
signupRoute.addEventListener('click', () => {
  onNavigate('/signup');
});