import { onNavigate } from '../app.js';

export function signoutbtn() {
  const signOutBtn = document.createElement('img');
  signOutBtn.setAttribute('type', 'button');
  signOutBtn.textContent = 'Cerrar Sesión';
  signOutBtn.src = 'images/outicon.jpeg';
  signOutBtn.classList.add('sign-out-button');
  signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
      onNavigate('/');
    });
  });
  return signOutBtn;
};