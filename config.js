import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBwJmr9chctAOADiAefjdwOrtAc4fJA40o",
  authDomain: "project62-6d508.firebaseapp.com",
  projectId: "project62-6d508",
  storageBucket: "project62-6d508.appspot.com",
  messagingSenderId: "666158159792",
  appId: "1:666158159792:web:3576a6f2f726f917d7e875"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  