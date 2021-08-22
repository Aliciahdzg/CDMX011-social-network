export const home = () =>{
    const htmlHome = `
    <section class="grid-father">
        <section class="container ">
            <h1 class="logo" id="logo-title">Plantagram</h1>
            <img src="logo.png " alt="plantita " class="image-size " id="logo-img">
            <img src="girls.jpg" alt="chicas " class="image-size" id="logo-img-land">
            <p class="welcome-text ">Bienvenid@ a la plataforma destinada a los amantes de plantas</p>
        </section>
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
    const containerHome = document.createElement('div')
    containerHome.innerHTML = htmlHome

    document.getElementById('').addEventListener

    return containerHome
} 