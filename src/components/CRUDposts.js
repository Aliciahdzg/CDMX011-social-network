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

  window.addEventListener('DOMContentLoaded', () => {
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

        const allbuttonsEdDe = document.querySelectorAll('.btnEditDelete');
        for (let i = 0; i <= allbuttonsEdDe.length; i += 1) {
          if (currentUser.email === post.uid[0]) {
            //allbuttonsEdDe[i].style.width = '15rem';
          } else {
            //allbuttonsEdDe[i].style.border = '5px solid black';
          }

          //console.log(currentUser.email, post.uid[0]);
        }
        /*allbuttonsEdDe.forEach((section) => {
          if (section.className.includes('btnHide')) {
            if (currentUser.email === post.uid[0]) {
              allbuttonsEdDe.dataset.id;
            }
          }
        });*/
      });
      const likesBtn = document.querySelectorAll('.btnLikes');
      likesBtn.forEach((btn) => {
        const callingUser = user();
        btn.addEventListener('click', async(e) => {
          const id = e.target.dataset.id;
          const doc = await getPost(e.target.dataset.id);
          if (doc.data().likes.includes(callingUser.uid)) {
            return updatePost(id, {
              likes: firebase.firestore.FieldValue.arrayRemove(callingUser.uid),
            });
          }
          return updatePost(id, {
            likes: firebase.firestore.FieldValue.arrayUnion(callingUser.uid),
          });
        });
      });
      const publishBtn = document.querySelector('#publishPost');
      const modalBtn = document.querySelector('#form-post');
      modalBtn.addEventListener('submit', async(e) => {
        e.preventDefault();
        const closeModal = document.querySelector('#modalshow');
        closeModal.style.display = 'none';
        const description = document.getElementById('textPost');
        if (!editStatus) {
          await savePost(description.value);
        } else {
          await updatePost(idd, {
            description: description.value,
          });
          editStatus = false;
          publishBtn.innerText = 'Publicar';
          idd = '';
        }
        description.focus();
        modalBtn.reset();
      });

      const btnsDelete = document.querySelectorAll('.btnDelete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', async(e) => {
          const result = confirm('¿Quieres borrar este post?');
          if (result === true) {
            await deletePost(e.target.dataset.id);
          }
        });
      });
      /* async function showBtns(e) {
         const doc = await getPost(e.target.dataset.id);
         console.log(doc);
         if (currentUser.email === doc.uid[0]) {
           if (btnsDelete === 'btnHide') {
             document.queryselectorAll('.btnHide').setAttribute('class', 'btnShow');
           }
         }
       }*/
      const editModal = document.getElementById('modalshow');
      const btnsEdit = document.querySelectorAll('.btnEdit');
      btnsEdit.forEach((btn) => {
        btn.addEventListener('click', async(e) => {
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
  });

  return divPost;
}