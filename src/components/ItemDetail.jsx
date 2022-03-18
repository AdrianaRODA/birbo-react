import React from "react";
import SingleItem from "./SingleItem";


function ItemDetail({ detail }) {
  return (
    <div>
      {detail.map((item) => <SingleItem key={item.id} {...item}/> )}
        
    </div>
  );
}

export default ItemDetail;