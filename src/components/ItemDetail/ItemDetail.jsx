import React from 'react'
import './ItemDetail.css'

const ItemDetail = ({ product = {} }) => {
  return (
    <div className='item-detail'>
      <img src={product.image} alt="" />
      <div className='item-detail-info'>
        <h2>{product.name}</h2>
        <p> Precio: ${product.price}</p>
        <p> description: {product.description}</p>
      </div>
      
    </div>
    
  )
}

export default ItemDetail
