// Initialize cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to render cart items
function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items
    let subtotal = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <p>${item.name} - $${item.price.toFixed(2)}</p>
        `;
        cartItemsContainer.appendChild(itemElement);
        subtotal += item.price; // Add to subtotal
    });

    // Calculate tax and total
    const tax = subtotal * 0.10;
    const total = subtotal + tax;

    // Update totals in the DOM
    document.getElementById('subtotal').innerText = `$${subtotal.toFixed(2)}`;
    document.getElementById('tax').innerText = `$${tax.toFixed(2)}`;
    document.getElementById('total').innerText = `$${total.toFixed(2)}`;
}

// Event listener for Buy Now buttons
const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', function() {
        const itemName = this.getAttribute('data-name');
        const itemPrice = parseFloat(this.getAttribute('data-price'));

        // Add item to cart
        cart.push({ name: itemName, price: itemPrice });
        localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage

        alert(`${itemName} added to cart!`);
    });
});

// Checkout button functionality (optional)
document.getElementById('checkout-btn').addEventListener('click', function() {
    alert('Checkout not implemented yet.'); // Placeholder for checkout logic
});

// Render the cart on page load
renderCart();
