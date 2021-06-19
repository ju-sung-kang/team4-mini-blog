import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDr_z4EnimgQVSfJo6gGOSi0S3pEjQ60r8",
    authDomain: "mini-blog-8ba65.firebaseapp.com",
    projectId: "mini-blog-8ba65",
    storageBucket: "mini-blog-8ba65.appspot.com",
    messagingSenderId: "289114255099",
    appId: "1:289114255099:web:abb39b386447fa1fa7ca5e",
    measurementId: "G-T91M80QED3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;