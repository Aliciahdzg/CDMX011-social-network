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
      data.forEach((doc) => {
        const post = doc.data();
        post.id = doc.id;
        divPost.innerHTML += `
        <section class= "box-posts">
        <p class = "text-post" >${post.description}</p>
        <button class = "btnEdit" data-id ='${post.id}'> Editar </button>
        <button class = "btnDelete" data-id ='${post.id}'> Eliminar </button>
        </section>
        `;
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
          await deletePost(e.target.dataset.id);
        });
      });
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
