
import {db,deleteDoc,doc,getDoc, updateDoc} from  './init.js'

const saveUserName = async (data)=> {
  try {
      const docRef = await addDoc(collection(db, "user"),dataUser)// data con nombre de usuario y uid
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

const deletePost = (id)=> {

    
    deleteDoc(doc(db,'post',id));
   
  }

const postByEdit = async (id)=>{
    const docRef = doc(db, "post", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
     return docSnap
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
}
const editPost = async (id,content)=>{

const postRef = doc(db, "post", id);

//Set the "content" field of the 'post'.
await updateDoc(postRef, {
  content: content,
});
}
  export {deletePost, postByEdit,editPost}

 
  