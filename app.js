import { renderSpice } from './render-spices.js';
import { spices } from './data/spices.js';
import { getCart } from './utils.js';

const spiceList = document.getElementById('spice-list');

getCart();

for (let spice of spices) {
    const spiceCard = renderSpice(spice);
    spiceList.append(spiceCard);
}
