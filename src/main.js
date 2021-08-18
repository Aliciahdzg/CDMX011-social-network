// Este es el punto de entrada de tu aplicacion
// import { myFunction } from './lib/index.js';
// myFunction();
const formSignUp = document.querySelector('button[type=submit]');
formSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    // const button = document.getElementById('submitBTN').value;
    const email = document.getElementById('emailUser').value;
    const password = document.getElementById('passwordUser').value;
    console.log(email, password);

    auth
        .createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log('esta es la promesa');
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

const formSignIn = document.querySelector('#submitLogin');
formSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    // const button = document.getElementById('submitBTN').value;
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    console.log(email, password);

    auth
        .signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            console.log('ya iniciaste sesion');
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

 

/*const providerGoogle = document.querySelector('#registerGoogle');
providerGoogle.addEventListener('click', e => {
  e.preventDefault();
  const provider = firebase.auth.GoogleAuthProvider();
  auth.
  
})*/