import './styles/itemDetail.css'
import ItemCount from '../Common/ItemCount'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'
const ItemDetail = ({ item }) => {
  const cartContext = useContext(CartContext)
  const handleAdd = (count) => {
    cartContext.addItem(item, count)
    console.log(cartContext.cart)
  }
  return (
    <div className="item-detail">
      {
        (item?.id) ?
          <>
            <img className={'item-detail-image'} src={item.pictureUrl} alt="" />
            <div className={'item-detail-info'}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <h3>${item.price}</h3>
              <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
            </div>
          </>
          :
          <>
          </>
      }

    </div>
  )
}
export default ItemDetail