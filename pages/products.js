import { useState } from "react";

export default function Products(){

    const [product] = useState(
        [
         {id: 1, name: 'iPhone', price: 999},
         {id: 2, name: 'MacBook', price: 1999},
         {id: 3, name: 'iPad', price: 2999}
        ]
    );

    const [cart, setCart] = useState([]);

    const addToCart = (product) =>{
        setCart([...cart, product]);
        alert(`Added ${product.name} to cart!`)
    }

    return(
        <div>
            <h1> Our Products </h1>
            <p> Items in cart : {cart.length} </p>

            {product.map(prod => (
                <div key={prod.id} style={{
                    border: '1px solid #ccc',
                    padding: '10px',
                    margin: '10px'
                }}>
                    <h3> {prod.name} </h3>
                    <p> {prod.price} </p>
                    <button onClick={()=>addToCart(prod)}> Add To Cart </button>
                </div>
            ))}
        </div>
    )
}