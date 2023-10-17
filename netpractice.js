
// JAVASCRIPT FUNDAMENTALS BEFORE LEARNING REACT

/* // BEGIN
// Variable level declarations

function foo() {
    for (var i =0; i<5; i++) { // function level declaration
    // for (let i =0; i<5; i++) { // block level declaration
        console.log(i);
    }
    console.log(i);
}

foo();

// Use default const > let > var unless u want to hv let in a for loop to increment the iterator
// var's scope is function in which the variable is declared
// let and const are the block in which the variable is declared
// block scope is what you get when you use if statements, for statements or write code inside curly brackets



// Binary operators
// Arithmetic Operators
console.log("** Arithmetic Operators**")
console.log("2 + 3 = " + (2 + 3))
console.log("2 - 3 = " + (2 - 3))
console.log("2 * 3 = " + (2 * 3))
console.log("6 / 3 = " + (6 / 3))
console.log("7 / 3 = " + (7 / 3))

// Assignment Operators
console.log("\n** Assignment Operators**\n")
let x = 6;
console.log("x = " + x)
console.log(x += 1);
console.log(x -= 1);
console.log(x *= 3);
console.log( x /= 3);



//Logical Operators
console.log("\n****Logical Operators****\n")
console.log("1 OR 1 = " + (1 || 1)) // 1 OR 1
console.log("1 OR 0 = " + (1 || 0)) // 1 OR 0
console.log("0 OR 0 = " + (0 || 0)) // 0 OR 0
console.log("1 AND 1 = " + (1 && 1)) // 1 AND 1
console.log("1 AND 0 = " + (1 && 0)) // 1 AND 0
console.log("0 AND 0 = " + (0 && 0)) // 0 AND 0

console.log(!true)  // NOT TRUE
console.log(!1)     // NOT TRUE // In JavaScript, the integer 1 is considered truthy, so the logical NOT of 1 is false.
console.log(!false) // NOT FALSE
console.log(!0)     // NOT FALSE // In JavaScript, the integer 0 is considered falsy, so the logical NOT of 0 is true.



//Comma operator
console.log("\n****Comma Operator****")
// The Comma operator evaluates each operand from left to right and returns the value of right most operand.
var a = 4;
a = (a++, a);
console.log("The value for expression with comma operator is: " + a) //returns 5



//Comparison operators
console.log("\n****Comparison Operators****")
console.log(1 > 2) //false
console.log(1 < 2) //true
console.log(1 == 1) //true
console.log(1 != 1) //false



//Bitwise Operator
console.log("\n****Bitwise Operators****")
console.log("Bitwise AND of 5 and 1: " + (5 & 1)) //returns 1
console.log("Bitwise OR of 5 and 1: " + (5 | 1)) // returns 5 
console.log("Bitwise XOR of 5 and 1: " + (5 ^ 1)) //returns 4

//String Operator
console.log("\n****String Operator****")
console.log("Concatenation" + " (+)" + " operator in action")



// double equals == and deep equals ===
// The operator === is commonly referred as Deep Equals in JavaScript. 
// The only difference between double equals == and deep equals is that 
// the former does not perform type comparison but in fact, converts the type of one of the operands to make their types same. 
// Deep equals, on the other hand, returns false if both types are not the same.
console.log(1 == 1);
console.log('1' == 1);
console.log( 1 === 1);
console.log('1' === 1);



// Ternary Operator - Conditional
// Syntax 
// condition ? value if true : value if false
function gfg() {
    let marks = 40;
    
    // single conditional operator
    // let result = (marks > 39) ? "Pass" : "Fail";

    // multiple conditional operators
    let result = (marks <= 39) ? "Fail" : (marks < 60) ? "Average" : (marks < 80) ? "Good" : "Excellent";

    console.log(result);
}
gfg();



// Object Destructuring
const student = {
    ID: '21',
    name: 'John',
    GPA: '3.0',
}

// const id = student.ID;
// const name = student.name;
// const GPA = student.GPA;

// console.log(id);
// console.log(name);
// console.log(GPA);

const {ID, name, GPA} = student;
const {name:n} = student;
console.log(n);


function calculate (a,b) {
    const add = a + b;
    const subtract = a - b;
    const multiply = a * b;
    const divide = a / b;

    return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate (4,7);

console.log(calculate (4,7));



// A more reactJS example of destructuring

const vehicleOne = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021,
    color: 'red',
    registration: {
        city: 'Houston',
        state: 'Texas',
        country: 'USA'
    }
}


// Old way
// function myVehicle(vehicle) {
//     const msgOld = 'My ' + vehicle.type + ' is a ' + vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model + '.'; 
//     console.log(msgOld);    
// }

// New way
function myVehicle1 ( {type, color, brand, model} ) {
    const msgNew1 = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    //  the object properties do not have to be declared in a specific order.
    console.log(msgNew1);
    

}

myVehicle1(vehicleOne);

function myVehicle2 ( {model, registration: {state} } ) {
    const msgNew2 = 'My ' + model + ' is registered in ' + state + '.';
    console.log(msgNew2);
}

myVehicle2(vehicleOne);


// Spread operator

a = [1,2,3];
b = [4,5,6];

// non-spread way
c = a.concat(b);
console.log("c: " + c);

// spread way
d = [...a, ...b]; // spread operator
console.log("d: " + d);

// In React, you can combine two objects using Spread Operator and 
// add extra properties to that object too. 
// Let’s say we have two objects a and b, 
// we can combine these two objects and create a new one 
// with all the properties present in both objects. See the example below:

const person = { name: "John" };
const student = { ID: "21", GPA: "3.0" };

const new_object = {...person, ...student, semester: '3' };
console.log(new_object);



// JavaScript Functions
// function to compute product of p1 and p2
function multiply(p1, p2) {
    return p1 * p2;
}

let result = multiply (4,7);
console.log(result);

// Named and Anonymous functions
function namedFn() {
    console.log("\n I am a named function!");
}

namedFn();

var anonFn = function() {
    console.log("\n I am an anonymous function. The only difference is that Anonymous Functions are declared at runtime, means they are defined and called at the same time. The reason why they are called Anonymous is that they are not given a proper name before compilation. ");
}

anonFn();

// Arrow functions in React
console.log("\n");
// Javascript ES5 function
function getGreetingFunc() {
    return 'Welcome to JavaScript (ES5);'
}
console.log(getGreetingFunc());

// JS ES6 arrow function with body
const getGreetingArrow1 = () => {
    return 'Welcome to JavaScript (ES6 arrow fn with body)';
}
console.log(getGreetingArrow1());

// JS ES6 arrow fn without body and implicit return
const getGreetingArrow2 = () =>
    'Welcome to JavaScript (ES6 arrow fn without body and with implicit return)';
console.log(getGreetingArrow2());

// Syntax of arrow functions
// () => expression
// param => expression
// (param) => expression
// (param1, paramN) => expression

// () => {
//   statements
// }

// param => {
//   statements
// }

// (param1, paramN) => {
//   statements
// }

// importance of arrow functions in JS
const students = [
    { ID: 1, present: true},
    { ID: 2, present: true},
    { ID: 3, present: false},
];

// old way
// const presentStudents = students.filter(function(student) { return student.present;});
// console.log(presentStudents);
// with arrow function
const presentStudents = students.filter(student => student.present);
console.log(presentStudents);

// old way of function
function squareOld(n) {
    return n*n;
}
console.log(squareOld(5));

// arrow way of function
const squareNew = n => n*n;
console.log(squareNew(6));

let numbers = [1, 2, 3, 4, 5];
let twiced = numbers.map ( n => n*2);
console.log(twiced);

// Create an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Use map and an arrow function to double each number in the array
let doubled = numbers.map(num => num * 2);

// Use map and an arrow function to create an array of strings from the numbers
let strings = numbers.map(num => num.toString());

// Use map and an arrow function to create an array of objects from the numbers
let objects = numbers.map(num => ({value: num}));

// Arrow functions seem a super compact way of writing, they seem to hv a technical angle of this tbd


// JS filter
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

console.log(result);



// JS map
const numbers = [4, 9, 16, 25];
const newArr1 = numbers.map(Math.sqrt);
console.log(newArr1);

const newArr2 = numbers.map(multiplyFn)

function multiplyFn(x) {
    return x * 10;
}
console.log(newArr2);



// JS reduce
let arr = [10, 20, 30, 40, 50, 60];

function sumofArray(sum, num) {
    return sum + num;
}

function myGeeks (item) {
    console.log(arr.reduce(sumofArray));
}

myGeeks();

// JS map exercise
let arr1 = [1,2,3];
let arr2 = arr1.map(doubleFn)

function doubleFn(n) {
    return n*2;
}
console.log(arr2);

// JS objects
// A Javascript object is a collection of named values.
const person1 = { firstName: "Naveen", lastName:"Mandava", age: 44, eyeColor:"brown"};
// Property	Value
// firstName	John
// lastName	    Doe
// age	        50
// eyeColor	    blue

// Methods are actions that can be performed on objects.
// An object method is an object property containing a function definition.

const person2 = { 
    firstName: "Agata", 
    lastName:"Mandava", 
    age: 38, 
    eyeColor:"green",
    hello: function() {
        return "hello " + this.firstName;
    }
};

const person3 = {}; 
    person3.firstName = "Tabby";
    person3.lastName = "Mandava"; 
    person3.age = 7;
    person3.eyeColor = "green";

person3.meow = function() {
    return this.firstName + " meow";
}

console.log(person1);
console.log(person2);
console.log(person3);

console.log(person2.hello());
console.log(person3.meow());


// Object constructor

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
  
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

// add new properties to object constructors
Person.prototype.nationality ="English";

console.log(myFather.nationality);

// add new methods to objects constructors
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
}

console.log(myMother.name());


// JS map exercise and syntax
let numbers = [1, 2, 3, 4, 5];
let twiced = numbers.map ( n => n*2);
console.log(twiced);

// JS classes
class Developer {
    constructor (firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getName() {
        return `${this.firstname} ${this.lastname}`; // new ES6 style of template literals
        // use backticks not single quote
        // return this.firstname + " " + this.lastname; // old style of string concatentation
    }
}

let me = new Developer('Robin', 'Wieruch');
console.log(me.getName());

let a = "Alice";
let greeting = `Hello, ${a}!`;
console.log(greeting);

let x = 2;
let y = 3;
// let result = `The sum of {x} and {y} is ${x+y}.`;
let result = `The sum of ${x} and ${y} is ${x+y}.`;
// Template literals are a new feature in ES6 that allow you to create strings with embedded expressions
// The backtick ` symbol creates a template literal, 
// the $ symbol starts the expression, 
//and the curly braces enclose the name variable, which is replaced by its value. 
console.log(result);

// object definitions - 3 examples

let computer1 = { brand:'HP', RAM:'8 GB', clockspeed:"2 GHz"};
let computer2 = {
    brand: "HP",
    RAM: "8 GB",
    clockspeed: '2 GHz'
};
let computer3  =  {
    brand: "HP",
    RAM: "8 GB",
    clockspeed: '2 GHz',

    printRAM() {
        console.log(this.RAM);
    }
}

// console.log(); will output undefined as well
computer3.printRAM();
//printRAM();


// 'this' keywod and binding in javascript
// What is this?
// In JavaScript, the this keyword refers to an object.
// Which object depends on how this is being invoked (used or called).
// The this keyword refers to different objects depending on how it is used:
// a. In an object method, this refers to the object.
// b. Alone, this refers to the global object.
// c. In a function, this refers to the global object.
// d. In a function, in strict mode, this is undefined.
// e. In an event, this refers to the element that received the event.
// f. Methods like call(), apply(), and bind() can refer this to any object.

// https://www.educative.io/courses/javascript-fundamentals-before-learning-react/the-this-keyword-binding-in-javascript
// IMPLICIT binding of this
class Developer {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    getName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

console.log("IMPLICIT BINDING OF 'THIS'");
var me = new Developer('Robin', 'Wieruch');
console.log(me.getName()); // 'this' is me
var hobbit = new Developer('Frodo', 'Baggins');
console.log(hobbit.getName());

// EXPLICIT binding of this
console.log("EXPLICIT BINDING OF 'THIS'");
var printName = function() {
    console.log(`My name is ${this.firstname} ${this.lastname}`);
};

me =  new Developer('Robin', 'Wieruch');

// '.call()' can be used to explicitly bind a function to an object 
printName.call(me);
// printName() is not bound to an object so 'this' is undefined
printName();

var printInfo = function(lang1, lang2, lang3) {
    console.log(`My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`);
}

languages = ["Javascript", "Java", "Python"];
// languages = ['Javascript', 'C++', 'Python'];

// pass each argument individually by indexing the array
printInfo.call(me, languages[0], languages[1], languages[2]);
// pass all the arguments in one array to .apply()
printInfo.apply(me, languages);

// bind()

// here we bind the me object to the printName() function and get a new function called newPrintName()
const newPrintName = printName.bind(me);
// bound newPrintName() prints appropriately
newPrintName();
// unbound printName() prints undefined
printName();

// New binding
// this can be defined explicitly within a function as it can be in a class.
var printInfo1 = function (firstname, lastname, lang1, lang2, lang3) {
    this.firstname = firstname;
    this.lastname = lastname;
    console.log((`My name is ${this.firstname} ${this.lastname} and I know ${lang1}, ${lang2}, and ${lang3}`));
}
printInfo1('Naveen', 'Mandava', languages[0], languages[1], languages[2]);


console.log(this);

class Programmer {
    constructor (fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }
}

var getName = () => console.log(this.fname);

var p = new Programmer('Naveen', 'Mandava');
const printMyName = getName.bind(p);

printMyName();
// this gives you an error. 
// This is because methods like apply(), and bind(), etc. 
// don’t have any effect on this in an arrow function in Javascript. 
// The value of this remains the same as it was when the function was called. 
// If you want to bind to a different value, 
// you need to use a function expression.



// JS object prototypes
// All JS objects inherit properties and methods from a prototype
// The Object.prototype is on the top of the prototype inheritance chain
// The JavaScript prototype property allows you to add new properties to object constructors:

function Pet(name, species, eyecolor) {
    this.name = name;
    this.species = species;
    this.eyecolor = eyecolor;
}

// let T = Pet ["Tabby", "cat", "green"];
// let T = Pet ("Tabby", "cat", "green");
// Square brackets are used for accessing properties or elements of an object or an array, 
// not for invoking a function.
let T = new Pet ("Tabby", "cat", "green");
console.log(T);

Pet.prototype.nation = "India";
console.log(T.nation);


// JS functions
const sum = (x,y) =>  {
    // return console.log(`The sum of ${x} and ${y} is ${x+y}`);// will also print undefined
    return `The sum of ${x} and ${y} is ${x+y}`;
};
sum(3,5); // Without console.log there is no output because you are not printing the result of the sum function to the console. The sum function returns a string that contains the sum of the two arguments, but it does not display it anywhere. 
console.log(sum(3,5));



// JS call() method
// call() method is a predefined JS method to invoke (call) a method with an 
// owner object as an argument
// with call(), an object can use a method belonging to another object

const car = {
    fullName: function() {
        return this.fname + " " + this.lname;
    }
}

const car1 = {
    fname: "Mercedes",
    lname: "Benz"
}

const car2 = {
    fname: "Toyota",
    lname: "Lexus"
}
// The fullName method of car is called, and used on car1 and car2
console.log(car.fullName.call(car1));
console.log(car.fullName.call(car2));

const citizen = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
}

const citizen1 = {
    firstName: "Naveen",
    lastName: "Mandava"
}

let r = citizen.fullName.call(citizen1, "Bengaluru", "India");
console.log(r);
// The Difference Between call() and apply()
// The difference is:
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.
// With the bind() method, an object can borrow a method from another object.

// apply()
console.log(car.fullName.apply(car1));
let o = citizen.fullName.apply(citizen1, ["Hyderabad", "Pakistan"]);
console.log(o);



// React favors composition over inheritance

class Character {
    constructor(name) {
        this.name = name;
        this.health = 100;
    }
}

class Caster extends Character {
    constructor(name) {
        super(name);
    }
    cast(){
        console.log(`${this.name}: A K!`);
        this.health--;
    }
    getHealth() {
        console.log((this.health));
    }

} 

Dumbledore = new Caster("Albus P W B D")
Dumbledore.cast();

class Shooter extends Character {
    constructor(name) {
        super(name);
    }
    shoot() {
        console.log(`${this.name}: prepare to die!`);
        this.health--;
    }
    getHealth() {
        console.log((this.health));
    } 
}

DarthVader = new Shooter("A S");
DarthVader.shoot();

// JS async
// Javascript setTimeout()
// syntax is setTimeout(function, milliseconds)

let greet = () => {
    console.log("Hi after 10000 ms");
} 
setTimeout(greet, 10000);
// let intervalId = setTimeout(greet, 10000);
// console.log("Id: " + intervalId);
console.log("This message though sequentially after setTimeout will come first");



// with multiple input paramters
let hello = (fname, lname) => {
    console.log("Hi " + fname + " " + lname + " after 10000 ms.");
} 
setTimeout(hello, 10000, "Naveen", "Mandava");

// callback example

function logQuote(quote) {
    console.log(quote);
}

function createQuote(quote, callback) {
    let myQuote = "Like I always say," + quote;

    callback(myQuote); //2
}

createQuote("eat your vegetables!", logQuote); // 1


// Asynchronous programming in JS
// JS is both single-threaded and asynchronous
// Only way for us to tell JS to do sth in the future
// is to provide a callback that will be invoked later
// JS functions are first class objects
// hence we can work with them as objects like
// assign them to variables and pass them as arguments into other functions
// callback fn is passed as an argument to another higher-order fn to be called back at a later time 

// CALLBACK syntax
//start

// // step 1 - define a callback function
// function myCallback() {
//     // code
// }

// // step 2 - define a higher-order fn that accepts a callback
// function higherOrder(myCallback) {
//     // code

//     // call the callback fn
//     myCallback();
// }

// // step 3 - call the higher-order fn with the callback
// higherOrder(myCallback);

// // you can modify callback fn and higher-order fn as per needs
// // end

// step 1 - define a callback fn
function showMsgCallback(m) {
    console.log(m);
}
// step 2 -  define a higher-order fn that accepts a callback fn
function greetHigherOrder(showMsgCallback) {
    let greeting = "Hello";
    showMsgCallback(greeting);
}
//step 3 - call
greetHigherOrder(showMsgCallback);

function cb(m) {
    //console.log("boom");
    console.log(m);
}
// function ho(cb, m) {
function ho(m, cb) {
    let n = "ka " + m;
    cb(n);
}
// ho(cb, "boom");
ho("boom", cb);


// async await in JS
// Analogy
// 1. I go to borrow a book from a library
// 2. I ask the librarian for the book using fetch, and wait for an answer using await
// 3. Librarian checks the availability of the book and gives a 
    // paper slip with book details in JSON format using response.json, 
    // and waits for you to read it using await
// 4. I read the paper slip and thank the librarian using .then
// 5. if sth goes wrong during this process eg book unavailable/ busy librarian/ unreadable paper slip, 
    // I get an apology note and leave the librarian using .catch

//Template I -    
// step A   - declare an async function
    // step A.1 - use await to wait for the fetch promise to resolve
    // step A.2 - use await to wait for the response.json promise to resolve
    // step A.2 - return the data
// step B   - call the async function and handle the result
    // step B.1 - log the data
    // step B.2 - log any error

//Template II -  
// step A   - declare an async function
async function fetchData(url) {
    // step A.1 - use await to wait for the fetch promise to resolve
    let response = await fetch(url);
    // step A.2 - use await to wait for the response.json promise to resolve
    let data    = await response.json();
    // step A.2 - return the data
    return data;
}
// step B   - call the async function and handle the result
fetchData('1') 
    // step B.1 - log the data
    .then( data => console.log(data) )
    // step B.2 - log any error
    .catch( error => console.log(error) ); 



// sync await NASA example
async function fetchAstroPicOfDay() {
    // use your own API key from https://api.nasa.gov/
    let apiKey = "DEMO_KEY";
    // use the APOD endpoint with the API key
    let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    let response = await fetch(url);
    let dataRx = await response.json();
    return dataRx;
}

fetchAstroPicOfDay()
.then( dataRx => {
    let title  = dataRx.title;
    let date   = dataRx.date;
    let expl   = dataRx.explanation;
    let imgUrl = dataRx.url;
    console.log(`The APOD for ${date} is ${title}`);
    console.log(`You can see it here: ${imgUrl}`);
    console.log(`Here is a brief explanation: ${expl}`);
})
.catch( error => console.log(error));




// syntax and semantics of useState
// template
import React, { useState } from 'react';

function Example() {
  // declare a state variable and a function to update it, 
  // with an initial value
  const [state, setState] = useState(initialValue);

  // return a JSX element that uses the state and the function
  return (
    <div>
      {/* some content that depends on the state */}
      {/* some action that calls the function to change the state */}
    </div>
  );
}

// This code snippet shows how to use the useState hook to 
// create and manage a state variable in a functional component. 
// The useState hook takes an initial value as an argument, 
// and returns an array with two elements: the state variable and the function 
// to update it. The array elements are assigned to constants using 
// array destructuring syntax. You can use any names for these constants, 
// but it is a common convention to use state and setState, or a more 
// descriptive name that reflects the purpose of the state, 
// such as count and setCount. You can use the state variable to access the 
// current state value, and use the function to change the state value with a 
// new value or a callback function. Changing the state value will trigger a 
// re-render of the component.

// boilerplate
import React, { useState } from 'react';

function Example() {
  // declare a state variable called count and a function to update it, 
  // with an initial value of 0
  const [count, setCount] = useState(0);

  // return a JSX element that displays the count and a button to increment it
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

*/

// async await homework
async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        return data;
    }
    catch (error) {
        throw new Error("Error fetching data: " + error.message)
    }
}
fetchData('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})

// Async/await hw
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;  
}
fetchData('https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products')
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error);
})


