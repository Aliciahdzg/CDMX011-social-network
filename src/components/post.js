import { onNavigate } from '../app.js';
import { navigation } from './navigation.js';

export const Post = () => {
  const postView = document.createElement('section');
  const paragraph = document.createElement('p');
  postView.appendChild(navigation());
  paragraph.textContent = '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  postView.appendChild(paragraph);
  return postView;
};
const signupRoute = document.querySelector('#post');
signupRoute.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});
