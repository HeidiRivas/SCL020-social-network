
import { deletePost } from './delete.js';
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
 /* onSnapshot(collection(db,'post'),(querySnapShot)=>{}*/
 const taskContainer = document.getElementById("task-container");
   
 let html = ''
  querySnapShot.forEach(doc => {
     html += `
     <div class="postOld">
    
      <div class="textbox">  ${doc.data().content} 
      </div>
      <div class="btnbox">      
     <button class="btnedit"></button>
     <button class="btndel" id="btndel" data-id= "${doc.id}"></button>
     <button class="like"></button>
     <button class="unlike"></button>
      </div>
      


     </div>
    `
   
  });

taskContainer.innerHTML = html

const btnD= taskContainer.querySelectorAll('#btndel')

btnD.forEach (element =>{
  element.addEventListener('click', (event)=>{
 deletePost(event.target.dataset.id)
  });
});
  }
  

export {savePost,listPost}