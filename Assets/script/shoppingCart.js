import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js";

const appSettings = {
    databaseURL: "https://emporium-23763-default-rtdb.europe-west1.firebasedatabase.app/"
};

const app = initializeApp(appSettings);
const database = getDatabase(app);
const itemsInDB = ref(database, "ShoppingCart/Items");

const inputField = document.getElementById("inputField");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", function () {
    let inputValue = inputField.value;
    push(itemsInDB, inputValue);
    console.log(`${inputValue} added to database`);
});
