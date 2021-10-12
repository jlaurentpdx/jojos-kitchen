import { renderSpice } from '../data/renderSpices.js';
import { spices } from '../data/spices.js';
import { findById } from '../utils.js';

const test = QUnit.test;

test('renderSpice should return HTML snippet', (expect) => {
    const expected = `<li id="1" class="spice-card"><h2>Cinnamon</h2><img src="../assets/cinnamon.jpg"><p class="description">Organic fine-ground cinnamon. Add a dash for that Taco Bell-desert twist... twist.</p><p>Price: $5.00</p></li>`;
    const cinnamon = spices[0];
    const actual = renderSpice(cinnamon).outerHTML;
    expect.equal(actual, expected);
});

test('findById should return the item matching the id', (expect) => {
    const expected = {
        id: '1',
        name: 'Cinnamon',
        img: '../assets/cinnamon.jpg',
        description: 'Organic fine-ground cinnamon. Add a dash for that Taco Bell-desert twist... twist.', 
        sizeInOz: 2.45,
        price: 5
    };
    const actual = findById('1', spices);
    expect.deepEqual(actual, expected);
});

