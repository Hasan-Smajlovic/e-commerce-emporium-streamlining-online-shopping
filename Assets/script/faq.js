import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, push, ref, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://emporium-authentication-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

const inputText = document.getElementById("inputText");
const buttonSubmit = document.getElementById("buttonSubmit");

buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    const inputTextValue = inputText.value.trim();
    if (inputTextValue) {
        const newQuestionRef = push(ref(database, "faq")); 
        set(newQuestionRef, {
            question: inputTextValue
        })
            .then(() => {
                alert("Thank you for submitting your question!");
                inputText.value = "";
            })
            .catch((error) => {
                console.error("Error writing to database: ", error);
                alert("There was an error submitting your question. Please try again.");
            });
    } else {
        alert("Please enter a question in the field");
    }
});
