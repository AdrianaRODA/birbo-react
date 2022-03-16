import React from "react";
import Item from "./Item";


function ItemList({ lista }) {
  return (
    <div>
      {lista.map((item) => (
        <Item
          stock={item.stock}
          linea={item.linea}
          nombre={item.nombre}
          precio={item.precio}
          img={item.img}
        />
      ))}
    </div>
  );
}

export default ItemList;
