// Dummy Product Data
const products = [
  {
    id: 1,
    name: "Smartphone",
    category: "electronics",
    image: "smartphone.jpg",
  },
  { id: 2, name: "Laptop", category: "electronics", image: "laptop.jpg" },
  { id: 3, name: "T-shirt", category: "fashion", image: "tshirt.jpg" },
  { id: 4, name: "Blender", category: "home", image: "blender.jpg" },
  {
    id: 5,
    name: "Headphones",
    category: "electronics",
    image: "headphones.jpg",
  },
  { id: 6, name: "Sofa", category: "home", image: "sofa.jpg" },
  { id: 7, name: "Watch", category: "fashion", image: "watch.jpg" },
];

function displayProducts(filteredProducts) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  filteredProducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <button onclick="viewProduct(${product.id})">View Product</button>
        `;

    productList.appendChild(productCard);
  });
}

// Search functionality
function searchProducts() {
  const query = document.getElementById("search").value.toLowerCase();
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
}

// Filter by category
function filterProducts() {
  const category = document.getElementById("category").value;
  const filteredProducts =
    category === "all"
      ? products
      : products.filter((product) => product.category === category);
  displayProducts(filteredProducts);
}

// Redirect to Product Page (Placeholder)
function viewProduct(productId) {
  window.location.href = `pd.html`;
}

// Display all products on initial load
window.onload = () => displayProducts(products);
