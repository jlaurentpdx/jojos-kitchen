import * as utils from '../utils.js';

const spices = utils.getProducts();
const cart = utils.getCart();

const tbody = document.getElementById('table-body');

for (let cartItem of cart) {
    const spiceData = utils.findById(cartItem.id, spices);

    const tr = utils.renderLineItems(cartItem, spiceData);
    tbody.appendChild(tr);
}

const orderTotal = utils.calculateOrderTotal(cart, spices);
const tdOrderTotal = document.getElementById('order-total');

tdOrderTotal.textContent = utils.toUSD(orderTotal);

const orderButton = document.getElementById('order-button');

if (cart.length <= 0) orderButton.disabled = true;

orderButton.addEventListener('click', () => {
    utils.clearCart();
    window.location.replace('..');
});