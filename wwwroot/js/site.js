// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Example: Add to cart functionality
const addToCartButtons = document.querySelectorAll('.product button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const productName = product.querySelector('h2').textContent;
        const productPrice = product.querySelector('p:last-child').textContent;
        console.log(`Added ${productName} to cart. Price: ${productPrice}`);
    });
});