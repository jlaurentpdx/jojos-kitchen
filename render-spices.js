import { addItem, toUSD, getCart, findById } from './utils.js';

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