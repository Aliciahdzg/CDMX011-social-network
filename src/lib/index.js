// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

const database = firebase.database();

function save() {
  const description = document.getElementById('textPost').value;
  database.collection('posts').doc().set({
    description: description
  });
  console.log(description);
}
//boton de publicar
const publishPost = document.getElementById('publishPost');
publishPost.addEventListener('click', save());

// let name = document.getElementById('name').value;
// let email = document.getElementById('emailUser').value;
// let password = document.getElementById('passwordUser').value;
