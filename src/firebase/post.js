

import { deletePost,postByEdit } from './delete.js';
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
    
      <textarea class="textbox" id="textbox" readonly>   ${doc.data().user} 
      ${doc.data().content} 
      </textarea>
      <div class="btnbox">      
     <button class="btnedit"  id="btnEdit" data-id= "${doc.id}"></button>
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
  const btnEdit= taskContainer.querySelectorAll('#btnEdit');
  btnEdit.forEach (element =>{
    element.addEventListener('click',async (event)=>{
  const editDoc= await postByEdit(event.target.dataset.id)
  const byEdit= editDoc.data().content;
  const containerPost = document.getElementById("post");
  const y = containerPost.innerHTML = byEdit;
  console.log(y)
  
    });
  });
   });//final del onsnapshot


 }

 
export {savePost,listPost}