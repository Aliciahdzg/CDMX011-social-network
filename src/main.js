// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();
const form = document.querySelector('button[type=submit]');
form.addEventListener('click', (e) => {
  e.preventDefault();
  // const button = document.getElementById('submitBTN').value;
  const email = document.getElementById('emailUser').value;
  const password = document.getElementById('passwordUser').value;
  console.log(email, password);

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      console.log('esta es la promesa');
    });
});

/*const providerGoogle = document.querySelector('#registerGoogle');
providerGoogle.addEventListener('click', e => {
  e.preventDefault();
  const provider = firebase.auth.GoogleAuthProvider();
  auth.
  
})*/