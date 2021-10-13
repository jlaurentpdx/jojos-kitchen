export function renderSpice(spice) {
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
    price.textContent = `Price: $${(spice.price.toFixed(2))}`;

    spiceCard.append(
        spiceHeader, 
        img, 
        description,
        price
    );

    return spiceCard;
}