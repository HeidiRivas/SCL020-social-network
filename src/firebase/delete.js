import {db,deleteDoc,doc} from  './init.js'



const deletePost = (id)=> {

    
    deleteDoc(doc(db,'post',id));
   
  }

  export {deletePost}