export function Posts() {
  const ulpost = document.createElement('ul');
  ulpost.id = 'posts';
  ulpost.className = ('post-list');
  const setupPosts = (data) => {
    if (data.length) {
      let html = '';
      data.forEach((doc) => {
        const post = doc.data();
        console.log(post.description);
        const li = `
        <li class= "box-posts">
        <p class = "text-post" >${post.description}</p><li>
        `;
        html += li;
      });
      console.log(html);
      ulpost.innerHTML = html;
    } else {
      ulpost.innerHTML = '<p>ENTRA PARA VER POST</p>';
    }
  };
  //  Eventos
  auth.onAuthStateChanged((user) => {
    if (user) {
      console.log('ESTAS DENTRO')
      fs.collection('posts')
        .get()
        .then((snapshot) => {
          console.log(snapshot);
          setupPosts(snapshot.docs);
        });
    } else {
      console.log('salgo');
    }
  });
  return ulpost;
}
