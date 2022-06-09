import {next} from "../router/router.js"
const Register = () => {

const template = // html
`   
<header class="hd">
    <img src= "./img/logofon.png" alt="logo" class="logo1">
    </header>
<main class="login_view">
    <section class="login_card">
     <div class="register">
        <h1 class="login_form">Registrate</h1>
        <form id="login-form" class="login_form input">
           <div class="login_input-row">
            <input id="email" type="text" placeholder ="Ingresa tu correo">
           </div>
           <div class="login__input-row">
            <input id="pass" type="password" placeholder="Ingresa tu contraseña">
           </div>
           <div class="login_input-row login input row centered">
            <button class="btn_login_btn-primary">Login</button>
           </div>
            <small id="error-msg"></small>
        </form>
     </div>
    </section>
</main>
`
/*const container = document.getElementById("login-page").innerHTML=template;*/
const container = document.createElement('div')
container.innerHTML = template;

/*const form = container.querySelector('#login-form')
form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const email = container.querySelector('#email').value
    const pass = container.querySelector('#pass').value
    const msg = container.querySelector('#error-msg')

    if(!email || !pass) return
})*/

    return container
  
}


    export default Register