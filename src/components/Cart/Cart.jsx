import './styles/cart.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
const Cart = () => {
  const cartContext = useContext(CartContext)
  return (
    <div className={'cart-container'}>
      {
        (cartContext.cartSize === 0) ?
          <>
            <div>Nothing in here!</div>
            <div>Have you tried <Link to={'/'}>looking for some cool stuff?</Link></div>
          </>
          :
          <>
            <div className={'cart-item-container'}>
              {
                cartContext.cart.map((element) => {
                  return (
                    <CartItem item={element.item} quantity={element.quantity}
                      removeItem={cartContext.removeItem}
                    />
                  )
                })
              }
            </div>
            <div className='cart-total-price'>
              {`Total: $${cartContext.totalPrice().toFixed(2)}`}
            </div>
            <form action='#' className='cart-proceed-button-container'>
              <button className='cart-proceed-button'>Proceed to payment</button>
            </form>
          </>
      }
    </div>
  )
}
export default Cart;