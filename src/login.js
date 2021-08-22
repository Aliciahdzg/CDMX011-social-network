export const login = () => {
    const htmlLogin =  `
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

    const containerLogin = document.createElement('div')
    containerHome.innerHTML = htmlLogin

    document.getElementById('').addEventListener

    return containerLogin
}