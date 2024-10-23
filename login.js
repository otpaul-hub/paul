document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from submitting

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const loginErrorMessage = document.getElementById("loginErrorMessage");

    // Example condition for a fake invalid email/password check
    if (email !== "user@example.com" || password !== "password123") {
      loginErrorMessage.textContent = "Invalid email or password.";
    } else {
      loginErrorMessage.textContent = "";
      alert("Login Successful!"); // Replace with real login logic.
    }
  });
