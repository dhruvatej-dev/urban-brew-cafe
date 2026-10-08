// Mobile Menu

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {
    navLinks.classList.toggle("show-menu");
});


// Booking Elements

const bookingForm = document.querySelector("#bookingForm");
const successPopup = document.querySelector("#successPopup");
const successMessage = document.querySelector("#successMessage");

const closePopup = document.querySelector("#closePopup");
const popupOk = document.querySelector("#popupOk");


// Booking Form

bookingForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const phone = document.querySelector("#phone").value;
    const date = document.querySelector("#date").value;
    const time = document.querySelector("#time").value;
    const guests = document.querySelector("#guests").value;


    // Check empty fields

    if (
        name === "" ||
        phone === "" ||
        date === "" ||
        time === "" ||
        guests === ""
    ) {
        alert("Please fill in all the details.");
        return;
    }


    // Check date

    const today = new Date().toISOString().split("T")[0];

    if (date < today) {
        alert("Please select today or a future date.");
        return;
    }


    // Show success popup

    successMessage.textContent =
        "Thanks, " + name + "! Your table request has been received.";

    successPopup.style.display = "flex";

    bookingForm.reset();
});


const dateInput = document.querySelector("#date");

const today = new Date();

const todayString = today.toISOString().split("T")[0];

const maxDate = new Date(today);
maxDate.setDate(maxDate.getDate() + 7);

const maxDateString = maxDate.toISOString().split("T")[0];

dateInput.min = todayString;
dateInput.max = maxDateString;


// Close popup with X

closePopup.addEventListener("click", function () {

    successPopup.style.display = "none";

});


// Close popup with Okay button

popupOk.addEventListener("click", function () {

    successPopup.style.display = "none";

});