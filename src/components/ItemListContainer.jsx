import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
  const { category } = useParams();
  console.log(category);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const imprimirProductos = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            id: 1,
            stock: 7,
            linea: "friends",
            nombre: "Libreta -Pink collage-",
            precio: 200,
            img: "https://i.ibb.co/26VQnc2/image.jpg",
          },
          {
            id: 2,
            stock: 6,
            linea: "lux",
            nombre: "Journal -Estampa-",
            precio: 400,
            img: "https://i.ibb.co/c35SpCX/6.jpg",
          },
          {
            id: 3,
            stock: 3,
            linea: "friends",
            nombre: "Libreta -Tropical-",
            precio: 200,
            img: "https://i.ibb.co/BK1kDFn/3.jpg",
          },
        ]);
      }, 3000);
    });

    if (!category) {
      imprimirProductos.then((res) => setProducts(res));
    } else {
      imprimirProductos.then((res) => {
        setProducts(res.filter((prod) => prod.linea === category));
      });
    }
  }, [category]);

  return (
    <div>
      <h1>{props.bienvenida}</h1>
      <ItemList lista={products} />
    </div>
  );
};

export default ItemListContainer;
