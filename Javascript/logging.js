function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    const apiUrl = '/login';
  
    
    // Send data to the server
    fetch(apiUrl, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Login successful!');
        // Store the token securely (e.g., in a cookie or local storage)
        localStorage.setItem('token', data.token);
        // Redirect to the desired page
        window.location.href = 'order.html';
      } else {
        alert('Login failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  }