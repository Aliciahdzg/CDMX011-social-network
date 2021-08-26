
export function Posts() {
  const ulpost = document.createElement('ul');
  ulpost.id = 'posts';
  const setupPosts = (data) => {
    if (data.length) {
      let html = '';
      data.forEach((doc) => {
        const post = doc.data();
        console.log(post.description);
        const li = `
        <li>
        <p>${post.description}</p><li>
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
