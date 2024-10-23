document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("nav ul li a");
  const tabContents = document.querySelectorAll(".tab-content");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      tabContents.forEach((tc) => (tc.style.display = "none"));

      tab.classList.add("active");
      const target = tab.getAttribute("href");
      document.querySelector(target).style.display = "block";
    });
  });

  // Profile settings form submission
  document
    .getElementById("profileForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      document.getElementById(
        "profileMessage"
      ).textContent = `Profile updated: ${username} (${email})`;
    });

  // Address book form submission
  document
    .getElementById("addressForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const address = document.getElementById("address").value;
      const city = document.getElementById("city").value;
      const state = document.getElementById("state").value;
      const zip = document.getElementById("zip").value;

      const savedAddresses = document.getElementById("savedAddresses");
      const li = document.createElement("li");
      li.textContent = `${address}, ${city}, ${state} ${zip}`;
      savedAddresses.appendChild(li);

      document.getElementById("addressMessage").textContent =
        "Address added successfully!";
      document.getElementById("addressForm").reset(); // Reset the form
    });

  // Initialize first tab as active
  tabs[0].click();
});
