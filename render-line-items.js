export function renderLineItems(cartItem, productData) {
    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.textContent = productData.name;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = productData.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = productData.price * cartItem.qty;

    tr.append(tdName, tdPrice, tdQty, tdTotal);

    return tr;
}