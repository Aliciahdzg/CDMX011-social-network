import { onNavigate } from "../app.js";

export function signoutbtn() {
  const signOutBtn = document.createElement('button');
  signOutBtn.setAttribute('type', 'button');
  signOutBtn.textContent = 'Cerrar Sesión';
  signOutBtn.classList.add('navbar-feed');
  signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      onNavigate('/');
    });
  });
  return signOutBtn;
};