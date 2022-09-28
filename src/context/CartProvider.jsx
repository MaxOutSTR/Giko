import { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = ({ defaultValue = [], children }) => {
  const [cart, setCart] = useState(defaultValue)
  const [cartSize, setCartSize] = useState(0)
  const addItem = (item, quantity) => {
    const newCart = cart;
    const oldItem = cart.find(x => x.item.id === item.id);
    if (oldItem) {
      newCart.find(x => x.item.id === item.id).quantity += quantity;
      setCart(newCart)
    }
    else {
      setCart([...newCart, { item, quantity }])
    }
    setCartSize(cartSize + quantity)
  }
  const removeItem = (itemId) => {
    const newCart = cart;
    const oldItem = newCart.find(x => x.item.id === itemId)
    if (!oldItem) return;
    setCart(newCart.filter(x => x.item.id !== itemId))
    setCartSize(cartSize - parseInt(oldItem.quantity))
  }
  const totalPrice = () => {
    let total = 0;
    cart.forEach((element) => {
      total += (element.item.price * element.quantity);
    })
    return total;
  }
  const clear = () => {
    setCart([]);
    setCartSize(0)
  }

  const isInCart = (itemId) => {
    return cart.some(x => x.item.id === itemId)
  }
  return (
    <CartContext.Provider value={{ cart, addItem, totalPrice, removeItem, clear, isInCart, cartSize }}>
      {children}
    </CartContext.Provider >
  )
}
export default CartProvider;