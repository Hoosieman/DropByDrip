function signup() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simple validation
  if (!email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  fetch('/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    // Add other headers if needed
  },
  body: JSON.stringify({ email, password }),
})
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // This may need to be adjusted based on your server's response
  })
  .then(data => {
    // Handle the JSON data here
    console.log(data);
  })
  .catch(error => console.error('Error:', error));


}
