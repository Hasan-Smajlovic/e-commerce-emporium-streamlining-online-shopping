import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, push, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://emporium-authentication-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const buttonSubmit = document.getElementById("sendButton");

buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();
    if (nameValue && emailValue && phoneValue && messageValue) {
        const newQuestionRef = push(ref(database, "contactUs"));
        set(newQuestionRef, {
            name: nameValue,
            email: emailValue,
            phone: phoneValue,
            message: messageValue
        })
            .then(() => {
                alert("Thank you for contacting us!");
                name.value = "";
                email.value = "";
                phone.value = "";
                message.value = "";
            })
            .catch((error) => {
                console.error("Error writing to database: ", error);
                alert("There was an error submitting your message. Please try again.");
            });
    } else {
        alert("Please fill in all fields");
    }
    });
