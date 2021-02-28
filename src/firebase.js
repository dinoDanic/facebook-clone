import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD5piz8tAkW_0uJyWFAxMhZ_bf-GyUYbpg",
  authDomain: "facebook-clone-40bdd.firebaseapp.com",
  projectId: "facebook-clone-40bdd",
  storageBucket: "facebook-clone-40bdd.appspot.com",
  messagingSenderId: "562474041848",
  appId: "1:562474041848:web:a4d5fd9d8158d3b710960d",
  measurementId: "G-VD7YC3K665",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth(); // za logiranje
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
