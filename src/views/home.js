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
    `

    const container = document.createElement('div')
    container.innerHTML = template
    
    
  
container.querySelector('.toggle').addEventListener ('click', function(e){
     const items = document.querySelectorAll('.item');
     
      items.forEach((item)=> {
         element.classList.toggle('active')
     });
    });
   

    return container
}

export default Home
