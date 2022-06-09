import {next} from "../router/router.js"
const Register = () => {

const template = // html
`   
<header class="hd">
    <img src= "./img/logofon.png" alt="logo" class="logo1">
    </header>
<main class="register_view">
    <section class="login_card">
     <div class="register">
        <h1 class="register_form">Regístrate</h1>
        <form id="register-form" class="register_form">
           <div class="register_input-row">
            <input id="email_formu" type="text" placeholder ="Ingresa tu nombre">
           </div>
           <div class="register__input-row">
           <input id="email_formu" type="text" placeholder ="Ingresa tu usuario">
          </div>
           <div class="register___input-row">
            <input id="pass_formu" type="text" placeholder="Ingresa tu correo">
           </div>
           <div class="register____input-row">
            <input id="pass_formu" type="password" placeholder="Ingresa tu password ">
           </div>
           <div class="register_____input-row">
           <input id="pass_formu" type="password" placeholder="Re-ingresa tu password">
          </div>
           <div class="btn2">
            <button class="btn_register">Registrar</button>
           </div>
           <section class="checkbox"><input type="checkbox">
           <h5>He leído y acepto los términos y condiciones de uso</h5>
           </section>
            <small id="error-msg"></small>
        </form>
     </div>
    </section>
</main>
`
/*const container = document.getElementById("login-page").innerHTML=template;*/
const container = document.createElement('div')
container.innerHTML = template;

// const form = container.querySelector('#register-form')
// form.addEventListener('submit', (e)=> {
//     e.preventDefault()

//     const email = container.querySelector('#email').value
//     const pass = container.querySelector('#pass').value
//     const msg = container.querySelector('#error-msg')

//     if(!email || !pass) return
// })

    return container
  
}


    export default Register