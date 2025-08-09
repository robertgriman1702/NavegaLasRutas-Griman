import React from 'react'
import { useState } from 'react';
import './itemcount.css';
import Swal from 'sweetalert2';

const Itemcount = ({stock, name, addProduct}) => {
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
        if (count === stock) {
            Swal.fire({
                icon: 'warning',
                title: 'Stock maximo',
                text: `Solo hay ${stock} unidades disponibles`,
                background: '#f8f9fa',
                backdrop: false,
                customClass: {
                    popup: 'custom-swal-popup'
                }
            });
        }
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleAddProduct = () => {
        addProduct(count)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `${count} ${name} agregado(s) al carrito`,
            showConfirmButton: false,
            timer: 1500,
            background: '#f8f9fa',
            backdrop: false,
            customClass: {
                popup: 'custom-swal-popup'
            }
        });
    };

  return (
    <div className='item-count'>
        <div className='item-count-container'>
            <button onClick={handleDecrement} className='button-style  button-minus'> - </button>
            <p>{count}</p>
            <button onClick={handleIncrement} className='button-style  button-plus'>+</button>
        </div>
        <button onClick= { handleAddProduct } className='button-style  button-add'>Añadir al carrito</button>

      
    </div>
  )
}

export default Itemcount
