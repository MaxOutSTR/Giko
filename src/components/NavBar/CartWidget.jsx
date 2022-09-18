import { useContext } from "react";
import CartContext from "../../context/CartContext";
const CartWidget = ({ onCartClick }) => {
  const cartContext = useContext(CartContext)
  console.log(cartContext)
  return (

    <div onClick={onCartClick}>
      {`cart(${cartContext.cart.length})`}
    </div>
  )
}
export default CartWidget;