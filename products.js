let allProducts = [];

document.addEventListener('DOMContentLoaded', function() {
    fetchProducts();

    const searchInput = document.getElementById('search');
    const categoryFilter = document.getElementById('category-filter');

    searchInput.addEventListener('input', filterProducts);
    categoryFilter.addEventListener('change', filterProducts);
});

async function fetchProducts() {
    try {
        const response = await fetch('products.json');
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

function displayProducts(products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productElement = createProductElement(product);
        productGrid.appendChild(productElement);
    });
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <a href="product-details.html?id=${product.id}" class="btn">View Details</a>
    `;
    return productElement;
}

function filterProducts() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const selectedCategory = document.getElementById('category-filter').value;

    const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                              product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}