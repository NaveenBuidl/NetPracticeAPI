import {useState} from "react";
// curly braces above as it is a named export
// import { useState } from "react";
import ProductCard from "../ProductCard";
// import ProductCard from "../ProductCard/ProductCard"; 

// hardcoded json here for products
const products = [
    {
      id: 1,
      title: "Apple iPhone 14",
      price: "Rs. 1,00,000"
    },
    {
      id: 2,
      title: "Apple iPhone 13",
      price: "Rs. 70,000"
    },
    {
      id: 3,
      title: "Google Pixel 7",
      price: "Rs. 50,000"
    },
    {
      id: 4,
      title: "Nokia 1100",
      price: "Rs. 2,000"
    },
    {
      id: 5,
      title: "Samsung Galaxy S10",
      price: "Rs. 1,00,000"
    },
    {
      id: 6,
      title: "Sony Xperia S10",
      price: "Rs. 1,00,000"
    }
];

function getProductsApi(callback) {
  console.log("1. API called");
  setTimeout( function() {
    // var gp = products;
    // return products;
    callback(products);
  }, 1000);
}

// api call in order to get the data
export default function Products(){
  // let a = useState([]);
  let [gp, setGp] = useState([]); // destructured
  // The code destructures this array into two variables: gp and setGp. 
  // gp is the initial state value, which is an empty array, 
  // and setGp is the function that can change the state value by 
  // passing a new value as an argument.
  // let gp = []; // state var
  console.log("2. API call started");
  getProductsApi( function(res){
    // gp = res;
    setGp(res);
    console.log(gp);
    console.log("3. API call ended");
  });
  // console.log(gp);
    return (
        <div>
            PRODUCTS
            {/* <ProductCard name="1" price="20" />
            <ProductCard name="2" price="30" />
            <ProductCard name="3" price="40" />
            <ProductCard name="4" price="50" /> */}
            {/*}
            {products.map( (eachitem) => {
                return  <ProductCard product={eachitem} />;
            } )} 
            */} 
            {/* helps list all the products; Nitesh point - can I say I am maaping each product with a ProductCard component and returning it to parent compoentn */}
            {/*{products.map( (product) => { */}
            {/* gp is still undefined when we reach map */}
            {gp.map( (product) => {   
                return  <ProductCard product={product} key={product.id} />;
            } )}        
        </div>
    );
}

// state variable in react - properties
// A
// I am a special kind of variable
// whose value once set would cause a re-render of the component
// B
// it would persist the value of the var on every re-render

// Mounting phase - when function/component called first time
// index.js => app.js => products.js => productCard.js
// Rendering phase

// mounting - first time
// rendering - at state change

// Hooks in JS are nothing but a simple JS helper function for React components
// like a menu helps a waiter not do repetitive stuff
// repetititve stuff in React could be delegated to a helper function/ Hook
// syntax is useX
// 2 types of hooks: custom and system-defined
// useState is system-defined

// Hook rules
// 1. Hooks need to be at the top of the component
// 2. Hooks cant be inside if conditions or for loops, basically not dependent
// 3. Hooks cant be used in order to render a UI, so cant return some JSX, no returns
// hv to do simple stuff

// useState (default value) and returns a stateVar and a setter fn for the state var
// return (stateVar, setterFn)


