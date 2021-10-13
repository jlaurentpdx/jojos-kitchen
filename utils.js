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
