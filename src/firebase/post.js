
import {db, collection, getDocs,addDoc,onSnapshot} from './init.js'


const savePost = async (data)=> {
    try {
        const docRef = await addDoc(collection(db, "post"),data)
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}


 

const listPost = async ()=> {
  const querySnapShot = await getDocs(collection(db, "post"));
  console.log(querySnapShot)
  const taskContainer = document.getElementById("task-container");
  
   
 let html = ''
  querySnapShot.forEach(doc => {
     html += `
     <div class= 'postOld'>
     <h3> ${doc.data().content}</h3>
     <button>Editar</button>
     <button>Borrar</button>
    <a href='../img/conLike.png'><img src='../img/sinLike.png' class="sinLike" ></a>
     </div>
    `
  });
 
taskContainer.innerHTML= html
 
  }
  

export {savePost,listPost}