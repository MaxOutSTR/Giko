import './styles/itemDetail.css'
import ItemCount from '../Common/ItemCount'
import { useContext, useState } from 'react'
import CartContext from '../../context/CartContext'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
const ItemDetail = ({ item }) => {
  const [added, setAdded] = useState(false)
  const cartContext = useContext(CartContext)
  const handleAdd = (count) => {
    alert(`Added ${count} of ${item.name}`)
    setAdded(true)
  }

  useEffect(() => {
    setAdded(cartContext.isInCart(item.id))
  }, [item])
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
              {
                (added) ?
                  <>
                    <Link to={'/cart'}>
                      <button>Proceed to Purchase</button>
                    </Link>
                  </>
                  :
                  <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} item={item} />
              }

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