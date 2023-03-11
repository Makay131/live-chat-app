import firebase from 'firebase/app';
import 'firebase/firestore';
//for authentification
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAijfYlu8sVfOkJ5OLFPgjDRUBKqyVIPFI",
    authDomain: "live-chat-7b529.firebaseapp.com",
    projectId: "live-chat-7b529",
    storageBucket: "live-chat-7b529.appspot.com",
    messagingSenderId: "501933885551",
    appId: "1:501933885551:web:d11c9bc828113db23c659a",
    measurementId: "G-LDSQ651SJ0"
  };

  //init firebase
  firebase.initializeApp(firebaseConfig);

  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectFirestore, projectAuth, timestamp }