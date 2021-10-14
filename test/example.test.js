import { renderSpice } from '../render-spices.js';
import { spices } from '../data/spices.js';
import { renderLineItems } from '../render-line-items.js';
import { findById, getCart, addItem, clearCart, calculateOrderTotal } from '../utils.js';

const test = QUnit.test;
 
const fakeCart = [{ id: '1', qty: 3 }, { id: '4', qty: 2 }];

//  fakeCart contents:
//      id: Cinnamon, Cloves
//      price: 5, 5
//      total: 15, 10
//      orderTotal: 25

test('renderSpice should return HTML snippet', (expect) => {
    clearCart();

    const expected = `<li id="1" class="spice-card"><h2>Cinnamon</h2><img src="../jojos-kitchen/assets/cinnamon.jpg"><p class="description">Organic fine-ground cinnamon. Add a dash for that Taco Bell-desert twist... twist.</p><p>Price: $5.00</p><button id="1" class="add-button">Buy</button><p class="hidden"></p></li>`;
    const cinnamon = spices[0];
    const actual = renderSpice(cinnamon).outerHTML;
    
    expect.equal(actual, expected);
});

test('findById should return the item matching the id', (expect) => {
    clearCart();

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
    clearCart();

    const spiceData = findById(fakeCart[0].id, spices);

    const expected = `<tr><td>Cinnamon</td><td>$5.00</td><td>3</td><td>$15.00</td></tr>`;
    const actual = renderLineItems(fakeCart[0], spiceData).outerHTML;

    expect.equal(actual, expected);
});

test('calcOrderTotal should return the sum of all cart items', (expect) => {
    clearCart();

    const expected = 25; // sum of fake cart
    const actual = calculateOrderTotal(fakeCart, spices);

    expect.equal(actual, expected);
});

test('getCart should return an array of existing cart items', (expect) => {
    clearCart();

    addItem('1');
    addItem('1');
    addItem('2');
    const cart = getCart();
    const expected = [
        { id: '1', qty: 2 },
        { id: '2', qty: 1 }
    ];

    expect.deepEqual(cart, expected);
});

test('getCart should return an empty array if the cart is empty', (expect) => {
    clearCart();

    const cart = getCart();

    expect.deepEqual(cart, []);
});

test('addItem should increment the quantity of an existing item in the cart', (expect) => {
    clearCart();

    addItem('1');
    addItem('1');
    const cart = getCart();
    const expected = [{ id: '1', qty: 2 }];

    expect.deepEqual(cart, expected);
});

test('addItem should be able to add a new item to the cart with a quantity of 1', (expect) => {
    clearCart();

    addItem('2');
    const cart = getCart();
    const expected = [{ id: '2', qty: 1 }];

    expect.deepEqual(cart, expected);
});

test('clearCart should empty the cart and return an empty array', (expect) => {
    clearCart();

    const cart = getCart();
    const expected = [];

    expect.deepEqual(cart, expected);
});