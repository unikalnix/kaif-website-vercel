document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  if (productId) {
    fetchProductDetails(productId);
  } else {
    displayError("Product not found");
  }
});

async function fetchProductDetails(productId) {
  try {
    const response = await fetch("products.json");
    const products = await response.json();
    const product = products.find((p) => p.id === productId);

    if (product) {
      displayProductDetails(product);
    } else {
      displayError("Product not found");
    }
  } catch (error) {
    console.error("Error fetching product details:", error);
    displayError("Error loading product details");
  }
}

function displayProductDetails(product) {
  const productDetailsElement = document.getElementById("product-details");
  productDetailsElement.innerHTML = `
    <div class="product-info">
    <div class="product-image">
        <img src="${product.image}" alt="${product.name}">
    </div>
            <h1>${product.name}</h1>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>ID:</strong> ${product.id}</p>
            <p>${product.description}</p>
            <button class="btn" onclick="window.location.href='products.html'">Back to Products</button>
        </div>
    `;
}

function displayError(message) {
  const productDetailsElement = document.getElementById("product-details");
  productDetailsElement.innerHTML = `<p class="error">${message}</p>`;
}
