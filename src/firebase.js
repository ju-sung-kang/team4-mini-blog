import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAvCYXhlUrab62EH1AAjGcujV-2mivT-WE",
    authDomain: "tinder-clone-7fd3b.firebaseapp.com",
    projectId: "tinder-clone-7fd3b",
    storageBucket: "tinder-clone-7fd3b.appspot.com",
    messagingSenderId: "842829023616",
    appId: "1:842829023616:web:8aeb30059a483b463f9965"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;