import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import BannerCarrusel from "./carruselBanner/BannerCarrusel";
import Nosotros from "./info/Nosotros";
import Contacto from "./info/Contacto";


const ItemListContainer = (props) => {
  const { category } = useParams();
  console.log(category);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const productosRef = collection(db, "productos");
    const q = category
      ? query(productosRef, where("linea", "==", category))
      : productosRef;

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
          <BannerCarrusel/>
          <h1>Conoce las diferentes lineas de libretas</h1>
            <ItemList lista={products} />
          <Nosotros />
          <Contacto />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
