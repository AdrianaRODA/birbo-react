import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = (props) => {
  const [arrayItems, setArrayItems] = useState([]);
  const products = [
    {
      stock: "7",
      linea: "friends",
      nombre: "Libreta -Pink collage-",
      precio: "200",
      img: "img/0.jpg",
    },
    {
      stock: "6",
      linea: "lux",
      nombre: "Journal -Estampa-",
      precio: "400",
      img: "img/6.jpg",
    },
    {
      stock: "3",
      linea: "friends",
      nombre: "Libreta -Tropical-",
      precio: "200",
      img: "img/3.jpg",
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

  useEffect(() => {
    imprimirProductos()
      .then((respuesta) => setArrayItems(respuesta))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>{props.bienvenida}</h1>
      <ItemList lista={arrayItems} />
    </div>
  );
};

export default ItemListContainer;
