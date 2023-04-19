import firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBqthWcoyM14LoVjhtPh5oWZpp5QXfmb-Q",
    authDomain: "abe-s-applicatio.firebaseapp.com",
    projectId: "abe-s-applicatio",
    storageBucket: "abe-s-applicatio.appspot.com",
    messagingSenderId: "698230456608",
    appId: "1:698230456608:web:f73be3530be8ec45231745"
  };

firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


export {db, firebase};
