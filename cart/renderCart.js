import { spices } from '../data/spices.js';
import { cart } from '../data/cart-data.js';
import { findById } from '../utils.js';
import { renderLineItems } from '../render-line-items.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cart) {
    const spiceData = findById(cartItem.id, spices);

    const tr = renderLineItems(cartItem, spiceData);
    tbody.appendChild(tr);
}