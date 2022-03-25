import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = (props) => {
  const { itemId } = useParams();
  console.log(itemId)

  const [deItems, setDeItems] = useState([]);

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

    imprimirProductos.then((res) => {
      setDeItems(res.find((prod) => prod.id === Number(itemId)));
    });
  }, [itemId]);

  

  return (
    <div>
      <h1>{props.detalles}</h1>
      <ItemDetail detail={deItems} />
    </div>
  );
};

export default ItemDetailContainer;
