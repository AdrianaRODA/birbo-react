import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";
import BannerCarrusel from "./carruselBanner/BannerCarrusel";
import Nosotros from "./info/Nosotros";
//import Contacto from "./info/Contacto";
import { Link } from "react-router-dom";
import ContactoLanding from "./info/ContactoLanding";

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
          <BannerCarrusel />
          <section class="sectionDos">

      <span>Planners Atemporales</span>
      <span>Cuadernos únicos</span>
      <span>100% artesanales y hechos a mano</span>
      <span>Totalmente personalizables</span>

    </section>
          <section id="lineas">
            <h1 id="heading">✨Conoce las diferentes lineas de libretas✨</h1>
            <div>
              <div className="parent">
                <div className="child bg1">
                  <Link to="/productos/friends">
                    <button className="botonBanner">BirboFriends</button>
                  </Link>
                </div>
              </div>
              <div className="parent">
                <div className="child bg2">
                  <Link to="/productos/lux">
                    <button className="botonBanner">BirboLux</button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <ItemList lista={products} />

          <Nosotros />
          <ContactoLanding />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
