import { onNavigate } from '../app.js';

export function redirectionregister() {
  const registerButton = document.createElement('button');
  registerButton.setAttribute('class', 'login-in-register');
  registerButton.setAttribute('type', 'button');
  registerButton.textContent = 'Registrate Aqui';
  registerButton.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/signup');
  });
  return registerButton;
}
