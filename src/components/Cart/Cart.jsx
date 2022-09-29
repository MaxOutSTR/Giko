import './styles/cart.css'
import CartContext from '../../context/CartContext'
import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem'
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import CenterContainer from '../Common/CenterContainer'
import Loader from '../Common/Loader'
import PlacedOrder from './PlacedOrder'
const Cart = () => {
  const cartContext = useContext(CartContext);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [orderId, setOrderId] = useState('');
  const [loading, setLoading] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState('');
  const [emailWarning, setEmailWarning] = useState(false)
  const validForm = () => {
    let valid = true;
    if (email === confirmEmail) {
      setEmailWarning(false)
    } else {
      setEmailWarning(true)
      valid = false;
    }
    return valid;
  }
  const createOrder = () => {
    const buyer = {
      name: name,
      phone: phone,
      email: email
    }
    const items = cartContext.cart.map((element) => {
      return (
        {
          id: element.item.id,
          name: element.item.name,
          price: element.item.price,
          quantity: element.quantity
        }
      )
    })
    const orderMock = {
      buyer,
      items,
      total: Number.parseFloat(cartContext.totalPrice().toFixed(2)),
      date: Date.now()
    }
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders');
    setLoading(true);
    addDoc(ordersCollection, orderMock).then(({ id }) => {
      setOrderId(id);
      setOrderPlaced(true);
      setLoading(false);
      cartContext.clear();
    })
  }

  return (
    <>
      {
        (loading) ?
          <CenterContainer>
            <Loader />
          </CenterContainer>
          :
          <>
            {
              (orderPlaced) ?
                <CenterContainer>
                  <PlacedOrder orderId={orderId} />
                </CenterContainer>
                : <></>
            }
            <div className={'cart-container'}>
              {
                (cartContext.cartSize === 0 && !orderPlaced) ?
                  <>
                    <h2>Nothing in here!</h2>
                    <div>Have you tried <Link to={'/'}>looking for some cool stuff?</Link></div>
                  </>
                  :
                  <>
                    {(!orderPlaced) ?
                      <>
                        <div>
                          {
                            cartContext.cart.map((element) => {
                              return (
                                <CartItem key={element.item.id} item={element.item} quantity={element.quantity}
                                  removeItem={cartContext.removeItem}
                                />
                              )
                            })
                          }
                        </div>
                        <div className='cart-total-price'>
                          {`Total: $${cartContext.totalPrice().toFixed(2)}`}
                        </div>
                        <form className='cart-form' onSubmit={(evt) => { evt.preventDefault(); if (!validForm()) return; createOrder(); }} title='Client contact info'>
                          <h3>Contact Info</h3>
                          <label className='cart-form--label' htmlFor="name">
                            Name:
                            <input id='name' type="text" required value={name} onChange={(evt) => { setName(evt.target.value) }} />
                          </label>
                          <br />

                          <label className='cart-form--label' htmlFor="phone">
                            Phone:
                            <input id='phone' type="tel" pattern='[0-9]{3,}' title='3 or more digits' maxLength={10} required value={phone} onChange={(evt) => { setPhone(evt.target.value) }} />
                          </label>

                          <br />

                          <label className='cart-form--label' htmlFor="email">
                            e-mail:
                            <input id='email' type="email" required value={email} onChange={(evt) => { setEmail(evt.target.value) }} />
                          </label>

                          <br />

                          <label className='cart-form--label' htmlFor="cemail">
                            Confirm e-mail:
                            <input id='cemail' type="email" required value={confirmEmail} onChange={(evt) => { setConfirmEmail(evt.target.value) }} />
                          </label>

                          <p style={{ marginTop: '0', fontWeight: '700', fontSize: '0.8em', color: 'darkred' }}>{(emailWarning) ? `e-mails don't match` : ''}</p>
                          <button type='submit' className='cart-proceed-button' >Place Order</button>
                        </form>
                      </>
                      :
                      <></>
                    }
                  </>
              }
            </div>
          </>
      }

    </>
  )
}
export default Cart;