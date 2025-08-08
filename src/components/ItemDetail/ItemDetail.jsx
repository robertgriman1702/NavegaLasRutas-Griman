import React, { use } from 'react'
import './itemdetail.css'
import Itemcount from '../ItemCount/Itemcount'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext.jsx';

const ItemDetail = ({ product = {} }) => {
  const {addProductInCart} = useContext(CartContext);

  const addProduct = (quantity) => {
    const productCart = {...product, quantity};
    addProductInCart(productCart);
  }
  return (
    <div className='item-detail'>
      <img src={product.image} alt="" />
      <div className='item-detail-info'>
        <h2>{product.name}</h2>
        <p> Precio: ${product.price}</p>
        <p> Description: {product.description}</p>
        <Itemcount stock={product.stock} addProduct={addProduct}/>

      </div>
      
    </div>
    
  )
}

export default ItemDetail
