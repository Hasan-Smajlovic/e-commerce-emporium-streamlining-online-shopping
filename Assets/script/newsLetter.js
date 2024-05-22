import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, push, ref } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://emporium-authentication-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);

const newsletterEmail = document.getElementById("newsletterEmail");
const newsletterBtn = document.getElementById("newsletterBtn");

newsletterBtn.addEventListener("click", function () {
    const emailValue = newsletterEmail.value;
    if (emailValue) {
        push(ref(database, "newsletterSubscribers"), {
            email: emailValue
        })
        .then(() => {
            alert("Thank you for subscribing to our newsletter!");
            newsletterEmail.value = "";
        })
        .catch((error) => {
            console.error("Error writing to database: ", error);
            alert("There was an error subscribing to the newsletter. Please try again.");
        });
    } else {
        alert("Please enter a valid email address in the newsletter field");
    }
});
