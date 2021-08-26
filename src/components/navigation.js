import { signoutbtn } from './signoutbtn.js';

export function navigation() {
  const navbar = document.createElement('nav');
  const ul = document.createElement('ul');
  const lipost = document.createElement('li');
  const lisignout = document.createElement('li');
  const apost = document.createElement('a');
  // Aqui comienza la barra de navegacion
  // Redireccion a post
  //apost.href = '#';
  apost.id = 'postt';
  apost.textContent = 'Crear POST';
  lipost.appendChild(apost);
  ul.appendChild(lipost);
  // Boton de cerrar sesión
  lisignout.appendChild(signoutbtn());
  ul.appendChild(lisignout);
  navbar.appendChild(ul);
  return navbar;
}