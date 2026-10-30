const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});
const form1 = document.getElementById("contactForm");

form1.addEventListener("submit", function(event) {
    event.preventDefault();

    const name1 = document.getElementById("name").value.trim();
    const email1 = document.getElementById("email").value.trim();
    const message1 = document.getElementById("message").value.trim();

    const errorMsg = document.getElementById("errorMessage");
    const successMsg = document.getElementById("successMessage");

    errorMsg.textContent = "";
    successMsg.textContent = "";

    if (name1 === "" || email1 === "" || message1 === "") {
        errorMsg.textContent = "Please fill in all the fields.";
    }
    else if (!email1.includes("@") || !email1.includes(".")) {
        errorMsg.textContent = "Please enter a valid email.";
    }
    else {
        successMsg.textContent = "Your form has been submitted successfully!";
        form1.reset();
    }
});
