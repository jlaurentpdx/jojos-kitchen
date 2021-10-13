import { renderSpice } from '../render-spices.js';
import { spices } from '../data/spices.js';
import { renderLineItems } from '../render-line-items.js';
import { findById, getCart, addItem } from '../utils.js';

const test = QUnit.test;

test('example', (expect) => {
    const expected = true;
    const actual = true;
    expect.equal(actual, expected);
});

test('renderSpice should return HTML snippet', (expect) => {
    const expected = `<li id="1" class="spice-card"><h2>Cinnamon</h2><img src="../jojos-kitchen/assets/cinnamon.jpg"><p class="description">Organic fine-ground cinnamon. Add a dash for that Taco Bell-desert twist... twist.</p><p>Price: $5.00</p></li>`;
    const cinnamon = spices[0];
    const actual = renderSpice(cinnamon).outerHTML;
    expect.equal(actual, expected);
});

test('findById should return the item matching the id', (expect) => {
    const expected = {
        id: '1',
        name: 'Cinnamon',
        img: '../jojos-kitchen/assets/cinnamon.jpg',
        description: 'Organic fine-ground cinnamon. Add a dash for that Taco Bell-desert twist... twist.', 
        sizeInOz: 2.45,
        price: 5
    };
    const actual = findById('1', spices);
    expect.deepEqual(actual, expected);
});

test('renderLineItems should produce a table row with line item info', (expect) => {
    const spiceData = findById(cart[0].id, spices);

    const expected = `<tr><td>Cinnamon</td><td>5</td><td>6</td><td>30</td></tr>`;
    const actual = renderLineItems(cart[0], spiceData).outerHTML;

    expect.equal(actual, expected);
});

test('getCart should return the cart if it exists', (expect) => {
    localStorage.removeItem('CART');
    const cart = getCart();
    expect.deepEqual(cart, []);
});

test('addItem should increment the quantity of the item in the cart', (expect) => {
    localStorage.removeItem('CART');
    
    const expected = [{ id: 1, qty: 1 }];
    
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);
});

test('addItem should increment the quantity if there is nothing in the cart', (expect) => {
    localStorage.removeItem('CART');
    
    const expected = [{ id: 1, qty: 1 }];
    
    addItem('1');
    const cart = getCart();
    expect.deepEqual(cart, expected);
});

