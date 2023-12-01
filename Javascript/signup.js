function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Simple validation
    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }
  
    // Send data to the server
    fetch('http://localhost:4000/signup', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Sign up successful!');
        window.location.href = 'order.html';
      } else {
        alert('Sign up failed. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  }
  