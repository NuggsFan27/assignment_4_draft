const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    // Stop the browser from reloading the page
    event.preventDefault();

    // Read the user's name (optional—customize your message)
    const userName = form.name.value.trim();

    // Show a thank-you alert
    if (userName) {
      alert(`Thanks for reaching out, ${userName}! We’ll be in touch soon.`);
    } else {
      alert('Thanks for reaching out! We’ll be in touch soon.');
    }

    // Clear all the inputs back to their default values
    form.reset();
  });