import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://emporium-authentication-default-rtdb.europe-west1.firebasedatabase.app/"
}
    const app = initializeApp(appSettings);
    const database = getDatabase(app);

    let submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", function (event) {
        event.preventDefault();
        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let apartment = document.getElementById("apartment").value;
        let city = document.getElementById("city").value;
        let cardNum = document.getElementById("cardNum").value;
        let expDate = document.getElementById("expDate").value;
        let securityCode = document.getElementById("securityCode").value;
        let cardName = document.getElementById("cardName").value;
        let saveCard = document.getElementById("saveCard").checked;

        if (!name || !address || !city || !cardNum || !expDate || !securityCode || !cardName) {
            alert("Please fill out all fields.");
            return;
        }
        else if (saveCard) {
            set(ref(database, "paymentInfo"), {
                name: name,
                address: address,
                apartment: apartment,
                city: city,
                cardNum: cardNum,
                expDate: expDate,
                securityCode: securityCode,
                cardName: cardName
            })
                .then(() => {
                    console.log("Data saved successfully.");
                    alert("Payment information saved successfully.");
                })
                .catch((error) => {
                    console.error("Data could not be saved." + error);
                    alert("Payment information could not be saved.");
                });
        }
        else {
            alert("Order successful.");
        }
    });