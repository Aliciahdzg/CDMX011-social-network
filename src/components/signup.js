export const signup = () => {
  const htmlSignup = `
  <head>
    <link rel="stylesheet" href="../style.css">
  </head>

    <section class="grid-father">
        <section class="container ">
                <form id="signup">
    
                    <input type="email " id="emailUser " class="form-elements " placeholder="Correo " name="Email " required />
    
                    <input type="password " id="passwordUser " class="form-elements " placeholder="Contraseña " name="password-user " required>
                    
                    <button type="submit " value="enviar" id="submitBTN " class="signup-button ">Regístrate</button>
                </form>
                <p class="hr-test "><span>ó</span></p>
                <button type="button " id="registerGoogle " class="signup-google button-google "> 
                 <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg "><div class="access-google">Accede con Google</div></button>
                <br>
                <button type="button " id="loginInRegister " class="login-in-register ">Inicia Sesion Aqui</p>
        </section>
    </section>
    `;
};
//const containerSignup = document.createElement('div');
//containerSignup.innerHTML = htmlSignup;
document.addEventListener('DOMContentLoaded', () => {
  const formSignUp = document.getElementById('signup').childNodes;
  console.log(formSignUp);
  formSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    // const button = document.getElementById('submitBTN').value;
    const email = document.getElementById('emailUser').value;
    const password = document.getElementById('passwordUser').value;
    console.log(email, password);

    // eslint-disable-next-line no-undef
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log('esta es la promesa');
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  });
});


//return containerSignup;