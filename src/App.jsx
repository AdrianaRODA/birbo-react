import "../src/styles/styles.scss"
//import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart"
import Contacto from "./components/info/Contacto";


import { CartProvider } from "./components/CartContext";
import Footer from "./components/footer/Footer";
import Checkout from "./components/checkout/Checkout";
//import ItemList from "./components/ItemList";



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
          
          <Route path="/contacto" element={<Contacto />} />
          <Route path='/checkout' element={<Checkout/>} />

          <Route path='*' element={ <Navigate to='/'/> }/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

