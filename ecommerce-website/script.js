
const addButtons1 = document.querySelectorAll(".add-btn");
const cartCount1 = document.getElementById("cartCount");
let count1 = 0;
addButtons1.forEach(function(button) {
    button.addEventListener("click", function() {
        count1++;
        cartCount1.textContent = count1;
    });
});
