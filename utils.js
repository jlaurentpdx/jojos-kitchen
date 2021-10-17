import { spices } from './data/spices.js';

export function findById(id, items){
    for (let item of items) {
        if (item.id === id) return item;
    }
}

export function calculateOrderTotal(cart, productList) {
    let orderTotal = 0;

    for (let item of cart) {
        const product = findById(item.id, productList);
        orderTotal += product.price * item.qty;
    }
    
    return orderTotal;
}

export function toUSD(value) {
    return value.toLocaleString('en-us', { style: 'currency', currency: 'USD' });
}

export function getCart() {
    const cartString = localStorage.getItem('CART') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function clearCart() {
    return localStorage.removeItem('CART');
}

export function addItem(id) {
    const cart = getCart();
    const cartItem = findById(id, cart);
    let newItemQty = 0;

    if (cartItem) {
        cartItem.qty++;
    } else { 
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
        newItemQty++;
    } 

    const stringCart = JSON.stringify(cart);
    localStorage.setItem('CART', stringCart);
    
    return (!newItemQty) ? cartItem.qty : newItemQty;
}

export function renderLineItems(cartItem, productData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = productData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(productData.price);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = toUSD(productData.price * cartItem.qty);

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}

export function renderSpice(spice) {
    const cart = getCart();
    const foundItem = findById(spice.id, cart);

    const spiceCard = document.createElement('li');
    spiceCard.setAttribute('id', spice.id);
    spiceCard.classList.add('spice-card');

    const spiceHeader = document.createElement('h2');
    spiceHeader.textContent = spice.name;

    const img = document.createElement('img');
    img.src = spice.img;

    const description = document.createElement('p');
    description.textContent = spice.description;
    description.classList.add('description');

    const price = document.createElement('p');
    price.textContent = `Price: ${toUSD(spice.price)}`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Buy';
    addButton.id = spice.id;
    addButton.classList.add('add-button');

    const qtyInCart = document.createElement('p');
    if (foundItem) qtyInCart.textContent = `In Cart: ${foundItem.qty}`;
    else qtyInCart.classList.add('hidden');

    addButton.addEventListener('click', () => {
        qtyInCart.classList.remove('hidden');
        qtyInCart.textContent = `In Cart: ${addItem(spice.id)}`;
    });

    spiceCard.append(
        spiceHeader, 
        img, 
        description,
        price,
        addButton,
        qtyInCart
    );

    return spiceCard;
}

export function addProduct(product) {
    const productString = localStorage.getItem('PRODUCTS') || '[]';
    const productList = JSON.parse(productString);

    productList.push(product);

    const stringProduct = JSON.stringify(productList);
    localStorage.setItem('PRODUCTS', stringProduct);
}

export function seedAndGetSpices() {
    const productString = localStorage.getItem('PRODUCTS') || '[]';
    let productList = JSON.parse(productString);

    if (productString === '[]') productList = spices;

    const stringProduct = JSON.stringify(productList);
    localStorage.setItem('PRODUCTS', stringProduct);

    return productList;
}

export function clearProducts() {
    return localStorage.removeItem('PRODUCTS');
}