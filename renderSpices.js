export function renderSpice(spice) {
    const spiceCard = document.createElement('div');
    spiceCard.setAttribute('id', spice.id);
    spiceCard.classList.add('spice-card');

    const spiceHeader = document.createElement('h2');
    spiceHeader.textContent = spice.name;

    const img = document.createElement('img');
    img.src = spice.img;

    const description = document.createElement('p');
    description.textContent = spice.description;

    const quantity = document.createElement('p');
    quantity.textContent = `In stock: ${spice.quantity}`;

    const price = document.createElement('p');
    price.textContent = `Price: $${spice.price}`;

    spiceCard.append(
        spiceHeader, 
        img, 
        description,
        quantity,
        price
    );

    return spiceCard;
}