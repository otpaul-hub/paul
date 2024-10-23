// Dummy Product Data
const products = [
    { id: 1, name: 'Smartphone', description: 'A great smartphone with a powerful camera.', image: 'smartphone.jpg', price: '$699' },
    { id: 2, name: 'Laptop', description: 'A fast and powerful laptop for all your needs.', image: 'laptop.jpg', price: '$1299' },
    { id: 3, name: 'T-shirt', description: 'A stylish and comfortable T-shirt.', image: 'tshirt.jpg', price: '$25' },
    { id: 4, name: 'Blender', description: 'A high-performance blender for smoothies.', image: 'blender.jpg', price: '$89' },
    { id: 5, name: 'Headphones', description: 'Noise-canceling headphones with great sound quality.', image: 'headphones.jpg', price: '$199' },
    { id: 6, name: 'Sofa', description: 'A modern and comfortable sofa.', image: 'sofa.jpg', price: '$799' },
    { id: 7, name: 'Watch', description: 'A stylish and elegant wristwatch.', image: 'watch.jpg', price: '$299' },
];

// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get('productId');
const product = products.find(p => p.id == productId);

function displayProductDetails() {
    const productDetails = document.getElementById('product-details');

    if (product) {
        productDetails.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        `;
    } else {
        productDetails.innerHTML = '<p>Product not found.</p>';
    }
}

window.onload = displayProductDetails;
