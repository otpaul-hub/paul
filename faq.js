document.addEventListener("DOMContentLoaded", () => {
  // Contact form submission
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Simulate sending the message
      document.getElementById(
        "contactMessage"
      ).textContent = `Thank you, ${name}! Your message has been sent.`;

      // Reset the form
      this.reset();
    });
});
