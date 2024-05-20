import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDitibZExDlfPGyKuK03ygP72t2xhxu4WU",
    authDomain: "emporium-authentication.firebaseapp.com",
    databaseURL: "https://emporium-authentication-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "emporium-authentication",
    storageBucket: "emporium-authentication.appspot.com",
    messagingSenderId: "956910928408",
    appId: "1:956910928408:web:39ebd4d4de86a612b3396d"
  };

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

registerBtn.addEventListener("click", function () { 

    let username = document.getElementById("registerUsername").value;
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;
    let confirmPassword = document.getElementById("confirmPassword").value; 

    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    const user = userCredential.user;
    set(ref(database, 'users/' + user.uid), {
        username: username,
        email: email,
        password: password
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

loginBtn.addEventListener("click", function () {
    const loginUsername = document.getElementById('loginEmail').value;
    const loginPassword = document.getElementById('loginPassword').value;
    signInWithEmailAndPassword(auth, loginUsername, loginPassword)
.then((userCredential) => {
    const user = userCredential.user;
    const date=new Date();
    update(ref(database, 'users/' + user.uid), {
        lasLogin: date,
    });
    alert("User logged in successfully");
    window.location.href = "index.html";
})
.catch((error) => {
    alert("Invalid username or password");
});
});