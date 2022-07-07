import { createUserWithEmailAndPassword, signInWithEmailAndPassword, addDoc, deleteDoc, doc,db,id }  from '../src/firebase/init.js';
import { registerNewUser, login} from '../src/firebase/auth.js';
import {savePost} from '../src/firebase/post';


jest.mock('../src/firebase/init.js', () => ({
  auth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: jest.fn(),
  getAuth: jest.fn(() => {
    console.log('llamamos al getAuth mockeado')
  }),
  initializeApp: jest.fn(),
  createUserWithEmailAndPassword: jest.fn(),
  provider: jest.fn(),
  signInWithPopup: jest.fn(),
  addDoc: jest.fn(),
  collection:jest.fn(),
  doc:jest.fn(),
  db:jest.fn(),
  deleteDoc: jest.fn(),
  Timestamp :jest.fn(),
  query: jest.fn(() => {
    console.log('llamamos al getAuth mockeado')
    
  }),
  onSnapshot: jest.fn()
}));

/**
 * @jest-environment jsdom
 */ 

describe('Test Auth', () => {
  const mail = "probando@gmail.com";
  const pass = "qwerty";
  it('try registerNewUser ', async () => {
    await registerNewUser(mail, pass);
    expect(createUserWithEmailAndPassword).toHaveBeenCalled()
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1)
    
  });

});

describe('Test Auth', () => {
  const mail = "probando@gmail.com";
  const pass = "qwerty";
  it('Must log a created user using signIn Wit ', async () => {
    await login(mail, pass);
    expect(signInWithEmailAndPassword).toHaveBeenCalled()
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1)

  });

});


describe('Tests for the SavePost function', () => {
  const userName = "";
  const content = '';
  const userId= '';
  const like = "";
  const numberLike = "";

  it('Should call addDoc', async () => {
    await savePost(content, userName,userId,like,numberLike);
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('Tests for the deletePost function', () => {
  const id = '';
  it('Should call deleteDoc', async () => {
    await deleteDoc(id);
    expect(deleteDoc).toHaveBeenCalled();
  });
});

describe('Tests for the deletePost function', () => {
  const id = '';
    it('Should call deleteDoc with the postRef argument', async () => {
    const postRef = doc(db, 'posts', id);
    await deleteDoc(id);
    expect(deleteDoc).toHaveBeenCalled(postRef);
  });
});

