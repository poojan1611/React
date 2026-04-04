import { useState } from 'react';

function Counter() {
//   const [count, setCounter] = useState(0);

//   function add() {
//     setCounter(count + 1);
//   }

//   function sub() {
//     setCounter(count - 1);
//   }

//   return (
//     <div className="counter">
//       <h1>Count: {count}</h1>
//       <button onClick={add}>Add me</button>
//       <button onClick={sub}>Minus me</button>
//     </div>
//   );


    // const [name, setName] = useState("Poojan");
    // function handleAum(){
    //     setName("Aum")
    // }
    // function handleAgam(){
    //     setName("Agam")
    // }
    // return(
    //     <div>
    //         <h1>Name : {name}</h1>
    //         <button onClick={handleAum}>Change Aum</button>
    //         <button onClick={handleAgam}>Change Agam</button>
    //     </div>
    // );


    const [item, setItem] = useState(0);
    function addItem(){
        setItem(item +1);
    }
    function subItem(){
        if (item > 0) {
            setItem(item - 1);
        }
    }
    return(
        <div>
            {/* <h1>Product: Apple</h1>
            <h2>Item: {item}</h2>
            <button  onClick={addItem}>➕   </button>
            <button  onClick={subItem}>➖   </button>
            <button disabled={item <= 0}>Add to cart</button> */}

            <h1>🍎 Product: Apple</h1>
            <h2>Quantity: {item}</h2>

            <button onClick={addItem}>➕</button>
            <button onClick={subItem} disabled={item <= 0}>➖</button>

            <p>{item === 0 ? "🛒 Cart is Empty" : `✅ Added to Cart: ${item}`}</p>

            <button disabled={item <= 0}>Add to Cart</button>
        </div>
    );

}

export default Counter;
