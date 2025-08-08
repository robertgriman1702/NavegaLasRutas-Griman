import React from 'react'
import { useState } from 'react';
import './itemcount.css';

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
    <div className='item-count'>
        <div className='item-count-container'>
            <button onClick={handleDecrement} className='button-style  button-minus'> - </button>
            <p>{count}</p>
            <button onClick={handleIncrement} className='button-style  button-plus'>+</button>
        </div>
        <button onClick= { () => addProduct(count) } className='button-style  button-add'>Añadir al carrito</button>

      
    </div>
  )
}

export default Itemcount
