import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ detail }) {
  const onAdd = () => {
    console.log("Se ha agregado al carrito");
  };
  return (
    <div className="detailsBox">
      <div className="commerce">
        <div className="box-container">
          <div className="box">
            <div className="image">
              <img src={detail.img} alt="" />
              <p>Codigo de producto: ${detail.id}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="details">
        <h3>{detail.nombre}</h3>
        <h4>${detail.precio} mxn </h4>
        <h4>{detail.linea}</h4>
        <ItemCount stock={detail.stock} initial={1} onAdd={onAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;