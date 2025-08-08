import { useContext } from "react"
import { CartContext } from "../../context/CartContext.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, deleteProductById} = useContext(CartContext);

    return (
      <div>
        {
        cart.map((productCart) =>( 
            <div key={productCart.id} className="cart-item">
                <img src={productCart.image} alt={productCart.name} />
                <h2>{productCart.name}</h2>
                <p>Precio: ${productCart.price}</p>
                <p>Cantidad: {productCart.quantity}</p>
                <p>Total: ${productCart.price * productCart.quantity}</p>
                <button onClick={() => deleteProductById(productCart.id)}>Eliminar</button>
            </div>
        ) )
}
      
        <div>
          <h2>Total de la compra: ${cart.reduce((total, product) => total + (product.price * product.quantity), 0)}</h2>
          <Link to="/checkout"> Continuar con la compra</Link>
        </div>
      </div>
        
    )
}

export default Cart
