import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDAo21N8Ptj6R98yG1uBZKssdOMPzCTHZ4',
  authDomain: 'language-bridge-17ec0.firebaseapp.com',
  databaseURL: 'https://language-bridge-17ec0-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'language-bridge-17ec0',
  storageBucket: 'language-bridge-17ec0.appspot.com',
  messagingSenderId: '1076209337889',
  appId: '1:1076209337889:web:84b0b4394cf420aa474560',
  measurementId: 'G-TX5FQ8XZJ0',
}

const firebase_app = initializeApp(firebaseConfig)

export const auth = getAuth(firebase_app)
