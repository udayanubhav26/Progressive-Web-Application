let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    let container = document.getElementById("cart-container");
    container.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        container.innerHTML += `
    <div class="cart-item">
        <img src="${item.image}">

        <div class="cart-info">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <p>Qty: ${item.qty}</p>
        </div>

        <button class="remove-btn" onclick="removeItem(${index})">
            Remove
        </button>
    </div>
`;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

loadCart();