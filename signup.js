document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    const passwordMessage = document.getElementById("passwordMessage");

    // Basic email format validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      errorMessage.textContent = "Invalid email format.";
      return;
    }

    // Check password strength (e.g., minimum length, contains numbers)
    if (password.length < 8 || !/\d/.test(password)) {
      passwordMessage.textContent =
        "Password must be at least 8 characters long and contain a number.";
      return;
    } else {
      passwordMessage.textContent = "";
    }

    errorMessage.textContent = "";
    alert("Sign-Up Successful!"); // Replace with real sign-up logic.
  });
