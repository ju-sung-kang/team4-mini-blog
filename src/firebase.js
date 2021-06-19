import firebase from 'firebase';

const firebaseConfig = {
<<<<<<< HEAD
    apiKey: "AIzaSyDr_z4EnimgQVSfJo6gGOSi0S3pEjQ60r8",
    authDomain: "mini-blog-8ba65.firebaseapp.com",
    projectId: "mini-blog-8ba65",
    storageBucket: "mini-blog-8ba65.appspot.com",
    messagingSenderId: "289114255099",
    appId: "1:289114255099:web:abb39b386447fa1fa7ca5e",
    measurementId: "G-T91M80QED3"
};
=======
    apiKey: "AIzaSyBt9SNqM9ogAQZxpi8plzIrMXIA7WePhmI",
    authDomain: "miniblog-92676.firebaseapp.com",
    projectId: "miniblog-92676",
    storageBucket: "miniblog-92676.appspot.com",
    messagingSenderId: "42160782796",
    appId: "1:42160782796:web:8a6c1dfe0439d555eeb169",
    measurementId: "G-YVZ2301LFZ"
  };

>>>>>>> 238a07ab2b2d098e93666427d8da333411ad98c4

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;