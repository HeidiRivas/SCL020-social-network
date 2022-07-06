

import { deletePost, postByEdit } from './delete.js';
import { db, collection, getDocs, addDoc, onSnapshot, doc, query } from './init.js'
import { editPost } from "./firestore.js"

const savePost = async (data) => {
  try {
    const docRef = await addDoc(collection(db, "post"), data)
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}



const listPost = async () => {
  const q = query(collection(db, "post"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    let post = [];
    const taskContainer = document.getElementById("task-container");

    querySnapshot.forEach((doc) => {
      //post.push(doc.data().content);//
      console.log(doc.data().content)
      post += `
     <div class="postOld">
    
      <textarea class="textbox" id="textbox-${doc.id}" readonly>   ${doc.data().user} 
      ${doc.data().content} 
      </textarea>
      <div class="btnbox">      
     <button class="btnedit"  id="btnEdit" data-id= "${doc.id}"></button>
     <button class="save" id="save"></button>
     <button class="btndel" id="btndel" data-id= "${doc.id}"></button>
     <button class="like"></button>
     <button class="unlike"></button>
      </div>
      </div>
    `
    });

    taskContainer.innerHTML = post

    const btnD = taskContainer.querySelectorAll('#btndel');
    btnD.forEach(element => {
      element.addEventListener('click', (event) => {

        deletePost(event.target.dataset.id)

      });
    });

    const taskContainer2 = document.getElementById("task-container");
    const btnedit = taskContainer2.querySelectorAll("#btnEdit");
    btnedit.forEach(element => {
      element.addEventListener("click", (event) => {
        //console.log(event.target)
        const postContainerEl = element.closest('.postOld')
        const textAreaEl= postContainerEl.querySelector('.textbox')
        const btnSaveEl= postContainerEl.querySelector('.save')
        textAreaEl.removeAttribute('readonly')
        btnSaveEl.style.display='inline'
        

        
        
      
       
      });


    })

    const save = document.querySelectorAll(".save");
    save.forEach(element => {
  const buttonContainer = element.parentElement
  const editButton = buttonContainer.querySelector('.btnedit')
      element.addEventListener("click", (e) => {
        const id = editButton.dataset.id;
        const content = document.getElementById("textbox-" + id).value

        console.log(content)

        editPost(id,  content);
      })
    });


    // const btnEdit= taskContainer.querySelectorAll('#btnEdit');
    // btnEdit.forEach (element =>{
    //   element.addEventListener('click',async (event)=>{
    // // const editDoc= await postByEdit(event.target.dataset.id)
    // const byEdit= editDoc.data().content;
    // const containerPost = document.getElementById("post");
    // const y = containerPost.innerHTML = byEdit;
    // console.log(y)

    //   });
    // });
  });//final del onsnapshot


}


export { savePost, listPost }