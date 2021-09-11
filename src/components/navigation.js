import { signoutbtn } from './signoutbtn.js';

export function navigation() {
  const navbar = document.createElement('nav');
  const logonav = document.createElement('h1');
  // Aqui comienza la barra de navegacion
  logonav.classList.add('logo-navbar');
  logonav.textContent = 'Plantagram';
  navbar.appendChild(logonav);
  // Boton de cerrar sesión
  navbar.appendChild(signoutbtn());
  return navbar;
}
