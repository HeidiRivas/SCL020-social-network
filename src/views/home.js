import {next} from "../router/router.js"

const Home = () => {

    const template = //html
    `           <nav>
    <ul class="menu">
      <li class="logo"><a href="#"><img alt=""></a></li>
      <li class="item"><a href="#">Home</a></li>
      <li class="item"><a href="#">Grupos</a></li>
      <li class="item"><a href="#">Eventos</a></li>
      <li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
    </ul>
  </nav>

    `
    document.querySelector('.toggle').addEventListener('click', function(e){
      const items = document.querySelectorAll('.item');
      items.forEach((item)=> {
          item.classList.toggle('active')
      })
   })

    const container = document.createElement('div')
    container.innerHTML = template

    return container
}

export default Home