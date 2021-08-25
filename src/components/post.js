import { onNavigate } from '../app.js';
import { navigation } from './navigation.js';

export const Post = () => {
  const postView = document.createElement('section');
  postView.appendChild(navigation());
  const lipost = document.createElement('li');
  const paragraph = document.createElement('p');
  lipost.className = 'posts';
  postView.appendChild(lipost);
  lipost.appendChild(paragraph);
  // Posts
  const postList = document.querySelector('.posts');
  // Logica de los post



  /*const setupPosts = data => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const post = doc.data();
        const li = `
        <li>
        <p>${post.description}</p><li>
        `;
        html += li;
      });
      postList.appendChild = html;
    } else {
      postList.innerHTML = '<p>ENTRA PARA VER POST</p>';
    }
  };*/
  //  Eventos
  auth.onAuthStateChanged(user => {
    if (user) {
      fs.collection('posts')
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
        });
    } else {
      console.log('salgo');
    }
  });

  return postView;
};
const signupRoute = document.querySelector('#post');
signupRoute.addEventListener('click', (e) => {
  e.preventDefault();
  onNavigate('/post');
});