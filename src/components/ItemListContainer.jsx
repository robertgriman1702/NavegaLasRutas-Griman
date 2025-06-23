import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div className="item-list-container">
       <h1 class = "saludo">{ props.saludo }</h1>
    </div>
  );
};

export default ItemListContainer;