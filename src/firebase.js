import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCZbC3Diw66i3hj_Vp9RI5ncgBk4CIhTSA",
    authDomain: "got-music.firebaseapp.com",
    databaseURL: "https://got-music.firebaseio.com",
    projectId: "got-music",
    storageBucket: "got-music.appspot.com",
    messagingSenderId: "693014542927",
    appId: "1:693014542927:web:1769fd7976add77afa883a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;