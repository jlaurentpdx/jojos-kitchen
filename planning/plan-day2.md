## Lab 07: Shopping Cart

* Look up what 'munge' actually even means

### Getting Started

* Open yesterday's repo in VSCode
* Create a new branch:
    git checkout -b lab-07-cart
* Add new files and folders:
    * In root directory:
        * `utils.js`
    * New `cart/` folder:
        * `index.html`
        * `render-cart.js` _(reference Julie's demo file cart/cart.js)_
    * New `data/` folder:
        * `cart-data.js`
        * _Optional_: Move your product file (_example_ `sodas.js`) into this folder
    * Add to `styles` folder:
        * `cart.css`

### Step 0

* Make a new `index.html` file in a filder called `cart/`
    * Generate HTML using !
* Test that the page works by visiting it in the live server adding /cart/ to the end of the URL

### Step 1

* Create a static HTML table in `cart/index.html` with the following:
    * `<table>`
    * Table header: `<thead>`
        * Product Name (Name) `<th>`
        * Price
        * Quantity (QTY)
        * line item / row total (Total)
    * Table body: `<tbody>`
        * `<tr>`, `<td>`
        * static element - empty 
    * Table footer: `<tfoot>`
        * 2x empty `<td>`
        * order total `<td>`

* (Optional) Place Order button 

    ACP

### Step 2

* Make a new folder called `data/`
* in data/, make a new file called `cart.js`
* Export an array literal:
    ```js
    const cart = [{ items in the cart }]
    ```

    ACP

### Step 3

* Make a file called `utils.js` in the root directory
* In `utils.js`, create a function called `findById`
    ```js
    export const findById(id, array) {
        for (item of array) {
            if (item.id === id) return item; 
            else return null; 
        }
    }
    ```

* TDD `findById` function using `expect.deepEqual`

    ACP

### Step 4

* Make a new file in `cart/` called `render-cart.js`
* _DOM Render function for TDD - not clear on this one. May need to ask Julie to clarify?_
* In this file, import necessary data and functions, then use DOM to fill table contents for one item in our cart:
    ```js
    import { product } from '../data/products.js'
    import { cart } from '../cart-data.js'
    import { findById } from '../utils.js'

    const productData = findById([cart[0].id, product]);
    const tbody = document.getElementById('table-body');
    const tr = document.createElemet('tr');

    export function DOMRender(item, product) {
        const tdName = document.createElement('td');
        tdName.textContent = productData.name;
        // ... repeat the above two lines for tdPrice, tdQty, and tdTotal, changing names and the data source file

        tr.append(tdName, tdPrice, tdQty, tdTotal);
        tbody.appendChild(tr);
    }
    ```
* Ensure that your existing TDD from Step 3 will still pass, updating as needed until the test passes 

    ACP

### Step 5: 

* Continuing in `render-cart.js`, replace the **line** `export function DOMRender(params)` with a `for of` loop to iterate through the entire shopping cart

    ACP

Done!
