import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Item({ linea, nombre, precio, img }) {
  const onAdd = () => {
    console.log("Se ha agregado al carrito");
  };
  return (
    <div className="commerce">
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={img} alt="" />
          </div>

          <div className="info">
            <h3>{nombre}</h3>
            <h4>${precio} mxn </h4>
            <h4>{linea}</h4>

            <div className="botonAgregar">
              <button className="btn11" onClick={onAdd}>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon> Agregar al
                carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
