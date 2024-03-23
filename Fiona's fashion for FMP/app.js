 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
 import { getDatabase,
  ref,
  set,
  push,
  onValue,} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
 import { getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

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

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase();
const auth = getAuth();

  document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the Shop Now button
    var shopNowBtn = document.getElementById("ShopNow");
    
    // Get reference to the card container section
    var cardContainer = document.getElementById("cardContainer");
  
    // Add click event listener to the Shop Now button
    shopNowBtn.addEventListener("click", function() {
      // Scroll to the card container section
      cardContainer.scrollIntoView({ behavior: "smooth" });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the Shop Now button in the banner
    var bannerShopNowBtn = document.getElementById("Banner-btn");
    
    // Get reference to the product cards container
    var productCardsContainer = document.getElementById("product-cards");
  
    // Add click event listener to the Shop Now button in the banner
    bannerShopNowBtn.addEventListener("click", function() {
      // Scroll to the product cards container section
      productCardsContainer.scrollIntoView({ behavior: "smooth" });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the Shop Now button in the second banner
    var bannerShopNowBtn2 = document.getElementById("Banner-btn2");

    // Get reference to the product cards container
    var productCardsContainer = document.getElementById("product-cards");

    // Add click event listener to the Shop Now button in the second banner
    bannerShopNowBtn2.addEventListener("click", function() {
      // Scroll to the product cards container section
      productCardsContainer.scrollIntoView({ behavior: "smooth" });
    });
  });  

  document.addEventListener("DOMContentLoaded", function() {
    const sendButton = document.getElementById("sendBtn");

    sendButton.addEventListener("click", function() {
      const nameInput = document.querySelector('input[type="text"]');
      const emailInput = document.querySelector('input[type="email"]');
      const phoneInput = document.querySelector('input[type="number"]');
      const messageTextarea = document.getElementById("message");

      // Get the values from the input fields
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
      const message = messageTextarea.value.trim();

      // Ensure message is not empty
      if (message !== "") {
        // Push message data to the Firebase Realtime Database
        const messageRef = db.ref("messages").push();
        messageRef.set({
          name: name,
          email: email,
          phone: phone,
          message: message
        }).then(function() {
          // Reset input fields after successful submission
          nameInput.value = "";
          emailInput.value = "";
          phoneInput.value = "";
          messageTextarea.value = "";

          alert("Message sent successfully!");
        }).catch(function(error) {
          console.error("Error sending message: ", error);
          alert("Error sending message. Please try again later.");
        });
      } else {
        alert("Please enter a message before sending.");
      }
    });
  });