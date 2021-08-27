import { onNavigate } from '../app.js';
import { navigation } from './navigation.js';
import { Posts } from './posts.js';

export const Feed = () => {
  const postView = document.createElement('section');
  const PostPublish = document.createElement('input');
  const PostPublishBox = document.createElement('div');
  postView.appendChild(navigation());
  PostPublishBox.className = 'post-publish-box';
  PostPublish.placeholder = 'Publica tus ideas aqui';
  PostPublish.className = 'post-publish';
  PostPublishBox.appendChild(PostPublish);
  postView.appendChild(PostPublishBox);
  postView.classList.add('background-feed');
  const ulpost = document.createElement('ul');
  ulpost.id = 'posts';
  postView.appendChild(Posts());
  return postView;
};
/* const signupRoute = document.querySelector('#post');
signupRoute.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
}); */
