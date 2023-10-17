import "./index.css";
import {useState} from "react";
import Products from "./Products";
// import Products from "./Products/Products"; 
// import AddToCart from "./AddToCart"; NOPES as it will add button at top
// Cart will be added here for global availability as there maybe multiple components and hence 
// availability in a global component

export default function App() {
  const [cart, setCart] = useState({});
  return (
    <div className="App">
      
      <Products />
    </div>
  );
}












/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          
        </a>
        <h1> Welcome Naveen Mandava </h1>
      </header>
    </div>
  );
}

export default App;

*/

// import React from 'react';

/*
export default class App extends React.Component {
  render() {
    
    const users = [
      { name: 'Robin' },
      { name: 'Markus' },
    ];

    const showUsers = true;

//    if (!showUsers) {
//      return null;
//    }
//    return (
//      <ul>
//        {users.map(user => <li>{user.name}</li>)}
//      </ul>
//    );

    

    return (
      <div>
        {
          showUsers ? (
            <ul>
              {users.map(user => <li>{user.name}</li>)}
            </ul>
          ) : (
            null
          )
        }
      </div>
    );  


  }
}
*/
// Import React from 'react'


// Import React from 'react'
// CONDITIONAL RENDERING IN REACT
/*

import React from 'react';

// Define a functional component named App
function App() {
  // Define a state variable named showGreeting using the useState hook
  // The initial value is true
  const [showGreeting, setShowGreeting] = React.useState(true);

  // Define a function named toggleGreeting that toggles the value of showGreeting
  function toggleGreeting() {
    setShowGreeting(prev => !prev);
  }

  // Return a JSX element that represents the UI of the component
  return (
    <div>
      {// Use a button element to call the toggleGreeting function when clicked }
      <button onClick={toggleGreeting}>Toggle Greeting</button>
      {// Use the logical && operator to conditionally render a h1 element with a greeting message }
      {// If showGreeting is true, it will render the h1 element; otherwise, it will render nothing }
      {showGreeting && <h1>Hello, React!</h1>}
    </div>
  );
}

// Export the App component as default
export default App;
*/