import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = (props) => {
  const { category } = useParams();
  console.log(category);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q = category ? query(productosRef, where("linea", "==", category)) : productosRef

    getDocs(q)
      .then((resp) => {
        setProducts(
          resp.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      })

      .finally(() => {
        setLoading(false);
      });
  }, [category]);

  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div>
          <h1>{props.bienvenida}</h1>
          <ItemList lista={products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;


