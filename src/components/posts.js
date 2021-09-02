export function Posts() {
  const ulpost = document.createElement('ul');
  ulpost.id = 'posts';
  ulpost.className = ('post-list');
  const deletePost = (id) => {
    fs.collection('posts').doc(id).delete();
  };
  const editPost = (id) => {
    fs.collection('posts').doc(id).get();
  };
  const getPosts = (callbaack) => {
    fs.collection('posts').onSnapshot(callbaack);
  };
  window.addEventListener('DOMContentLoaded', async() => {
    getPosts((data) => {
      ulpost.innerHTML = '';
      data.forEach((doc) => {
        const post = doc.data();
        post.id = doc.id;
        ulpost.innerHTML += `
        <li class= "box-posts">
        <p class = "text-post" >${post.description}</p>
        <button class = "btnEdit" data-id ='${post.id}'> Editar </button>
        <button class = "btnDelete" data-id ='${post.id}'> Eliminar </button>
        <li>
        `;
        const btnsDelete = document.querySelectorAll('.btnDelete');
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', async(e) => {
            await deletePost(e.target.dataset.id);
            console.log('este es el boton');
          });
        });
        /* const btnsEdit = document.createElement.querySelectorAll('.btnEdit');
         btnsEdit.forEach((button) => {
           button.addEventListener('click', async(event) => {
             await editPost(event.target.dataset.id);
             const formPost = document.getElementById('formPost');
             const textPost = document.getElementById('textPost');
             // primero abrir el modal
             formPost[textPost].value = doc.data().description;
             console.log(formPost[textPost].value = doc.data().description);
           });
         });*/
      });
    });
  });
  //  Eventos
  // eslint-disable-next-line no-undef
  auth.onAuthStateChanged((user) => {
    if (user) {
      // eslint-disable-next-line no-undef
      fs.collection('posts')
        .get()
        .then((snapshot) => {
          getPosts(snapshot.docs);
        });
    } else {
      ulpost.innerHTML = '<p>ENTRA PARA VER POST</p>';
    }
  });
  return ulpost;
}