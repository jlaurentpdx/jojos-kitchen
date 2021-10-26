## Lab 09 Goals: 
<!-- * Make an admin folder
    * In admin/, create an `index.html` file 
        * This HTML file should include a form with all the necessary data for adding a product
        * Form needs id -->
* In admin/, create `product-entry.js`
    * Reference form element 
    * submit.addEventListener
    * event.preventDefault() **???**
    * `new FormData` object passing in form
    * `new Product` from formData - using `form.get`
    * Call `addProduct` with the object
    * Reset the form
<!-- * Create a nav bar in the header to navigate to all pages -->

* Replace instances of { spices } with a localStorage solution
    * If productList exists on localStorage, then return that list, else if productList is null then seed localStorage from spices.js 

<!-- * In utils.js, add and test function `addProduct(product)` that puts the passed object into localStorage
    * Retrieve existing array
    * array.push(product)
    * Re-save array into localStorage
* Test should add a product, then retrieve all products and assert `deepEqual` productList[-1] === product
    * Call `addProduct`
    * Check localStorage to see if product was added -->

* *STRETCH*: Remove a Product