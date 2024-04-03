import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyADbzH7GLWrpmddP6irpdf8zS2aPyYgkNA",
    authDomain: "fircise-1a6aa.firebaseapp.com",
    projectId: "fircise-1a6aa",
    storageBucket: "fircise-1a6aa.appspot.com",
    messagingSenderId: "524126208137",
    appId: "1:524126208137:web:91af66d6c5f18bb2988658"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const database = getFirestore(app)