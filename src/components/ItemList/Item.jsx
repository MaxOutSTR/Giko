import ItemCount from "../Common/ItemCount";
import { Link } from "react-router-dom";
import './styles/item.css'
const Item = ({ id, title, stock, description, price, pictureUrl }) => {
  const handleAdd = (count) => {
    alert(`Added ${count} of ${title}`)
  }
  return (
    <div>
      <Link to={`/item/${id}`}>
        <img className={'item-picture'} src={pictureUrl} alt="" />
      </Link>
      <div>
        <div className={'item-info'}>
          <h3>{title}</h3>
          <p className={'item-description'}>{description}</p>
          <p><b>Stock: </b>{stock}</p>
          <p><b>Price: </b>{price}</p>
        </div>
        <ItemCount initial={1} onAdd={handleAdd} stock={stock} item={{ id, title, stock, description, price, pictureUrl }} />
      </div>
    </div>
  )
}
export default Item;