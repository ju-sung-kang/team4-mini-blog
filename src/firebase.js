import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBt9SNqM9ogAQZxpi8plzIrMXIA7WePhmI",
    authDomain: "miniblog-92676.firebaseapp.com",
    projectId: "miniblog-92676",
    storageBucket: "miniblog-92676.appspot.com",
    messagingSenderId: "42160782796",
    appId: "1:42160782796:web:8a6c1dfe0439d555eeb169",
    measurementId: "G-YVZ2301LFZ"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
