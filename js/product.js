// Sample Product Data
const products = [
    { id: 1, name: "Traditional Closed Door Mandir", price: 4199, image: "../images/product1.jpg",description:"Beautiful handcrafted mandir with closed doors.", material: "Solid Wood", size: "24x18x12 inches" },
    { id: 2, name: "Classic Open Door Mandir", price: 2500, image: "../images/product2.jpg",description: "Elegant mandir with open doors for easy access.", material: "Teak Wood", size: "20x15x10 inches" },
    { id: 3, name: "Contemporary Open Door Mandir ", price: 3000, image: "../images/product3.jpg", description: "Modern-style mandir with intricate carvings.", material: "Pine Wood", size: "22x16x11 inches" },
    { id: 4, name: "Classic Open Door Mandir ", price: 1500, image: "../images/product4.jpg",description: "Traditional open-door pooja mandir.", material: "MDF", size: "18x14x9 inches"  },
    { id: 5, name: "Contemporary Open Door Mandir ", price: 2500, image: "../images/product5.jpg",description: "Modern-style mandir with intricate carvings.", material: "Pine Wood", size: "22x16x11 inches" },
    { id: 6, name: "Contemporary Closed Door Mandir ", price: 3000, image: "../images/product6.jpg",description: "Modern-style mandir with intricate carvings.", material: "Pine Wood", size: "22x16x11 inches" },
    { id: 7, name: "Traditional Closed Door Mandir ", price: 3000, image: "../images/product7.jpg",description: "Traditional open-door pooja mandir.", material: "MDF", size: "18x14x9 inches"  },
    { id: 8, name: "Classic Open Door Mandir ", price: 1500, image: "../images/product8.jpg",description: "Classic open-door pooja mandir.", material: "MDF", size: "18x14x9 inches"  }
];

const productBody = document.getElementById("product-body");

// Load Products into Table
function loadProducts() {
    productBody.innerHTML = "";
    products.forEach(product => {
        productBody.innerHTML += `
            <tr>
                <td><img src="${product.image}" alt="${product.name}" width="100"></td>
                <td>
                    <em>${product.description}</em><br>
                    <strong>Material:</strong> ${product.material} <br>
                    <strong>Size:</strong> ${product.size}
                </td>
                <td><strong>${product.name}</strong></td> 
                <td>$${product.price}</td>
                <td><button class="btn" onclick="addToCart(${product.id})">Add to Cart</button></td>
            </tr>
        `;
    });
}
loadProducts();

// Search & Filter Function
function filterProducts() {
    const query = document.getElementById("search-box").value.toLowerCase();
    productBody.innerHTML = "";
    products
        .filter(product => product.name.toLowerCase().includes(query))
        .forEach(product => {
            productBody.innerHTML += `
                <tr>
                    <td><img src="${product.image}" alt="${product.name}" width="100"></td>
                    <td>
                        <strong>${product.name}</strong><br>
                        <em>${product.description}</em><br>
                        <strong>Material:</strong> ${product.material} <br>
                        <strong>Size:</strong> ${product.size}
                    </td>
                    <td>₹${product.price}</td>
                    <td><button class="btn" onclick="addToCart(${product.id})">Add to Cart</button></td>
                </tr>
            `;
        });
}

// Cart Functionality
let cartCount = 0;
function addToCart(id) {
    cartCount++;
    document.getElementById("cart-count").textContent = cartCount;
    alert("Item added to cart!");
}