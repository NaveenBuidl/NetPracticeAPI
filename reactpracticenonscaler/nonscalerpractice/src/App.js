import logo from './logo.svg';
import './App.css';

function App() { 
      
      // Example of JSX curly braces for a string
      // var greeting ='Naveen Welcome to React';
      // return (
      //   <h1> greeting {greeting} </h1>
      // );

      // Example of JSX curly braces for a complex object
      // const person = {
      //   firstName: "Naveen",
      //   lastName: "Mandava",
      //   age: 44,
      //   isStudent: true
      // };
      // return (
      //   <div className="App">
      //   <h1> {person.firstName} </h1>
      //   </div>
      // );

      // Example of JSX curly braces for a list of objects
      function Person(firstName, lastName, age, isStudent) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.isStudent = isStudent;
      }

      const user1 = new Person("Agata", "Rutkowska", 38, false);
      const user2 = new Person("Naveen", "Mandava", 44, true);
      const user3 = new Person("Tabby", "Brown", 6, true);

      // const users =[ {user1}, {user2}];
      // The mistake in this code is that you are using curly braces to wrap the user objects inside the users array. 
      // This will create an array of objects with user1 and user2 as keys, not values. 
      const users =[ user1, user2, user3];

      // return (
      //   <h1>
      //     {users.map (u => <li> {u.firstName} </li> )}
      //     {/* {users.map( function (u) { */}
      //     {/* {users.map( (u) => {
      //       return <li> {u.firstName} </li>
      //       // return {u.firstName} // cause an error, as JSX expects either a string or a JSX element inside the <li> tag, not an object. You can fix this by removing the curly braces and just returning the u.firstName expression as a string.
      //       // return u.firstName
      //     })}
      //     */}
      //   </h1>
      // );
      
      // using both map and filter below
      return (
        <h1>
          {users.filter( u => u.isStudent).map (u => <li> {u.firstName} </li>)}
        </h1>
      );




      

    
  
  /*
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
        <h1> Welcome {2+2} Naveen </h1>        
      </header>
    </div>
  );
  */
}

export default App;

