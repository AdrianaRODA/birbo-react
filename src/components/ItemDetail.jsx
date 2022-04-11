import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function ItemDetail({ id, nombre, stock, precio, linea, img }) {
  const [cant, setCant] = useState(1);

  const { cart, addCart, isInCart, addWidget } = useContext(CartContext);
  console.log(cart);

  const onAdd = () => {
    if (!isInCart(id)) {
      const addItem = {
        id,
        stock,
        nombre,
        precio,
        cant,
      };
      addCart(addItem);
    } else {
      const index = cart.findIndex((prod) => prod.id === id);
      cart[index].cant = cart[index].cant + cant;
      addWidget();
    }
  };

  return (
    <div className="detailsBox">
      <div className="boxImg">
        <div className="detailImgBox">
          <img src={img} alt={id} />
        </div>
      </div>

      <div className="details">
        <h3>{nombre}</h3>
        <h4>${precio} mxn </h4>
        <h4>{linea}</h4>

        <ItemCount max={stock} count={cant} setCount={setCant} />
        <div className="botonAgregar">
          <button className="btn11" onClick={onAdd}>
            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Agregar al
            carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

/*
{isInCart(id) ? (
          <div>
            <ItemCount max={stockItem} count={cant} setCount={setCant} />
            <div className="botonAgregar">
              <button className="btn11" onClick={onAdd}>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Agregar al
                carrito
              </button>
            </div>
            <Link to="/cart">
              <button className="btn11">Finalizar compra</button>
            </Link>
          </div>
        ) : (
          <>
            <ItemCount max={stockItem} count={cant} setCount={setCant} />
            <div className="botonAgregar">
              <button className="btn11" onClick={onAdd}>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Agregar al
                carrito
              </button>
            </div>
          </>
        )}
*/
