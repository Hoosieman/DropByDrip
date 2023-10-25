// Function to save past selected drink buttons to localStorage
function saveSelectedDrinks(selectedDrinks) {
    localStorage.setItem('selectedDrinks', JSON.stringify(selectedDrinks));
  }
  
  // Function to load past selected drink buttons from localStorage
  function loadSelectedDrinks() {
    const selectedDrinksJSON = localStorage.getItem('selectedDrinks');
    return selectedDrinksJSON ? JSON.parse(selectedDrinksJSON) : [];
  }

  function updatePastOrders() {
    const ordersList = document.getElementById('ordersList');
    ordersList.innerHTML = ''; // Clear the existing list
  
    selectedDrinks.forEach((drink) => {
      const listItem = document.createElement('li');
      listItem.textContent = drink;
      ordersList.appendChild(listItem);
    });
  }
  
  // Get the drink buttons and the "View Past Orders" button
  const drinkButtons = document.querySelectorAll('.circle-button');
  const viewOrdersButton = document.getElementById("pastOrdersButton");
  
  // Load the previously selected drinks
  const selectedDrinks = loadSelectedDrinks();
  
  // Add click event listeners to the drink buttons
  drinkButtons.forEach((drinkButton) => {
    drinkButton.addEventListener('click', function() {
        const drinkImgAlt = drinkButton.querySelector('img').getAttribute('alt');
        selectedDrinks.push(drinkImgAlt);
      saveSelectedDrinks(selectedDrinks);
    });
  });
  
  // Add click event listener to the "View Past Orders" button
  viewOrdersButton.addEventListener('click', function() {
    updatePastOrders();
    const pastOrdersSection = document.getElementById('pastOrdersButton');
  pastOrdersSection.style.display = 'block';
  });
  

  function clearSelectedDrinks() {
    localStorage.removeItem('selectedDrinks');
    updatePastOrders();
    const pastOrdersSection = document.getElementById('pastOrdersButton');
    
  }
  
  // Add click event listener to a "Clear Orders" button
  const clearOrdersButton = document.getElementById('clearOrders');
  
  clearOrdersButton.addEventListener('click', function() {
    clearSelectedDrinks();
    alert('Past Orders Cleared');
  });