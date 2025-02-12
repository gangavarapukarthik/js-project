 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";
 import {
    getAuth,
    creatUserWithEmailAndPassword,
    SignInWithEmailAndPassword,
 }from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";
 
 // Your web app's Firebase configuration
 
 const firebaseConfig = {
   apiKey: "AIzaSyDPjJtLZa-mxcLUJ4CIGS7264SBvL4-ORs",
   authDomain: "js-project-3eab2.firebaseapp.com",
   projectId: "js-project-3eab2",
   storageBucket: "js-project-3eab2.firebasestorage.app",
   messagingSenderId: "1068579052688",
   appId: "1:1068579052688:web:646764a2f226821d310c15",
   measurementId: "G-2MHBRZLBHN"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
  const auth=getAuth(app)