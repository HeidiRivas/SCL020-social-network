
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js'
import { getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";

import config from './config.js'


initializeApp(config)
const auth = getAuth();

export { initializeApp, signInWithEmailAndPassword, auth,signInWithPopup, GoogleAuthProvider,getAuth }
