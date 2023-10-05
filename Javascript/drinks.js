//Makes sure one button allowed to be color chnaged at a time
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.circle-button');
    let currentButton = null;
  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        if (currentButton !== button) {
          if (currentButton) {
            currentButton.classList.remove('clicked');
          }
          button.classList.add('clicked');
          currentButton = button;
        }
      });
    });
  });
  











// Get references to the input and button elements
const drinkElement = document.getElementById("drinkType");


const buttonElement_drink = document.getElementById("drinkButton1");

// Add an event listener to the button
buttonElement_drink.addEventListener("click", function() {
    // Set the value of the input element when the button is clicked
    drinkElement.value = "Mountain Dew";
    
});


const buttonElement2_drink = document.getElementById("drinkButton2");

buttonElement2_drink.addEventListener("click", function() {

    drinkElement.value = "Gatorade";
    

});

const buttonElement3_drink = document.getElementById("drinkButton3");

buttonElement3_drink.addEventListener("click", function() {

    drinkElement.value = "Pepsi";
    
});

const buttonElement4_drink = document.getElementById("drinkButton4");

buttonElement4_drink.addEventListener("click", function() {

    drinkElement.value = "Root Beer";
    
});

const buttonElement5_drink = document.getElementById("drinkButton5");

buttonElement5_drink.addEventListener("click", function() {

    drinkElement.value = "Diet Pepsi";
    
});

const buttonElement6_drink = document.getElementById("drinkButton6");

buttonElement6_drink.addEventListener("click", function() {

    drinkElement.value = "Dr Pepper";
    
});

const buttonElement7_drink = document.getElementById("drinkButton7");

buttonElement7_drink.addEventListener("click", function() {

    drinkElement.value = "Fanta";
    
});

const buttonElement8_drink = document.getElementById("drinkButton8");

buttonElement8_drink.addEventListener("click", function() {

    drinkElement.value = "7 Up";
    
});

const buttonElement9_drink = document.getElementById("drinkButton9");

buttonElement9_drink.addEventListener("click", function() {

    drinkElement.value = "Sprite";
    
});

const buttonElement10_drink = document.getElementById("drinkButton10");

buttonElement10_drink.addEventListener("click", function() {

    drinkElement.value = "Sierra Mist";
    
});

const buttonElement11_drink = document.getElementById("drinkButton11");

buttonElement11_drink.addEventListener("click", function() {

    drinkElement.value = "Diet Coke";
    
});

const buttonElement12_drink = document.getElementById("drinkButton12");

buttonElement12_drink.addEventListener("click", function() {

    drinkElement.value = "Coke";
    
});

const buttonElement13_drink = document.getElementById("drinkButton13");

buttonElement13_drink.addEventListener("click", function() {

    drinkElement.value = "SunKist";
    
});

const buttonElement14_drink = document.getElementById("drinkButton14");

buttonElement14_drink.addEventListener("click", function() {

    drinkElement.value = "Coke Zero";
    
});

const buttonElement15_drink = document.getElementById("drinkButton15");

buttonElement15_drink.addEventListener("click", function() {

    drinkElement.value = "Squirt";
});
