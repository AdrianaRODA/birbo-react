import React from "react";

import ItemCount from "./ItemCount";

const Card = () => {

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
            <h3>Nombre del producto</h3>
            <h4>$xx.xx mxn </h4>

            <ItemCount stock={7} initial={1} onAdd={onAdd} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
