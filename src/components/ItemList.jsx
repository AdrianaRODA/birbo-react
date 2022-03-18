import React from "react";
import Item from "./Item";


function ItemList({ lista }) {
  return (
    <div>
      {lista.map((item) => <Item key={item.id} {...item}/> )}
        
    </div>
  );
}

export default ItemList;