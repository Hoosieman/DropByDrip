const sizeElement = document.getElementById('size');

const buttonElement1_size = document.getElementById('sizeButton1');

// Add an event listener to the button
buttonElement1_size.addEventListener('click', function () {
  // Set the value of the input element when the button is clicked
  sizeElement.value = 'Extra Small';
});

const buttonElement2_size = document.getElementById('sizeButton2');

buttonElement2_size.addEventListener('click', function () {
  sizeElement.value = 'Small';
});

const buttonElement3_size = document.getElementById('sizeButton3');

buttonElement3_size.addEventListener('click', function () {
  sizeElement.value = 'Medium';
});

const buttonElement4_size = document.getElementById('sizeButton4');

buttonElement4_size.addEventListener('click', function () {
  sizeElement.value = 'Large';
});

const buttonElement5_size = document.getElementById('sizeButton5');

buttonElement5_size.addEventListener('click', function () {
  sizeElement.value = 'Extra Large';
});