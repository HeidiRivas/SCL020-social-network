
import { deletePost } from './delete.js';
import {db, collection, getDocs,addDoc,onSnapshot,doc,query} from './init.js'


const savePost = async (data)=> {
    try {
        const docRef = await addDoc(collection(db, "post"),data)
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

 

const listPost = async ()=> {
const q = query(collection(db, "post"));
 const unsubscribe = onSnapshot(q, (querySnapshot) => {
   let post = [];
   const taskContainer = document.getElementById("task-container");
   querySnapshot.forEach((doc) => {
       //post.push(doc.data().content);//
     post += `
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
  taskContainer.innerHTML = post

  const btnD= taskContainer.querySelectorAll('#btndel');
  btnD.forEach (element =>{
    element.addEventListener('click', (event)=>{
   deletePost(event.target.dataset.id)
   
    });
  });

   });

 
   /*const taskContainer = document.getElementById("task-container")
   const btnD= taskContainer.querySelectorAll('#btndel');
   console.log(btnD)
   btnD.forEach (element =>{
     element.addEventListener('click', (event)=>{
    deletePost(event.target.dataset.id)
    //console.log(event.target.dataset.id)
     });
   });*/

 }

 
export {savePost,listPost}