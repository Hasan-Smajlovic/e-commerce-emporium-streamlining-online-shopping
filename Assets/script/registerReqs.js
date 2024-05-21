import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDitibZExDlfPGyKuK03ygP72t2xhxu4WU",
    authDomain: "emporium-authentication.firebaseapp.com",
    databaseURL: "https://emporium-authentication-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "emporium-authentication",
    storageBucket: "emporium-authentication.appspot.com",
    messagingSenderId: "956910928408",
    appId: "1:956910928408:web:39ebd4d4de86a612b3396d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("registerUsername");
    const email = document.getElementById("registerEmail");
    const password = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const loginUsername = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordConstraints = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    registerBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (username.value === "" || email.value === "" || password.value === "" || confirmPassword.value === "") {
            alert("Please fill in all fields");
            return;
        }
        if (!emailRegex.test(email.value)) {
            alert("Please enter a valid email address");
            return;
        }
        if (password.value !== confirmPassword.value) {
            alert("Passwords do not match");
            return;
        }
        if (!passwordConstraints.test(password.value)) {
            alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number");
            return;
        }

        createUserWithEmailAndPassword(auth, email.value, password.value)
            .then((userCredential) => {
                const user = userCredential.user;
                set(ref(database, 'users/'), {
                    username: username.value,
                    email: email.value,
                    password: password.value 
                });
                alert("User created successfully");
                switchForm(event, 'loginForm');
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
            });
    });

    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (loginUsername.value === '' || loginPassword.value === '') {
            alert('Please enter both email and password.');
            return;
        }

        signInWithEmailAndPassword(auth, loginUsername.value, loginPassword.value)
            .then((userCredential) => {
                const user = userCredential.user;
                const date = new Date();
                update(ref(database, 'users/' + user.uid), {
                    lastLogin: date,
                });
                alert("User logged in successfully");
                window.location.href = "index.html";
            })
            .catch((error) => {
                alert("Invalid email or password");
            });
    });
});

window.switchForm = function (event, formId) {
    event.preventDefault();
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    if (formId === 'registerForm') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
    } else {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }
};
