import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartContext } from "./components/CartContext";

function App() {

  const [cart, setCart] = useState([])

  const addCart = (item) => {
    setCart ([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id)
  }

  return (
    <CartContext.Provider value={{cart, addCart, isInCart}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;

/*<ItemListContainer bienvenida="Hola bienvenido a Birbo Birbs y Journals" />
  <ItemDetailContainer detalles="Detalles del producto" />*/
