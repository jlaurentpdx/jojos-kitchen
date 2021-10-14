import { spices } from '../data/spices.js';
import { findById, calculateOrderTotal, getCart, toUSD, clearCart } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

const cart = getCart();

const tbody = document.getElementById('table-body');

for (let cartItem of cart) {
    const spiceData = findById(cartItem.id, spices);

    const tr = renderLineItems(cartItem, spiceData);
    tbody.appendChild(tr);
}

const orderTotal = calculateOrderTotal(cart, spices);
const tdOrderTotal = document.getElementById('order-total');

tdOrderTotal.textContent = toUSD(orderTotal);

const orderButton = document.getElementById('order-button');

if (cart.length <= 0) orderButton.disabled = true;

orderButton.addEventListener('click', () => {
    clearCart();
    window.location.replace('..');
});