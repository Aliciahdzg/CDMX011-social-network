import { navigation } from './navigation.js';
import { Posts } from './CRUDposts.js';
import { modalPost } from './modalpost.js';

export const Feed = () => {
  const postView = document.createElement('section');
  const PostPublish = document.createElement('button');
  const PostPublishBox = document.createElement('div');
  postView.appendChild(navigation());
  PostPublishBox.className = 'post-publish-box';
  PostPublish.textContent = 'Publica tus ideas aqui';
  PostPublish.className = 'post-publish';
  PostPublish.addEventListener('click', () => {
    const modal = document.querySelector('#modalshow');
    modal.style.display = 'flex';
  });
  PostPublishBox.appendChild(PostPublish);
  postView.appendChild(PostPublishBox);
  postView.classList.add('background-feed');
  postView.appendChild(Posts());
  postView.insertBefore(modalPost(), PostPublishBox);
  return postView;
};
