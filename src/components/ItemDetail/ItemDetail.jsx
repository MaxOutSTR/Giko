import './styles/itemDetail.css'
import ItemCount from '../Common/ItemCount'
const ItemDetail = ({ item }) => {
  const handleAdd = (count) => {
    alert(`Added ${count} of ${item.title}`)
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
              <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} item={item} />
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