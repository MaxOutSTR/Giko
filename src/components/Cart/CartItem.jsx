import './styles/cartItem.css'
const CartItem = ({ item, quantity, removeItem }) => {
  return (
    <div className={'cart-item-container'} >
      <img className={'cart-item-image'} alt="" src={item.pictureUrl} />
      <div className={'cart-item-info'}>
        <p>{item.name}</p>
        <p>{`Qty: ${quantity}`}</p>
      </div>
      <div className={'cart-item-price-container'} >
        <div className={'cart-item-price'} >{item.price}</div>
      </div>
      <span className={'cart-item--remove-button'} onClick={() => { removeItem(item.id) }} >
        X
      </span>
    </div>
  )
}
export default CartItem;