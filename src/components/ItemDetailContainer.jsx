import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = (props) => {
  const [deItems, setDeItems] = useState([]);
  useEffect(() => {
  const products = [
    {
      id: 1,
      stock: 9,
      linea: "lux",
      nombre: "Planner -Colibrí-",
      precio: 400,
      img: "img/8.jpg",
      descripcion: "Libreta hecha con materiales premium de nuestra linea Lux. A base de piel vegana y papel de gramaje ideal para uso de acuarelas y marcadores."
    },
  ];

  
  const imprimirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (products.length === 0) {
          reject("no hay productos disponibles");
        } else {
          resolve(products);
        }
      }, 3000);
    });
  };

  
    imprimirProductos()
    .then((respuesta) => setDeItems(respuesta))
    .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{props.detalles}</h1>
      <ItemDetail {...deItems}/>
    </div>
  );
};

export default ItemDetailContainer;