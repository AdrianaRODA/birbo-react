import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"
import Nosotros from "./components/info/Nosotros";
import Contacto from "./components/info/Contacto";


import { CartProvider } from "./components/CartContext";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/productos/:category" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

