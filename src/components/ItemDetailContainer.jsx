import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = (props) => {
  const { itemId } = useParams();
  console.log(itemId);

  const [deItems, setDeItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "productos", itemId);

    getDoc(docRef)
      .then((doc) => {
        setDeItems({
          id: doc.id,
          ...doc.data(),
        });
      })

      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <>
      {loading ? (
        <h2>Cargando...</h2>
      ) : (
        <div>
          <h1>{props.detalles}</h1>
          <ItemDetail {...deItems} />
        </div>
      )}
    </>
  );
};

export default ItemDetailContainer;


