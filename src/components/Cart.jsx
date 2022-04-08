import { useContext } from "react";
import { CartContext } from "./CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import React from "react";

const Cart = () => {
  const { cart, totalCart, emptyCart, deleteItem } = useContext(CartContext);

  return (
    <>
      {cart.length === 0 ? (
        <div className="pageContainer">
          <h2>Tu carrito se encuentra vacio</h2>
          <Link to="/">
            <button className="btn11">Agregar productos</button>
          </Link>
        </div>
      ) : (
        <div className="pageContainer">
          <h2>Mi carrito</h2>
          <hr />

          {cart.map((item) => (
            <div key={item.id}>
              <h4>{item.nombre}</h4>
              <p>Cantidad: {item.cant}</p>
              <p>Precio: ${item.precio * item.cant}</p>
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
              </button>
            </div>
          ))}

          <hr />
          <h2>Total a pagar: ${totalCart()}</h2>
          <button className="btn11" >
               Terminar mi compra
            </button>

          <div>
            <button className="btn btn-danger" onClick={emptyCart}>
              <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon> Vaciar mi
              carrito
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
