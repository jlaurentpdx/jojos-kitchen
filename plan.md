## Play-by-play:

* Step 1: Create a static design for a single product in the list. Include a unique id with each product.

    ACP

* Step 2: Make a .js file for the product list (product.js)
    * Include at least 5 products
    * Give each product "object literals" - key/value pairs to describe each product
    * Store the products in a variable
    * Export the array 

    ACP

* Step 3: 
    * Create a function that generates the HTML elements for each product dynamically by passing in the object - this will essentially copy the format of our static product
* Step 3b: _Test_
    * Inspect HTML on the page, copy as a global variable, ref as var.outerHTML - remove whitespace
    * Copy object product data for the example and pass as input to function
    * Create the static example using JavaScript - start by creating the top level elememt first (`<li>`?)
    * Test should pass

    ACP

* Step 4 (in products.js)
    * Import data and renderProduct DOM function
    * Identify List element for products to be placed
    * Loop through data by passing to the renderProduct function and storing it in a variable, then append to the top-level list element

    ACP
        
