// // Show Order Details Alert
// function showOrderDetails() {
//     const itemName = document.getElementById('name').textContent;
//     const itemPrice = document.getElementById('price').textContent;
//     const itemDesc = document.getElementById('desc').textContent;
//     document.getElementById('order-item-name').textContent = itemName;
//     document.getElementById('order-item-price').textContent = 'Rs: ' + itemPrice;
//     document.getElementById('order-item-desc').textContent = itemDesc;
//     document.getElementById('quantity').textContent = 1;
//     document.getElementById('order-alert').style.display = 'block';

// }

// // Quantity Control
// let quantity = 1;

// function increaseQuantity() {
//     quantity++;
//     document.getElementById('quantity').textContent = quantity;
// }

// function decreaseQuantity() {
//     if (quantity > 1) {
//         quantity--;
//         document.getElementById('quantity').textContent = quantity;
//     }
// }

// // Close the Order Details Box when Buy is confirmed
// document.querySelector('.confirm-buy-btn').addEventListener('click', () => {
//     alert('Order confirmed! Quantity: ' + quantity);
//     document.getElementById('order-alert').style.display = 'none';
// });
// Function to show order details
function showOrderDetails(button) {
    // Get the parent 'item' container
    const item = button.closest('.item');
    
    // Retrieve the data from the clicked item using the 'data-*' attributes
    const itemName = item.querySelector('.item-name').getAttribute('data-name');
    const itemPrice = item.querySelector('.item-price').getAttribute('data-price');
    const itemDesc = item.querySelector('.item-desc').getAttribute('data-desc');
    
    // Set the values in the order alert popup
    document.getElementById('order-item-name').textContent = itemName;
    document.getElementById('order-item-price').textContent = 'Price: ' + itemPrice;
    document.getElementById('order-item-desc').textContent = itemDesc;
    document.getElementById('quantity').textContent = 1; // Reset the quantity to 1
    document.getElementById('order-alert').style.display = 'block';
}

// Quantity control
let quantity = 1;

function increaseQuantity() {
    quantity++;
    document.getElementById('quantity').textContent = quantity;
}

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById('quantity').textContent = quantity;
    }
}

// Close the order details box when "Buy" is confirmed
document.querySelector('.confirm-buy-btn').addEventListener('click', () => {
    alert('Order confirmed! Quantity: ' + quantity);
    document.getElementById('order-alert').style.display = 'none';
});
function togglePaymentMethod(method) {
    if (method === 'card') {
        document.getElementById('card-details').style.display = 'block';
        document.getElementById('delivery-address').style.display = 'none';
    } else {
        document.getElementById('card-details').style.display = 'none';
        document.getElementById('delivery-address').style.display = 'block';
    }
}
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
