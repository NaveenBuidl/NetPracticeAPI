import "./ProductCard.css";

// This will execute the code in the AddToCart file, 
// but it will not import any values or components from that file. 
// You can’t write something like this:
// import "./AddToCart"; 
// “./AddToCart” means that the AddToCart file is in the same directory as the current working directory.
// import AddToCart from "./AddToCart"; // wont work
// “../AddToCart” means that the AddToCart file is in the parent directory of the current working directory. 

// for export default use below
import AddToCart from "../AddToCart"; // will work
// for plain export
// import {AddToCart} from "../AddToCart";

function ProductCard(props) {
    return (
        <div className ="card">
            {/*Product Card */} <span> {props.product.title}  </span>
            <div> {props.product.price} </div>
            <AddToCart />
        </div>
    );
}

export default ProductCard;