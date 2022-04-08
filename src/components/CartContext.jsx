import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [updateCart, setUpdateCart] = useState();
  const [updateWidget, setUpdateWidget] = useState();

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  //quantityCart
  const cantCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cant, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cant * prod.precio, 0);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const deleteItem = (id) => {
    setCart(cart.filter((prod) => prod.id !== id));
  };

  const handleChange = (value, id) => {
    const index = cart.findIndex((prod) => prod.id === id);
    console.log(cart[index]);
    cart[index].count = value;
    console.log(cart[index].count);
  };

  const addCant = (value, id) => {
    handleChange(value, id);
    setUpdateCart(!updateCart);
  };
  useEffect(() => {
    totalCart();
  }, [updateCart]); // eslint-disable-line react-hooks/exhaustive-deps

  const addWidget = () => {
    setUpdateWidget(!updateWidget);
  };
  useEffect(() => {
    cantCart();
  }, [updateWidget]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <CartContext.Provider
      value={{
        cart,
        addCart,
        isInCart,
        cantCart,
        totalCart,
        emptyCart,
        deleteItem,
        addCant,
        addWidget
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
