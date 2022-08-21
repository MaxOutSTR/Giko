import { AiOutlineShoppingCart } from 'react-icons/ai'
import './styles/main.css'

const CartWidget = ({ onCartClick }) => {
  return (
    <div className='nav-bar--button' onClick={onCartClick}>
      <span className='icon'><AiOutlineShoppingCart /></span> cart(0)
    </div>
  )
}
export default CartWidget;