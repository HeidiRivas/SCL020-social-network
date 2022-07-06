import { createUserWithEmailAndPassword, db,collection, addDoc }  from '../src/firebase/init.js';
import { registerNewUser } from '../src/firebase/auth.js';
import { next, initRouter} from '../src/router/router.js';

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
  db:jest.fn(),
  Timestamp :jest.fn(),
  query: jest.fn(() => {
    console.log('llamamos al getAuth mockeado')
  }),
}));

/**
 * @jest-environment jsdom
 */ 

describe('Test Auth', () => {
  const mail = "probando@gmail.com";
  const pass = "qwerty";
  it('must call registerNewUser ', async () => {
    await registerNewUser(mail, pass);
    await addDoc(collection(db, "user"))
    expect(registerNewUser).toHaveBeenCalled();
  });
});
