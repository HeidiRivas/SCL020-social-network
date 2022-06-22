
import { signInWithEmailAndPassword, auth,signInWithPopup, GoogleAuthProvider,getAuth, createUserWithEmailAndPassword } from "./init.js"
// importe el  createUserWithEmailAndPassword del auth


const loginWithGoogle = ()=> {
const provider = new GoogleAuthProvider();
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
//agregue esta funcion de register me traje el codigo de firebase
const registerNewUser = (email,password)=> {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
//copie de firebase código de login arriba y en el init ya esta singinwhit...
  const login = async(email, password)=> {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }); 
    
}

/*const login = async(email, password)=> {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch(error) {
        throw error.message
    }
}*/


export { login,loginWithGoogle,registerNewUser }