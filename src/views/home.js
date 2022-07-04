// import {next} from "../router/router.js"
import {  listPost, savePost} from '../firebase/post.js'


const Home = () => {

    const template = //html
    `           <nav>
    <ul class="menu">
      <li class="logo"><a href="#"><img href="/" ></a></li>
      <li class="item"><a class="acolor" href="#">Home</a></li>
      <li class="item"><a class="acolor" href="#">Grupos</a></li>
      <li class="item"><a class="acolor" href="#">Eventos</a></li>
      <li class="toggle"><a href="#" id="list"><i class="fas fa-bars"></i></a></li>
    </ul>                
  </nav>
  <main>
  <form class="divpost" id="postNew">
  <textarea name="post" id="post" cols="100" rows="10"></textarea>
  <button id="newPost" class="btn"> Nuevo Post</button>
  </div>
  </form>
  
  </main>
  <div id="task-container"></div>
    `
//¿El task container de la linea 25 donde lo ejecutas?
//1.- coloque un text area y le puse un botón quite la opción de redimensionar en css, lo meti en un form
//2.traje el formulario y le pedi q tome el value del text área

    const container = document.createElement('div')
    container.innerHTML = template
    
    
//esta funcion es para ejecutar el menú desplegable, en donde se le pide que recorra el string
//y se le agrega un evento a nivel usuario, que es que cuando haga click se ejecute la funcion (e)
//la cual consiste en que todo lo contenido en la clase "item"
//sea recorrido por un for each que encapsule todo en un parámetro item
//y le aplique una activacion, esto resulta en que el menú desplegable se active
//cuando el usuario haga click.
    container.querySelector('.toggle').addEventListener ('click', function(e){
     const items = document.querySelectorAll('.item');
     
      items.forEach((item)=> {
         item.classList.toggle('active')
     });
    });

//funcion post, se crea una constante post, la cual toma lo que hay en el container
//y lo recorre en específico en lo que hay definido en #postNew. A esta nueva variable
// se le agrega un evento que es que cuando el usuario escriba su post y aprete el
//botón submit este ejecute un evento, el cual tiene un preventDefault()antes
//de ejecutarse el cual evita que se  hagan cosas antes de hacer un post
//luego se define una const textArea la cual llama al contenedor y le pide que recorra
//la info alojada en post y saque lo que el usuario escribió (con el .value)
// y se crea una const data, la cual alojará la info. En este caso user "" (que es
// quien lo emitió), content (se aloja lo de text area) y un 3er paso que es like.
//luego de eso data se guarda mediante la funcion SavePost y se ejecuta postnew.reset()
// para dejar el campo post sin data para que se pueda postear nuevamente.

   const postNew= container.querySelector('#postNew');
  postNew.addEventListener('submit', (e)=> {
      e.preventDefault()
      const textArea = container.querySelector('#post').value
      const data={
       user:'',
       content: textArea,
       like:0,
       
     }
     savePost(data)
     postNew.reset()
    })

//funcion para enlistar los post en timeline    
  listPost()
//se le pide que tome el container y lo muestre.
    return container
}

export default Home
