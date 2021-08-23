export const login = () => {
  const htmlLogin = `
  <head>
    <link rel="stylesheet" href="../style.css">
  </head>
  
    <section class="grid-father ">
        <section class="container ">
            <form id="login ">
         
                <input type="email " id="emailLogin " class="form-elements " placeholder="Correo " name="Email " required />
    
                <input type="password " id="passwordLogin " class="form-elements " placeholder="Contraseña " name="password-user " required>
    
            <button type="submit " value="enviar " id="submitLogin " class="signup-button ">Inicia Sesión</button>
            
            </form>
            <p class="hr-test "><span>ó</span></p>
            <button type="button " id="registerGoogle " class="signup-google button-google "> 
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg "><div class="access-google">Accede con Google</div></button>
             <br>
             <button type="button " id="#" class="login-in-register ">Registrate Aqui</p>
        </section> 
    </section>
    `;

  const containerLogin = document.createElement('div');
  containerLogin.innerHTML = htmlLogin;

  const formSignIn = document.querySelector('#submitLogin');
  formSignIn.addEventListener('click', (e) => {
    e.preventDefault();
    // const button = document.getElementById('submitBTN').value;
    const email = document.getElementById('emailLogin').value;
    const password = document.getElementById('passwordLogin').value;
    console.log(email, password);

    // eslint-disable-next-line no-undef
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('ya iniciaste sesion');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });

  return containerLogin;
};