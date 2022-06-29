
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
  console.log(taskContainer)
   
 let html = ''
  querySnapShot.forEach(doc => {
     html += `
     <div class="postOld">
      <div> ${doc.data().content}
      <br>
     <button class="btnedit"></button>
     <button class="btndel"></button>
     <button class="like"></button>
     <button class="unlike"></button>
      </div>


     </div>
    `
  });
 
taskContainer.innerHTML= html
 
  }
  

export {savePost,listPost}