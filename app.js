import { getCart, renderSpice, getProducts } from './utils.js';

const spices = getProducts();
const spiceList = document.getElementById('spice-list');

getCart();

for (let spice of spices) {
    const spiceCard = renderSpice(spice);
    spiceList.append(spiceCard);
}
