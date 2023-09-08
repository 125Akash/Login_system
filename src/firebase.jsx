// src/firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBxbub_WX83QoXh5jUDNrhDxlWyulOs-8o",
    authDomain: "singinform-2a149.firebaseapp.com",
    projectId: "singinform-2a149",
    storageBucket: "singinform-2a149.appspot.com",
    messagingSenderId: "747706068364",
    appId: "1:747706068364:web:4a106fff639eb23d897aa9"
};

firebase.initializeApp(firebaseConfig);

export  const auth = firebase.auth();
