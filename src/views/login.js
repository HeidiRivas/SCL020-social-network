/*import {login} from '../firebase/auth.js'
import { navigate} from '../router/router.js'*/

import {next} from "../router/router.js"
const Login = () => {

const template = // html

`   <header class="hd">
<img src= "./img/logofon.png" alt="logo" class="logo1">
</header>
      <main class="login_view">
       <section class="login_card">
        
        <form id="login-form" class="login_form">
        <div class="login_input-row">
         <label for="email"> </label>
        <input class="email" id="email" type="text" placeholder ="Ingresa tu correo">
    </div>
    <div class="login__input-row">
    <label for="pass"></label>
    <input class="pass" id="pass" type="password" placeholder="Ingresa tu contraseña">
    </div>
    <div class="login_input-row login input row centered">
        <button class="btn_login_btn-primary" id="login">Ingresar</button>
    </div>
    <small id="error-msg"></small>
   </form>
  </section>
</main>
`
const container = document.createElement('div')
container.innerHTML = template;

const form = container.querySelector('#login-form')
form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const email = container.querySelector('#email').value
    const pass = container.querySelector('#pass').value
    const msg = container.querySelector('#error-msg')

    if(!email || !pass) return
})
let btn = container.querySelector(".btn_login_btn-primary");
    btn.addEventListener('click', (e)=>{
    next("/home")
})  
    return container
  
}


export default Login