import { getCart, renderSpice, seedAndGetSpices } from './utils.js';

const spices = seedAndGetSpices();
const spiceList = document.getElementById('spice-list');

getCart();

for (let spice of spices) {
    const spiceCard = renderSpice(spice);
    spiceList.append(spiceCard);
}
