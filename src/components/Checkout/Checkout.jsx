import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/Db";

const Checkout = () => {
  const [dataform, setDataform] = useState({
    fullname: "",
    email: "",
    phone: "",
  });

  const [orderId, SetorderId] = useState(null);

  const { cart } = useContext(CartContext);

  const handleChange = (e) => {
    setDataform({
      ...dataform,
      [e.target.name]: e.target.value
    });
  };

  const sendOrder = (e) => {
    e.preventDefault();
    const order = {
      buyer: {...dataform},
      Products: [...cart],
      total: cart.reduce((total, product) => total + (product.price * product.quantity), 0)
    }
    uploadOrder(order);
  };

  const uploadOrder = async (order) => {
    try {
      const orderRef = collection( db, "orders");
      const response = await addDoc(orderRef, order);
      SetorderId(response.id);
    }
    catch (error) {
      console.log("error al generar la orden", error);
    }
  }

  return (
    <div className="checkout">
      {
        orderId ? (
          <div>
            <h2>Gracias por tu compra!</h2>
            <p>Tu numero de orden es: {orderId}</p>
            <p>Te enviaremos un correo a {dataform.email} con los detalles de tu compra.</p>
          </div>
        ) : (
          <div>
            <h2>Completa tus datos para finalizar la compra</h2>
            <p>Recuerda que debes completar todos los campos.</p>
            <FormCheckout dataform={dataform} handleChange={handleChange} sendOrder={sendOrder}/> 
          </div>
        )
      }
    </div>
  )
}

export default Checkout
