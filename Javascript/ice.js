const iceElement = document.getElementById("Ice");


const buttonElement1_ice = document.getElementById("iceButton1");

// Add an event listener to the button
buttonElement1_ice.addEventListener("click", function() {
    // Set the value of the input element when the button is clicked
    iceElement.value = "Cubed";
});


const buttonElement2_ice = document.getElementById("iceButton2");

// Add an event listener to the button
buttonElement2_ice.addEventListener("click", function() {
    // Set the value of the input element when the button is clicked
    iceElement.value = "Crushed";
});