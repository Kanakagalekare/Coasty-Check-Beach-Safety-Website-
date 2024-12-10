// Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyA5PPJOvBXrt1BXLXpNirWYLqYTi9PuyGg",
    authDomain: "finalproject-7d8fd.firebaseapp.com",
    databaseURL: "https://finalproject-7d8fd-default-rtdb.firebaseio.com/",
    projectId: "finalproject-7d8fd",
    storageBucket: "finalproject-7d8fd.appspot.com",
    messagingSenderId: "1098406126947",
    appId: "1:1098406126947:web:81cd954a947196683e9f56",
      measurementId: "G-K0JHYPP2E9"
    };
    

// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

// DOM Elements
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const loginButton = document.getElementById("loginButton");
const errorDiv = document.getElementById("error");

loginButton.addEventListener("click", () => {
    const email = emailField.value;
    const password = passwordField.value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const userId = userCredential.user.uid;
            const userRef = ref(db, `users/${userId}`);

            get(userRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    const role = userData.role;

                    if (role === "beachManager") {
                        window.location.href = "D:/Demo/dashboard/index.html";
                    } else if (role === "activityManager") {
                        window.location.href = "D:/Demo/activitymanager/index.html";
                    } else {
                        errorDiv.textContent = "Role not assigned. Please contact admin.";
                    }
                } else {
                    errorDiv.textContent = "User data not found!";
                }
            });
        })
        .catch((error) => {
            errorDiv.textContent = error.message;
        });
});
