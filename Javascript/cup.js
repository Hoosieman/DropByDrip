const cupElement = document.getElementById("cup");

const buttonElement1_cup = document.getElementById("cupButton1");
// Add an event listener to the button
buttonElement1_cup.addEventListener("click", function() {
    // Set the value of the input element when the button is clicked
    cupElement.value = "Styrofoam";
});



const buttonElement2_cup = document.getElementById("cupButton2");

buttonElement2_cup.addEventListener("click", function() {

    cupElement.value = "Paper";
});


const buttonElement3_cup = document.getElementById("cupButton3");

buttonElement3_cup.addEventListener("click", function() {

    cupElement.value = "Plastic";
});
