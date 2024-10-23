// script.js

// Example product data (This can come from an API or back-end database)
const products = [
  {
    name: "Smartphone",
    price: "$299",
    image: "img/product1.jpg",
  },
  {
    name: "Laptop",
    price: "$999",
    image: "img/product2.jpg",
  },
  {
    name: "Headphones",
    price: "$199",
    image: "img/product3.jpg",
  },
  {
    name: "Smart Watch",
    price: "$149",
    image: "img/product4.jpg",
  },
];

// Function to load featured products dynamically
function loadFeaturedProducts() {
  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = ""; // Clear previous products

  products.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

    productGrid.appendChild(productItem);
  });
}

// Load products when the page loads
window.onload = function () {
  loadFeaturedProducts();
};

// Search functionality
function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );

  const productGrid = document.getElementById("product-grid");
  productGrid.innerHTML = ""; // Clear previous products

  filteredProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
        `;

    productGrid.appendChild(productItem);
  });
}
