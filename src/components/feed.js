import { onNavigate } from '../app.js';
import { navigation } from './navigation.js';
import { Posts } from './posts.js';

export const Feed = () => {
  const postView = document.createElement('section');
  postView.appendChild(navigation());
  const ulpost = document.createElement('ul');
  ulpost.id = 'posts';
  postView.appendChild(Posts());
  return postView;
};
/*const signupRoute = document.querySelector('#post');
signupRoute.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});*/