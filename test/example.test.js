import { spices } from '../data/spices.js';
import * as utils from '../utils.js';

const test = QUnit.test;
 
const fakeCart = [{ id: '1', qty: 3 }, { id: '4', qty: 2 }];

//  fakeCart contents:
//      id: Cinnamon, Cloves
//      price: 5, 5
//      total: 15, 10
//      orderTotal: 25

test('renderSpice should return HTML snippet', (expect) => {
    utils.clearCart();

    const expected = `<li id="1" class="spice-card"><h2>Cinnamon</h2><img src="../jojos-kitchen/assets/cinnamon.jpg"><p class="description">Organic fine-ground cinnamon. Add a dash for that Taco Bell-desert twist... twist.</p><p>Price: $5.00</p><button id="1" class="add-button">Buy</button><p class="hidden"></p></li>`;
    const cinnamon = spices[0];
    const actual = utils.renderSpice(cinnamon).outerHTML;
    
    expect.equal(actual, expected);
});

test('findById should return the item matching the id', (expect) => {
    utils.clearCart();

    const expected = {
        id: '1',
        name: 'Cinnamon',
        img: '../jojos-kitchen/assets/cinnamon.jpg',
        description: 'Organic fine-ground cinnamon. Add a dash for that Taco Bell-desert twist... twist.', 
        price: 5
    };
    const actual = utils.findById('1', spices);

    expect.deepEqual(actual, expected);
});

test('renderLineItems should produce a table row with line item info', (expect) => {
    utils.clearCart();

    const spiceData = utils.findById(fakeCart[0].id, spices);

    const expected = `<tr><td>Cinnamon</td><td>$5.00</td><td>3</td><td>$15.00</td></tr>`;
    const actual = utils.renderLineItems(fakeCart[0], spiceData).outerHTML;

    expect.equal(actual, expected);
});

test('calcOrderTotal should return the sum of all cart items', (expect) => {
    utils.clearCart();

    const expected = 25; // sum of fake cart
    const actual = utils.calculateOrderTotal(fakeCart, spices);

    expect.equal(actual, expected);
});

test('getCart should return an array of existing cart items', (expect) => {
    utils.clearCart();

    utils.addItem('1');
    utils.addItem('1');
    utils.addItem('2');
    const cart = utils.getCart();
    const expected = [
        { id: '1', qty: 2 },
        { id: '2', qty: 1 }
    ];

    expect.deepEqual(cart, expected);
});

test('getCart should return an empty array if the cart is empty', (expect) => {
    utils.clearCart();

    const cart = utils.getCart();

    expect.deepEqual(cart, []);
});

test('addItem should increment the quantity of an existing item in the cart', (expect) => {
    utils.clearCart();

    utils.addItem('1');
    utils.addItem('1');
    const cart = utils.getCart();
    const expected = [{ id: '1', qty: 2 }];

    expect.deepEqual(cart, expected);
});

test('addItem should be able to add a new item to the cart with a quantity of 1', (expect) => {
    utils.clearCart();

    utils.addItem('2');
    const cart = utils.getCart();
    const expected = [{ id: '2', qty: 1 }];

    expect.deepEqual(cart, expected);
});

test('clearCart should empty the cart and return an empty array', (expect) => {
    utils.clearCart();

    const cart = utils.getCart();
    const expected = [];

    expect.deepEqual(cart, expected);
});

test('addProduct should store an item in local storage at the end of a localStorage PRODUCTS array', (expect) => {
    const newProduct = utils.addProduct(spices[0]);
    const productString = localStorage.getItem('PRODUCTS') || '[]';
    const productsList = JSON.parse(productString);

    const expected = newProduct;
    expect.deepEqual(productsList[-1], expected);
});

test('clearProducts should remove PRODUCTS from local storage and return an empty array', (expect) => {
    utils.clearProducts();

    const productString = localStorage.getItem('PRODUCTS') || '[]';
    const productList = JSON.parse(productString);

    const expected = [];

    expect.deepEqual(productList, expected);
});

test('getAndSeedProducts should retrieve an array of existing products from localStorage', (expect) => {
    utils.clearProducts();
    utils.addProduct({ id: '0', name: 'Cayenne' });
    const productList = utils.seedAndGetSpices();

    const expected = [{ id: '0', name: 'Cayenne' }];

    expect.deepEqual(productList, expected);
});

test('getAndSeedProducts should seed PRODUCTS in localStorage from spices.js if PRODUCTS is empty', (expect) => {
    utils.clearProducts();
    const productList = utils.seedAndGetSpices();

    const expected = spices;

    expect.deepEqual(productList, expected);
});