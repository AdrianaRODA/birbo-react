import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ItemDetail({ id, nombre, linea, precio, stock, img }) {
  const [cant, setCant] = useState(1);

  const { cart, addCart, isInCart } = useContext(CartContext);
  console.log(cart);

  const onAdd = () => {
    if (cant === 0) return;

    if (!isInCart(id)) {
      const addItem = {
        id,
        stock,
        nombre,
        precio,
        cant,
      };
      addCart(addItem);
    }
  };

  return (
    <div className="detailsBox">
      <div className="commerce">
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <h3>{nombre}</h3>
        <h4>${precio} mxn </h4>
        <h4>{linea}</h4>

        {isInCart(id) ? 
          <Link to="/cart">
            <button className="btn11">Finalizar compra</button>
          </Link>
         : 
          <>
            <ItemCount max={stock} count={cant} setCount={setCant} />
            <div className="botonAgregar">
              <button className="btn11" onClick={onAdd}>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Agregar al
                carrito
              </button>
            </div>
          </>
        }
      </div>
    </div>
  );
}

export default ItemDetail;

/*
{isInCart(id) ? 
          <Link to="/cart">
            <button className="btn11">Finalizar compra</button>
          </Link>
         : 
          <>
            <ItemCount max={stock} count={cant} setCount={setCant} />
            <div className="botonAgregar">
              <button className="btn11" onClick={onAdd}>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Agregar al
                carrito
              </button>
            </div>
          </>
        }
*/
