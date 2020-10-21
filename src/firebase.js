import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyA6xoIK_SUlurdhJFpS1VM0KGAkXnAt1FM",
    authDomain: "whataapp-6931f.firebaseapp.com",
    databaseURL: "https://whataapp-6931f.firebaseio.com",
    projectId: "whataapp-6931f",
    storageBucket: "whataapp-6931f.appspot.com",
    messagingSenderId: "449175458915",
    appId: "1:449175458915:web:15eb2792c31e4096fe9456",
    measurementId: "G-5TX6W0RTRZ"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db