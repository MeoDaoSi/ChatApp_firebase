import { firebase } from "firebase/app";

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBCsANl90zTr0NI82jPKYy1vSe6mdOql1g",
    authDomain: "chat-app-8d1c0.firebaseapp.com",
    projectId: "chat-app-8d1c0",
    storageBucket: "chat-app-8d1c0.appspot.com",
    messagingSenderId: "904947112378",
    appId: "1:904947112378:web:c7ee354998f1e51ca56583",
    measurementId: "G-V0SEHSFQZ3"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const autt = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;