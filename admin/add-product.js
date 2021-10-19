import { addProduct, clearCart, clearProducts } from '../utils.js';

const newProductForm = document.getElementById('new-product-form');
const newProductAlert = document.getElementById('new-product-alert');
const clearStore = document.getElementById('clear-store');

newProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(newProductForm);
    
    const newSpice = {
        id: data.get('id'),
        name: data.get('product'),
        img: data.get('img'),
        description: data.get('description'),
        price: Number(data.get('price'))
    };

    addProduct(newSpice);

    newProductAlert.textContent = 'New product added!';
});

clearStore.addEventListener('click', () => {
    clearCart();
    clearProducts();
    alert('Store and cart items have been reset. Be sure to add new products!');
});