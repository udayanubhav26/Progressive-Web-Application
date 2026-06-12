let cart = JSON.parse(localStorage.getItem("cart")) || [];
// 🔍 SEARCH TOGGLE
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");

searchToggle.addEventListener("click", (e) => {
    e.preventDefault();
    searchBox.classList.toggle("active");
    document.getElementById("searchInput").focus();
});

// 🛒 ADD TO CART (EVENT DELEGATION)
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("add-to-cart")) {

        let name = e.target.dataset.name;
        let price = parseFloat(e.target.dataset.price);
        let image = e.target.dataset.image;

        addToCart(name, price, image);
    }
});

function addToCart(name, price, image) {
    let item = cart.find(p => p.name === name);

    if (item) {
        item.qty++;
    } else {
        cart.push({
            name,
            price,
            image,
            qty: 1
        });
    }

    saveCart();
    updateCartCount();
}

// 💾 SAVE CART
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// 🔢 UPDATE NAV CART COUNT
function updateCartCount() {
    let count = cart.reduce((sum, item) => sum + item.qty, 0);

    let cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = count;
    }
}

// 🚀 INIT
updateCartCount();