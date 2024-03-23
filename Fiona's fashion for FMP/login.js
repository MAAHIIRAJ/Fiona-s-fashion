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
  appId: "1:966538327944:web:4e50ed7ec1d4a10d2dac3d",
  measurementId: "G-C1CJ67JJFH"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

// Login function
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful, you can redirect to another page or show a success message
      const user = userCredential.user;
      console.log("Login successful:", user.uid);

      // Redirect to dashboard.html after successful login
      window.location.href = "index.html";
    })
    .catch((error) => {
      // Handle errors here, such as displaying an error message to the user
      const errorMessage = error.message;
      console.error("Login error:", errorMessage);
      alert("please login first"); // Display error message to the user
    });
}

// Attach login function to login button click event
document.getElementById("login").addEventListener("click", login);

// Function to handle logout
function logout() {
  auth.signOut()
    .then(() => {
      // Logout successful
      console.log("Logout successful");
      // Redirect to the login page
      window.location.href = "";
    })
    .catch((error) => {
      // Handle errors
      console.error("Logout error:", error);
    });
}

// Attach logout function to the logout button click event
document.getElementById("logout").addEventListener("click", logout);

// Monitor authentication state to show/hide the logout button
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, show the logout button
    document.getElementById("logout").style.display = "block";
  } else {
    // No user is signed in, hide the logout button
    document.getElementById("logout").style.display = "none";
  }
});
function forgotPassword() {
  const email = prompt("Enter your email to reset your password:");
  if (email) {
    auth.sendPasswordResetEmail(email)
      .then(() => {
        alert("Password reset email sent. Check your inbox.");
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error.message);
        alert("Failed to send password reset email. Please try again later.");
      });
  }
}

// Social Media Icons
document.getElementById("twitter-icon").addEventListener("click", () => {
  // Redirect to Twitter
  window.location.href = "https://twitter.com";
});

document.getElementById("facebook-icon").addEventListener("click", () => {
  // Redirect to Facebook
  window.location.href = "https://www.maharaj.facebook.com";
});

document.getElementById("instagram-icon").addEventListener("click", () => {
  // Redirect to Instagram
  window.location.href = "https://instagram.com";
});