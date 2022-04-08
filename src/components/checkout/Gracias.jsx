import React from "react";
import { Link } from "react-router-dom";

const Gracias = ({ order }) => {
  return (
    <div className="pageContainer">
      <div className="container my-5 graciasCompra">
        <h2>¡Gracias por tu compra!</h2>
        <hr />
        <h3>Tu número de orden es: {order}</h3>
        <p>Te enviaremos un correo con la confirmación de tu compra y te mantendremos al tanto del envío.</p>
        <div className="imgCheckout">
        <img src="https://i.ibb.co/MSj8X5J/Bird-on-a-wire-pana.png" alt="" />
        </div>
        <Link to="/" className="btn11">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default Gracias;
