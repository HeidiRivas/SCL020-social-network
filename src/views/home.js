// import {next} from "../router/router.js"
const Home = () => {

    const template = //html
    `           <nav>
    <ul class="menu">
      <li class="logo"><a href="#"><img alt=""></a></li>
      <li class="item"><a class="acolor" href="#">Home</a></li>
      <li class="item"><a class="acolor" href="#">Grupos</a></li>
      <li class="item"><a class="acolor" href="#">Eventos</a></li>
      <li class="toggle"><a href="#" id="list"><i class="fas fa-bars"></i></a></li>
    </ul>                
  </nav>
  <main>
  <form id="postNew">
  <textarea name="post" id="post" cols="100" rows="10"></textarea>
  <div>
  <button id="newPost" class="newPost"> Nuevo Post</button>
  </div>
  </form>
  <h2 class="timeline"> Cosplay --------------------Fanfics------------------------------Gamer Word</h2>
  (timeline)
  </main>
    `
//1.- coloque un text area y le puse un botón quite la opción de redimensionar en css, lo meti en un form
//2.traje el formulario y le pedi q tome el value del text área
    const container = document.createElement('div')
    container.innerHTML = template
    
    
  
    container.querySelector('.toggle').addEventListener ('click', function(e){
     const items = document.querySelectorAll('.item');
     
      items.forEach((item)=> {
         item.classList.toggle('active')
     });
    });
    container.querySelector('#postNew').addEventListener('submit', (e)=> {
      e.preventDefault()
     console.log(postNew['post'].value) 

    })
   

    return container
}

export default Home
