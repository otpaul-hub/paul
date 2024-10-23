document.getElementById('checkoutForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const state = document.getElementById('state').value.trim();
    const zip = document.getElementById('zip').value.trim();
    const cardNumber = document.getElementById('cardNumber').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Basic validation for empty fields
    if (!name || !address || !city || !state || !zip || !cardNumber || !expiryDate || !cvv) {
        errorMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Validate card number length
    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        errorMessage.textContent = "Invalid card number. Must be 16 digits.";
        return;
    }

    // Validate expiry date format (MM/YY)
    const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryDate.match(expiryPattern)) {
        errorMessage.textContent = "Invalid expiry date. Format should be MM/YY.";
        return;
    }

    // Validate CVV (should be 3 digits)
    if (cvv.length !== 3 || isNaN(cvv)) {
        errorMessage.textContent = "Invalid CVV. Must be 3 digits.";
        return;
    }

    errorMessage.textContent = "";
    alert("Payment successful! The product willbe deliverd between 1-4months.");
});
