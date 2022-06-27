

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDBK0c2VHqTcnNuscjEWYiMtIkG1zWgGFQ",
    authDomain: "react-portfolio-58d69.firebaseapp.com",
    projectId: "react-portfolio-58d69",
    storageBucket: "react-portfolio-58d69.appspot.com",
    messagingSenderId: "282283134166",
    appId: "1:282283134166:web:43877cc51f68b7c7968d77"
}


const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()