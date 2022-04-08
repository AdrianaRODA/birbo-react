import {
  collection,
  writeBatch,
  getDocs,
  addDoc,
  Timestamp,
  query,
  where,
  documentId,
} from "firebase/firestore";
import { db } from "./config";

export const nuevaOrden = async (values, cart, totalCart, setOrderId, emptyCart) => {
  const orden = {
    comprador: values,
    items: cart,
    total: totalCart(),
    fyh: Timestamp.fromDate(new Date()),
  };

  const batch = writeBatch(db);
  const ordersRef = collection(db, "orders");
  const productosRef = collection(db, "productos");

  const q = query(
    productosRef,
    where(
      documentId(),
      "in",
      cart.map((el) => el.id)
    )
  );
  const productos = await getDocs(q);
  const outOfStock = [];

  productos.docs.forEach((doc) => {
    const item = cart.find((el) => el.id === doc.id);

    if (doc.data().stock >= item.cant) {
      batch.update(doc.ref, {
        stock: doc.data().stock - item.cant,
      });
    } else {
      outOfStock.push(item);
    }
  });

  if (outOfStock.length === 0) {
    addDoc(ordersRef, orden).then((doc) => {
      batch.commit();
      setOrderId(doc.id);
      emptyCart();
    });
  } else {
    alert("No hay disponibilidad en uno de tus items");
  }
}


