// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcFlzC0YGxiVxitc4b0FChUo5laSY2sE8",
  authDomain: "fiona-s-fashion.firebaseapp.com",
  databaseURL: "https://fiona-s-fashion-default-rtdb.firebaseio.com",
  projectId: "fiona-s-fashion",
  storageBucket: "fiona-s-fashion.appspot.com",
  messagingSenderId: "966538327944",
  appId: "1:966538327944:web:a02051b5bc8f732b2dac3d",
  measurementId: "YG-QYQ6FFSMTE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
const auth = getAuth(app);

let Name = document.getElementById('Name');
let email = document.getElementById('email');
let password = document.getElementById('password');
let signupButton = document.getElementById('Signup');

// Signup function
let signup = () => {
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // After successful signup, get the user's ID
      const userId = userCredential.user.uid;

      // Prepare user data to be stored in the database
      const userData = {
        name: Name.value,
        email: email.value
        // Add more user data here if needed
      };

      // Save user data to the database under the user's ID
      set(ref(db, 'users/' + userId), userData)
        .then(() => {
          console.log("User data saved successfully!");
          // Redirect the user to the login page
          window.location.href = "login.html";
        })
        .catch((error) => {
          console.error("Error saving user data: ", error);
        });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("Signup error: ", errorMessage);
    });
}

// Attach signup function to the signup button click event
signupButton.addEventListener('click', signup);
