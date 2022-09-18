import { useContext } from "react";
import CartContext from "../../context/CartContext";
const CartWidget = ({ onCartClick }) => {
  const cartContext = useContext(CartContext)
  return (

    <div onClick={onCartClick}>
      {`cart(${JSON.stringify(cartContext.cart.length)})`}
    </div>
  )
}
export default CartWidget;