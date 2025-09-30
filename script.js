
// Add event listener to the navigation menu
document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.querySelector("nav ul");
    navMenu.addEventListener("click", function(event) {
        if (event.target.tagName === "A") {
            event.preventDefault();
            const href = event.target.getAttribute("href");
            history.pushState({}, "", href);
            window.dispatchEvent(new Event("popstate"));
        }
    });
});

// Add event listener to the buy now buttons
document.addEventListener("DOMContentLoaded", function() {
    const buyNowButtons = document.querySelectorAll(".product button");
    buyNowButtons.forEach(function(button) {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const productId = event.target.getAttribute("data-product-id");
            console.log(`Buy Now button clicked for product ${productId}`);
            // Add logic here to handle the buy now button click
        });
    });
});

