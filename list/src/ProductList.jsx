import { useState } from "react";

function ProductList(){

    const[showInStock, setShowInStock] = useState(false);

    const products = [
        {id: 1, name: "iphone 15", price: 79999, instock : true},
        {id: 2, name: "Samsung TV", price: 46999, instock : false},
        {id: 3, name: "Mac book pro", price: 149000, instock : true},
        {id: 4, name: "Sony headphone", price: 12990, instock : false},
        {id: 5, name: "ipad Air", price: 60000, instock : true},
    ];

    const displayedProducts = showInStock ? products.filter((product) => product.instock) : products ;

    return(
        <div>
            <h2>Products</h2>
            <button onClick={() => setShowInStock(!showInStock)}>{showInStock ? "Show All Products" : "Show In-Stock Products"}</button>

            {displayedProducts.map((product) => (
                <div key = {product.id}>
                    <h3>{product.name}</h3>
                    <p>Price: {product.price}</p>
                    <p>InStock = {product.instock ? "In Stock" : "Out of Stock"}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default ProductList;