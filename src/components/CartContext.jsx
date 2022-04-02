import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addCart = (item) => {
      setCart ([...cart, item])
    }
  
    const isInCart = (id) => {
      return cart.some((prod) => prod.id === id)
    }
  
    const cantCart = () => {
      return cart.reduce((acc, prod) => acc + prod.cant, 0)
    }
  
    const totalCart = () => {
      return cart.reduce((acc, prod) => acc + prod.cant * prod.precio, 0)
    }

    const emptyCart = () => {
        setCart([])
    }

    const deleteItem = (id) => {
      setCart(cart.filter((prod) => prod.id !== id))
    }

    return (
        <CartContext.Provider value={{
            cart, addCart, isInCart, cantCart, totalCart, emptyCart, deleteItem
        }}>
            {children}
        </CartContext.Provider>
    )
}