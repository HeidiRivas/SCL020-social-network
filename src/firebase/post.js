
import {db, collection, getDocs,addDoc} from './init.js'


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
  
  const taskContainer = document.getElementById("task-container");
  console.log(taskContainer)
   
 let html = ''
  querySnapShot.forEach(doc => {
     html += `
     <div>
     <h3> ${doc.data().content}</h3>
     </div>
    `
  });
 
taskContainer.innerHTML= html
 
  }
  

export {savePost,listPost}