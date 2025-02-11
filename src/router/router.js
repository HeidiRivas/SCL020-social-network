/*import { navGuard} from './firebase/auth.js'*/



import Welcome from '../views/welcome.js'
import Login from '../views/login.js'
import Register from '../views/register.js'
import Home from '../views/home.js'



const routes = [
  {
    path: '/',
    name: 'Welcome',
    template: Welcome()

  },

  {
    path: '/login',
    name: 'Login',
    template: Login()
  },

  {
    path: '/register',
    name: 'Register',
    template: Register()
  },

  {
    path: '/home',
    name: 'Home',
    template: Home()
  }
]

const renderTemplate = () => {
  const view = routes.filter(route => route.path === window.location.pathname)[0]
  const container = document.getElementById('app')
  container.innerHTML = ''
  container.appendChild(view.template) //para agregar el template


}

const next = (path) => {
  const view = routes.filter(route => route.path === path)[0]
  history.pushState({}, view.name, view.path)
  renderTemplate()



}

// const navigate = (path) => { navGuard (next, path, '/login') }//


const initRouter = () => {
  // navGuard(next,'/', 'login' )
  renderTemplate()
  window.onpopstate = () => {
    renderTemplate()

  }
}

export { next, initRouter }
