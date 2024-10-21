document.addEventListener('DOMContentLoaded', function() {
    fetchFeaturedProducts();
    fetchManufacturers();
});

async function fetchFeaturedProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();
        const featuredProducts = products.slice(0, 4); // Display only the first 4 products
        const productGrid = document.getElementById('product-grid');

        featuredProducts.forEach(product => {
            const productElement = createProductElement(product);
            productGrid.appendChild(productElement);
        });
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

async function fetchManufacturers() {
    try {
        const response = await fetch('manufacturers.json');
        const manufacturers = await response.json();
        const featuredManufacturers = manufacturers.slice(0, 4); // Display only the first 4 manufacturers
        const manufacturerGrid = document.getElementById('manufacturer-grid');

        featuredManufacturers.forEach(manufacturer => {
            const manufacturerElement = createManufacturerElement(manufacturer);
            manufacturerGrid.appendChild(manufacturerElement);
        });
    } catch (error) {
        console.error('Error fetching manufacturers:', error);
    }
}

function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.classList.add('product-item');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.category}</p>
        <a  href="product-details.html?id=${product.id}" class="btn">View Details</a>
    `;
    return productElement;
}

function createManufacturerElement(manufacturer) {
    const manufacturerElement = document.createElement('div');
    manufacturerElement.classList.add('manufacturer-item');
    manufacturerElement.innerHTML = `
        <img src="${manufacturer.image}" alt="${manufacturer.name}">
        <h3>${manufacturer.name}</h3>
        <p>${manufacturer.category}</p>
        <a href="#" class="btn">Learn More</a>
    `;
    return manufacturerElement;
}

// Contact Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            // For this example, we'll just log it to the console
            const formData = new FormData(contactForm);
            console.log('Form submitted with the following data:');
            for (let [key, value] of formData.entries()) {
                console.log(`${key}: ${value}`);
            }
            alert('Thank you for your message. We will get back to you soon!');
            contactForm.reset();
        });
    }
});

window.addEventListener('scroll', () => {
const logo = document.querySelector('.logo');
const img = document.querySelector('.logo img')
if (window.scrollY === 0) {
logo.classList.add('full'); // Add full class when at the top
img.classList.add('full'); // Add full class when at the top
} else {
logo.classList.remove('full'); // Remove it when scrolling down
img.classList.remove('full'); // Remove it when scrolling down
}
});
