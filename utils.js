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