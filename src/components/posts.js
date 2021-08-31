export function Posts() {
  const ulpost = document.createElement('ul');
  ulpost.id = 'posts';
  ulpost.className = ('post-list');
  const setupPosts = (data) => {
    if (data.length) {
      let html = '';
      data.forEach((doc) => {
        const post = doc.data();
        const li = `
        <li class= "box-posts">
        <p class = "text-post" >${post.description}</p><li>
        `;
        html += li;
      });
      ulpost.innerHTML = html;
    } else {
      ulpost.innerHTML = '<p>ENTRA PARA VER POST ESTE ES EL QUE NO SALE</p>';
      console.log('no estas logueado');
    }
  };
  //  Eventos
  // eslint-disable-next-line no-undef
  auth.onAuthStateChanged((user) => {
    if (user) {
      // eslint-disable-next-line no-undef
      fs.collection('posts')
        .get()
        .then((snapshot) => {
          setupPosts(snapshot.docs);
        });
    } else {
      ulpost.innerHTML = '<p>ENTRA PARA VER POST</p>';
    }
  });
  return ulpost;
}
