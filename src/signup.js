export const signup = () => {
    const html  = `
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
    const container = document.createElement('div')
    container.innerHTML = html

    document.getElementById('').addEventListener

    return container
    
}
const buttonRegister = () => {
    const button = document.createElement('button');
    button.classList.add('signup-button');
    // button.setAttribute('type', 'submit');
    // button.setAttribute('id','submitBTN');
    // button.setAttribute('value','enviar');
    button.textContent = 'Aqui estoy';
    const form = document.getElementById('signup');

form.appendChild(button);
}
