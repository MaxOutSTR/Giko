import { useContext } from "react";
import CartContext from "../../context/CartContext";
import './styles/cartWidget.css'
const CartWidget = ({ onCartClick }) => {
  const cartContext = useContext(CartContext)
  return (

    <div onClick={onCartClick}>
      {`cart(`}<span className={'cart-widget--item-count'}>{cartContext.cartSize}</span>{`)`}
    </div>
  )
}
export default CartWidget;