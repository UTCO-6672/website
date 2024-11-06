// Handle adding items to the cart
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const product = this.getAttribute('data-product');
    const price = parseFloat(this.getAttribute('data-price'));
    cart.push({ product, price });

    // Update cart icon
    alert(`${product} added to cart!`);
  });
});

// Optionally, save cart to localStorage for persistent cart across pages
window.addEventListener('beforeunload', function() {
  localStorage.setItem('cart', JSON.stringify(cart));
});
