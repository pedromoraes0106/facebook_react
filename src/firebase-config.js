// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signOut,} from "firebase/auth";
import {getFirestore, collection, addDoc, query, where, getDocs} from '@firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAk7wijnIzwEKwLPg6hoXuIPjMnd0EfG2A",
  authDomain: "facebook-cb34a.firebaseapp.com",
  projectId: "facebook-cb34a",
  storageBucket: "facebook-cb34a.appspot.com",
  messagingSenderId: "790978111702",
  appId: "1:790978111702:web:ddb092e2da2a8d3adb4177",
  measurementId: "G-HJ1DV6E6B0"
};

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
      uid: user.uid,
      name: user.displayName,
      authProvider: "google",
        email: user.email,
      });
     }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log(res.user.uid)
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
     });
     alert("Registrado")
  } catch (err) {
     console.error(err);
    alert(err.message);
   }
};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return true
  } 
  catch (err) {
     console.error(err);
    alert(err.message);
    return false
  }
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export {
  auth,
  db,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  signInWithGoogle
};

