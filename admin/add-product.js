import { addProduct } from '../utils.js';

const newProductForm = document.getElementById('new-product-form');
const newProductAlert = document.getElementById('new-product-alert');

newProductForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(newProductForm);
    
    const newSpice = {
        id: data.get('id'),
        product: data.get('product'),
        img: data.get('img'),
        description: data.get('desc'),
        price: Number(data.get('price'))
    };

    addProduct(newSpice);

    newProductAlert.textContent = 'Product added!';
    alert('new product added!');
});