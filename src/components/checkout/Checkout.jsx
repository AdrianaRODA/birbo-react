import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";

import { CartContext } from "../CartContext";

import { nuevaOrden } from "../../firebase/nuevaOrden";
import { comprobacion } from "./comprobacion";
import Gracias from "./Gracias";

const Checkout = () => {
  const { cart, totalCart, emptyCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    comprobacion(values) &&
      nuevaOrden(values, cart, totalCart, setOrderId, emptyCart);
  };

  if (orderId) {
    return <Gracias order={orderId} />;
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="pageContainer">
      <div className="container my-5">
        <h2>Checkout</h2>
        <hr />

        <form onSubmit={handleSubmit}>
          <input
            className="form-control my-2"
            type="text"
            placeholder="Tu nombre"
            value={values.nombre}
            onChange={handleInputChange}
            name="nombre"
          />
          <input
            className="form-control my-2"
            type="email"
            placeholder="Tu email"
            value={values.email}
            onChange={handleInputChange}
            name="email"
          />
          <input
            className="form-control my-2"
            type="tel"
            placeholder="Tu teléfono"
            value={values.tel}
            onChange={handleInputChange}
            name="tel"
          />

          <button type="submit" className="btn11">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
