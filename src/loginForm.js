
export const LoginForm = () => {

    const loginForm = document.createElement('form');
    const inputMail = document.createElement('input');
    const inputPassword = document.createElement('input');
    const buttonLogin = document.createElement('button');
    
    // Section
    loginForm.id = 'login';
    // Primer hijo del form
    inputMail.setAttribute('type', 'email');
    inputMail.setAttribute('class', 'form-elements');
    inputMail.setAttribute('placeholder', 'Correo');
    inputMail.setAttribute('name', 'email');
    inputMail.id = 'emailLogin';
    loginForm.appendChild(inputMail);
    // Segundo hijo del form 
    inputPassword.setAttribute('type', 'password');
    inputPassword.setAttribute('class', 'form-elements');
    inputPassword.setAttribute('placeholder', 'Contraseña');
    // Investigar por que el name es password-user OJO
    inputPassword.setAttribute('name', 'password-user');
    inputPassword.id = 'passwordLogin';
    loginForm.appendChild(inputPassword);
    // Tercer hijo del form enviar
    buttonLogin.setAttribute('type', 'submit');
    // buttonLogin.setAttribute('value', 'enviar');
    buttonLogin.setAttribute('class', 'signup-button');
    buttonLogin.id = 'submitLogin';
    buttonLogin.textContent = 'Inicia Sesión';
    loginForm.appendChild(buttonLogin);
    // firebase
    buttonLogin.addEventListener('click', (e) => {
      e.preventDefault();
      // const button = document.getElementById('submitBTN').value;
      const email = document.getElementById('emailLogin').value;
      const password = document.getElementById('passwordLogin').value;
      console.log('estas dentro');
  
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
    // Insertar el "o" del diseño
/*     oFromDesign.setAttribute('class', 'hr-test');
    oFromDesign.appendChild(spanSpace);
    spanSpace.textContent = 'ó';
    sectionChild.appendChild(oFromDesign); */
    // Boton de google
   //googleButton.setAttribute('type', 'button');
    //googleButton.setAttribute('class', 'signup-google button-google');
    // googleButton.setAttribute('class', 'button-google');
    //googleButton.id = 'registerGoogle';
    // Imagen del logo de google
 /*    googleImg.src = 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg ';
    googleButton.appendChild(googleImg);
    buttonGoogleDiv.setAttribute('class', 'access-google');
    buttonGoogleDiv.textContent = 'Accede con Google';
    googleButton.appendChild(buttonGoogleDiv);
    sectionChild.appendChild(googleButton); */
    // Este es el espacio entre botones
   // sectionChild.appendChild(spaceButtons);
    // Este es el boton de redireccion a registro
/*     registerButton.setAttribute('class', 'login-in-register');
    registerButton.setAttribute('type', 'button');
    registerButton.textContent = 'Registrate Aqui';
    sectionChild.appendChild(registerButton);
    registerButton.addEventListener('click', () => {
      onNavigate('/signup');
    }); */
    return loginForm;
  };