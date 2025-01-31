
document.addEventListener('DOMContentLoaded', function() {

    // Get references to the form and feedback division
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
  
    // Add event listener to the form for submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Clear previous feedback
      feedbackDiv.innerHTML = '';
  
      // Get form input values and trim them
      const name = form.elements['name'].value.trim();
      const email = form.elements['email'].value.trim();
      const password = form.elements['password'].value.trim();
  
      // Basic input validation (you can add more complex checks)
      if (!name || !email || !password) {
        displayFeedback('Please fill in all fields.');
        return;
      }
  
      // Check if email is valid (basic check)
      if (!validateEmail(email)) {
        displayFeedback('Please enter a valid email address.');
        return;
      }
  
      // If all checks pass, you can proceed with form submission
      // For example, you could send the data to the server using AJAX
  
      // Display success message (replace with actual server response handling)
      displayFeedback('Form submitted successfully!');
  
    });
  
    // Helper function to display feedback messages
    function displayFeedback(message) {
      feedbackDiv.textContent = message;
    }
  
    // Helper function to validate email (basic check)
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  
  });

  document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Retrieve and trim user inputs
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
  
      // Validation logic
      let isValid = true;
      const messages = [];
  
      // Username validation
      if (username.length < 3) {
        isValid = false;
        messages.push("Username must be at least 3 characters long.");
      }
  
      // Email validation
      if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Please enter a valid email address.");
      }
  
      // Password validation
      if (password.length < 8) {
        isValid = false;
        messages.push("Password must be at least 8 characters long.");
      }
  
      // Display feedback
      feedbackDiv.style.display = 'block';
  
      if (isValid) {
        feedbackDiv.textContent = "Registration successful!";
        feedbackDiv.style.color = "#28a745"; // Green color for success
      } else {
        feedbackDiv.innerHTML = messages.join('<br>');
        feedbackDiv.style.color = "#dc3545"; // Red color for errors
      }
    });
  });
