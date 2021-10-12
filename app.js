import { renderSpice } from './data/renderSpices.js';
import { spices } from './data/spices.js';

const spiceList = document.getElementById('spice-list');

for (let spice of spices) {
    const spiceCard = renderSpice(spice);
    spiceList.append(spiceCard);
}