// this AddToCart shd be displayed for each product
// Basic onclick syntax
// <element onclick = "functionToExecute()"> Click </element>
// example
// <button onclick="functionToExecute()"> Click </button>

// Difference between a regular variable and a state variable
// Both can store values 
// but a state variable will trigger a re-render of the component when it changes/ affect the UI
// As a general rule, you should use state variables for data that represents the 
// component’s state, meaning the data that determines how the component looks and 
// behaves. You should use regular variables for data that is not part of the 
// component’s state, meaning the data that is only used internally by the component 
// or derived from other data sources.

// The main advantage of using both dumb and smart components is that it allows for a clear separation of concerns between the presentation layer and the logic layer of the application.
// I had thought that combining both makes them as reusable modules.
// Stateful vs Stateless components
// Dumb vs Smart components
// Dumb components, also known as presentational/ functional/ UI components/ screens/ pure/ skinny
// are components that focus on how things look. 
// Smart components, also known as container/ lass/ app-level components/ components/ stateful/ fat
// are components that focus on how things work. 
// More simple/dumb components and less complex/smartasss components

// props are used to pass data from one component to another
// while state is used to manage data within a component
// props are read-onyl and cannot eb changed by the component that receives them
// state is mutable and local, meaning it can be changed by the component that owns it
// and it is not accessible to other components

// Basic component types: 
// 1. Pure component -display without props
// 2. Functional component - display with props
// 3. Class component - display with state
// a: can be written as a functional component with useState hook and other hooks.
// b: can be written as a class component with setState method and lifecycle methods
// 1. Stateless component - a component that does not have any internal state or lifecycle methods. It only depends on the props that are passed to it by its parent component, and it returns a single JSX element that represents the UI. It can be written as a simple functional component
// 2. Stateful component - a component that has its own internal state and lifecycle methods. It can manage data, perform functions, and update the UI based on the state changes. 
// a: It can be written as a class component with setState method and lifecycle methods, or 
// b: as a functional component with useState hook and other hooks,
// Props can be used in both stateless and stateful. Only that in stateless, props is 
// the only source of data whereas in stateful, it is one of the sources of data, other than internal state and lifecycle methods.
// 4. Higher-order components (HOCs): HOCs are functions that take a component as an argument and return a new component that enhances the original component with some additional features or logic. HOCs are useful for reusing code and avoiding duplication across components. For example, a withLoading HOC can add a loading indicator to any component that fetches data from an API.
// 5. Render props: Render props are props that take a function as a value and return some JSX elements that can be rendered by the component. Render props are useful for sharing code and state between components without using HOCs or hooks. For example, a MouseTracker component can use a render prop to pass the mouse position to any component that needs it.
// 6. Portals: Portals are a way of rendering a component outside the normal DOM hierarchy of the parent component. Portals are useful for creating UI elements that need to break out of the parent’s container, such as modals, tooltips, or popovers.
// 7. Fragments: Fragments are a way of grouping multiple elements without adding extra nodes to the DOM. Fragments are useful for avoiding unnecessary wrappers and improving performance and readability.
// 8. Error boundaries: Error boundaries are components that catch errors in their child components and display a fallback UI instead of crashing the whole app. Error boundaries are useful for handling unexpected errors and improving user experience.

// The main advantage of using both stateful and stateless components is that it allows for a 
// clear separation of concerns between the presentation layer and the logic layer 
// of the application. This makes the code more readable, maintainable, and scalable. 
// It also enables better reusability and composability of the stateless components, 
// which can be used in different contexts and scenarios by different stateful components. 
// Furthermore, it facilitates testing and debugging of the components, 
// as the stateless components can be tested in isolation with mock props, 
// while the stateful components can be tested with mock data and actions.
// Props move from parent to child

function AddToCart() {

    function increment() {
        console.log("increment");
    }

    return (
        <div>
            <button onClick={increment}> Add to Cart </button>  
        </div>
    )
}

export default AddToCart;