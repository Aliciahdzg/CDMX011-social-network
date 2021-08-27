import { navigation } from './navigation.js';
import { Posts } from './posts.js';

export const Feed = () => {
  const postView = document.createElement('section');
  const PostPublish = document.createElement('button');
  const PostPublishBox = document.createElement('div');
  postView.appendChild(navigation());
  PostPublishBox.className = 'post-publish-box';
  PostPublish.textContent = 'Publica tus ideas aqui';
  PostPublish.className = 'post-publish';
  PostPublishBox.appendChild(PostPublish);
  postView.appendChild(PostPublishBox);
  postView.classList.add('background-feed');
  const ulpost = document.createElement('ul');
  ulpost.id = 'posts';
  postView.appendChild(Posts());
  return postView;
};