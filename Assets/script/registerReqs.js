import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://emporium-authentication-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "authentication/Items");

document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("registerUsername");
    const email = document.getElementById("registerEmail");
    const password = document.getElementById("registerPassword");
    const confirmPassword = document.getElementById("confirmPassword");
    const loginUsername = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const registerBtn = document.getElementById("registerBtn");
    const loginBtn = document.getElementById("loginBtn");

    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordConstraints = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    registerBtn.addEventListener("click", function () {
        if (username.value == "" || email.value == "" || password.value == "" || confirmPassword.value == "") {
            alert("Please fill in all fields");
        } else if (!emailRegex.test(email.value)) {
            alert("Please enter a valid email address");
        } else if (password.value != confirmPassword.value) {
            alert("Passwords do not match");
        } else if (!passwordConstraints.test(password.value)) {
            alert("Password must contain at least 8 characters, one uppercase letter, one lowercase letter and one number");
        }
    });

    loginBtn.addEventListener("click", function() {
        if (loginUsername.value === '' || loginPassword.value === '') {
            alert('Please enter both username and password.');
            return;
        }
    });
});

window.switchForm = function(event, formId) {
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
}
