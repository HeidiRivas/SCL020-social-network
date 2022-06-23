
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";


import config from './config.js'


initializeApp(config)
const auth = getAuth();

export { initializeApp, signInWithEmailAndPassword, auth,signInWithPopup, GoogleAuthProvider,getAuth, createUserWithEmailAndPassword }


//agregre  createUserWithEmailAndPassword en la importación y exportación del auth

//22/06 agregue el firestore e importe getFirestore,inicialice firebase pero se le pasa como parametro app q tengo desactivado en el init 