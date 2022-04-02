import React from "react";
//import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "./CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";



const CartWidget = () => {
  const { cantCart, cart } = useContext(CartContext);

  return (
    <Link to="/cart">
      <button className={cart.length === 0 ? `cartWidget cartWidget-hidden` : `cartWidget`}>
      <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        <span id="contadorCarrito">{cantCart()}</span>
      </button>
      
    </Link>
  );
};

export default CartWidget;

