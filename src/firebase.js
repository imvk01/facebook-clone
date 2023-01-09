import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8bzNT8aNKtVDBM98hMLkLmYjPnm5LzHg",
  authDomain: "facebook-clone-eb5d2.firebaseapp.com",
  projectId: "facebook-clone-eb5d2",
  storageBucket: "facebook-clone-eb5d2.appspot.com",
  messagingSenderId: "112861351848",
  appId: "1:112861351848:web:ca05dbb9d2504bc95e179d",
  measurementId: "G-8PSFP1T1KB"
  };

  const firebaseapp = firebase.initializeApp(firebaseConfig);
  const db = firebaseapp.firestore();
  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export{ auth, provider};
  export default db;
  