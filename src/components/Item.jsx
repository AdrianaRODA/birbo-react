import React from 'react'
import ItemCount from './ItemCount'

function Item({stock,linea,nombre, precio, img}) {
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

            <ItemCount stock={stock} initial={1} onAdd={onAdd} />
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item

