/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import {
  deletePost,
  onGetPosts,
  savePost,
  updatePost,
  getPost,
  user,
} from '../firebase.js';

export function Posts() {
  const divPost = document.createElement('div');
  divPost.id = 'posts';
  divPost.className = ('post-list');

  let editStatus = false;
  let idd = '';

  onGetPosts((data) => {
    divPost.innerHTML = '';
    const currentUser = user();
    const welcome = document.createElement('h1');
    welcome.textContent = `Bienvenid@ ${currentUser.email}`;
    welcome.className = 'welcome-user';
    divPost.appendChild(welcome);
    data.forEach((doc) => {
      const post = doc.data();
      const countLikes = post.likes;
      post.id = doc.id;
      if (currentUser.email === post.uid[0]) {
        divPost.innerHTML += `
        <section class= "box-posts">
         <p class='publish-by'>Publicado por: ${post.uid[0]}</p>
         <p class = "text-post" >${post.description}</p>
         <section class="button-container">
           <section class="button-container-left">
            <img src= "/images/heartLikes.png" type= "button" class="btnLikes btnEditDelete" data-id="${post.id}" > ${countLikes.length}
           </section>
           <section class="button-container-right allbuttons ">
            <img src= "/images/editarazul.jpeg" type= "button" class = "btnEdit btnEditDelete" data-id ='${post.id}'>
            <img src= "/images/boterojo.jpeg" type= "button" class = "btnDelete btnEditDelete" data-id ='${post.id}'>
           </section>
          </section>
        </section>
        `;
      } else {
        divPost.innerHTML += `
        <section class= "box-posts">
         <p class='publish-by'>Publicado por: ${post.uid[0]}</p>
         <p class = "text-post" >${post.description}</p>
         <section class="button-container">
           <section class="button-container-left">
            <img src= "/images/heartLikes.png" type= "button" class="btnLikes btnEditDelete" data-id="${post.id}" > ${countLikes.length}
           </section>
          </section>
        </section>
        `;
      }
    });
    const likesBtn = document.querySelectorAll('.btnLikes');
    likesBtn.forEach((btn) => {
      const callingUser = user();
      btn.addEventListener('click', async (e) => {
        const id = e.target.dataset.id;
        const doc = await getPost(e.target.dataset.id);
        if (doc.data().likes.includes(callingUser.email)) {
          return updatePost(id, {
            likes: firebase.firestore.FieldValue.arrayRemove(callingUser.email),
          });
        }
        return updatePost(id, {
          likes: firebase.firestore.FieldValue.arrayUnion(callingUser.email),
        });
      });
    });
    const publishBtn = document.querySelector('#publishPost');
    const modalBtn = document.querySelector('#form-post');
    modalBtn.addEventListener('submit', async (e) => {
      e.preventDefault();
      const closeModal = document.querySelector('#modalshow');
      closeModal.style.display = 'none';
      const description = document.getElementById('textPost');
      if (!editStatus) {
        if (description.value !== '') {
          await savePost(description.value);
        }
      } else {
        if (description.value !== '') {
          await updatePost(idd, {
            description: description.value,
          });
        }
        editStatus = false;
        publishBtn.innerText = 'Publicar';
        idd = '';
      }
      description.focus();
      modalBtn.reset();
    });

    const btnsDelete = document.querySelectorAll('.btnDelete');
    btnsDelete.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const result = confirm('¿Quieres borrar este post?');
        if (result === true) {
          await deletePost(e.target.dataset.id);
        }
      });
    });

    const editModal = document.getElementById('modalshow');
    const btnsEdit = document.querySelectorAll('.btnEdit');
    btnsEdit.forEach((btn) => {
      btn.addEventListener('click', async (e) => {
        const docEdit = await getPost(e.target.dataset.id);
        const postEdit = docEdit.data();

        editStatus = true;
        idd = docEdit.id;
        const textPost = document.querySelector('#textPost');
        editModal.style.display = 'flex';
        textPost.value = postEdit.description;
        publishBtn.innerText = 'Actualizar';
      });
    });
  });

  return divPost;
}
