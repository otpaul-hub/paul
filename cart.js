document.querySelectorAll(".increase").forEach((button) => {
  button.addEventListener("click", function () {
    const quantityInput = this.previousElementSibling;
    quantityInput.value = parseInt(quantityInput.value) + 1;
    updateTotalPrice();
  });
});

document.querySelectorAll(".decrease").forEach((button) => {
  button.addEventListener("click", function () {
    const quantityInput = this.nextElementSibling;
    if (quantityInput.value > 1) {
      quantityInput.value = parseInt(quantityInput.value) - 1;
      updateTotalPrice();
    }
  });
});

document.querySelectorAll(".remove").forEach((button) => {
  button.addEventListener("click", function () {
    this.closest(".cart-item").remove();
    updateTotalPrice();
  });
});

function updateTotalPrice() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach((item) => {
    const priceText = item.querySelector(".item-info p").textContent;
    const price = parseFloat(priceText.replace("Price: $", ""));
    const quantity = parseInt(item.querySelector(".quantity").value);
    total += price * quantity;
  });
  document.querySelector(
    ".total-price h3"
  ).textContent = `Total: $${total.toFixed(2)}`;
}

// Checkout button action
document.getElementById("checkoutBtn").addEventListener("click", function () {
  alert("Proceeding to checkout!");
});

document.getElementById("checkoutBtn").addEventListener("click", function () {
  this.onclick
});

