import firebase from 'firebase';
// import 'firebase/store';


const firebaseConfig = {
    apiKey: "AIzaSyA2dzbFipZ3uPzyu_otZ9Ud-9Rlx06hxRs",
    authDomain: "book-store-cefe8.firebaseapp.com",
    projectId: "book-store-cefe8",
    storageBucket: "book-store-cefe8.appspot.com",
    messagingSenderId: "718048312873",
    appId: "1:718048312873:web:63e91929c7a6fab2d12638",
    measurementId: "G-L6RK43X18J"
  };

  // initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);
  export default firebase