import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue)

  const addItem = (item, quantity) => {
    const newCart = cart;
    setCart([...newCart, { item, quantity }])
  }

  const removeItem = (itemId) => {
    const newCart = cart;
    setCart(newCart.filter(x => x.item.id !== itemId))
  }

  const clear = () => {
    setCart([]);
  }

  const isInCart = (itemId) => {
    return cart.some(x => x.item.id === itemId)
  }
  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider >
  )
}
export default CartProvider;