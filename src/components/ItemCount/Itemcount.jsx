import React from 'react'
import { useState } from 'react';
import './Itemcount.css';

const Itemcount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
  return (
    <div>
        <button onClick={handleIncrement}>+</button>
        <p>{count}</p>
        <button onClick={handleDecrement}>-</button>
        <button onClick= { () => addProduct(count)}></button>

      
    </div>
  )
}

export default Itemcount
