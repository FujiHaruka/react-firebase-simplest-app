import firebase from 'firebase'

// Firebase Configuration
// https://console.firebase.google.com
const config = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
}

export const firebaseApp = firebase.initializeApp(config)
export const firebaseAuth = firebaseApp.auth()
export const firebaseDb = firebaseApp.database()
