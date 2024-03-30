import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB7jtzVayllo_g0Xc_xWZjrS5xvw4Ne334",
    authDomain: "fircise.firebaseapp.com",
    projectId: "fircise",
    storageBucket: "fircise.appspot.com",
    messagingSenderId: "303133651459",
    appId: "1:303133651459:web:50c4eb8f7a3076b6c75436"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const database = getFirestore(app)