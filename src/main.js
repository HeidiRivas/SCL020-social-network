import {initRouter} from "./router/router.js"
import {login, logout} from "../src/firebase/auth.js"
import Welcome from "./views/welcome.js"

  initRouter()

  
  const buttonLogin = document.querySelector(".aut_btn");
  console.log(buttonLogin);
  buttonLogin.addEventListener("click", async (e) => {
    try {
      await login();
    } catch (error) {

    }
  });
  
 