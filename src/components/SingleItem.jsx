import React from "react";
import ItemCount from "./ItemCount";

function SingleItem({ stock, linea, nombre, precio, img, descripcion }) {
  const onAdd = () => {
    console.log("Se ha agregado al carrito");
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
        <p>{descripcion}</p>
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default SingleItem;
