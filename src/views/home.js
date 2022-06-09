import {next} from "../router/router.js"

const Home = () => {

    const template = //html
    ` 
    hola  
    `

    const container = document.createElement('div')
    container.innerHTML = template

    return container
}

export default Home