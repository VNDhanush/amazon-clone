import firebase from "firebase";


const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyDqjil4SPb7EKZ_69D4FGJ1YpzU8gwuTUk",
    authDomain: "clone02-b7a9d.firebaseapp.com",
    databaseURL: "https://clone02-b7a9d.firebaseio.com",
    projectId: "clone02-b7a9d",
    storageBucket: "clone02-b7a9d.appspot.com",
    messagingSenderId: "897838281710",
    appId: "1:897838281710:web:23ac1134bc9d155b4154ff",
    measurementId: "G-YBT7GJGDTF"
  
});

const db=firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};