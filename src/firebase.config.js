
import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth'

import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyD7LihVQtBD_ExtoEsg6v-n9TYKx2Y9POM",
    authDomain: "maltimart-bc470.firebaseapp.com",
    projectId: "maltimart-bc470",
    storageBucket: "maltimart-bc470.appspot.com",
    messagingSenderId: "715855487638",
    appId: "1:715855487638:web:2a9c10704e24fbb4c818b7"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app