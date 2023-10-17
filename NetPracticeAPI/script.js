// This script fetches product data from the Fake Store API, 
// processes the JSON response, 
// and dynamically creates HTML elements for each product. 
// These product elements are then appended to the product-box container in the HTML, 
// displaying the products on the webpage.

document.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // Code inside this block will execute after the DOM is fully loaded
    // Your code goes here...

    // Fetch products from the given API
    //  Initiates a request to the specified URL (Fake Store API) to get product data.
    fetch('https://fakestoreapi.com/products')
        // Response handling 
        // Processes the response by converting it to JSON format. The response object's json() method returns a promise.
        .then(response => response.json())
        // Receives the parsed JSON data (products) as an argument and processes it.
        .then(products => {

            // Handle the products data here
            // Gets the DOM element with the ID product-box where the products will be displayed.
            const productBox = document.getElementById('product-box');

            // Loop through the products and create HTML elements for each product
            // Iterates through the products received from the API.
            products.forEach( i => {

                // debug
                // console.log('Image URL:', i.image);// Log the image URL

                // // Create a new div element for each product
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
                // Populate the div with product information
                // Uses template literals to create an HTML structure with the product's image, title, description, and price.
                productCard.innerHTML = `
                    <img src="${i.image}" alt="${i.title}">
                    <h2> ${i.title} </h2>
                    <p> ${i.description} </p>
                    <span> $${i.price} </span>
                `;
                // Append the product div to the product container
                //  Appends the newly created product <div> to the productBox container, displaying the product on the webpage.
                productBox.appendChild(productCard)


            });


        })
        // Catches any errors that occur during the fetch operation.
        .catch(error => {
            console.error('Error fetching data:', error);
        });
  
});





