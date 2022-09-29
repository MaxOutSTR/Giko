import ItemCount from "../Common/ItemCount";
import { Link } from "react-router-dom";
import './styles/item.css'
const Item = ({ id, name, stock, description, price, pictureUrl }) => {
  return (
    <div>
      <Link to={`/item/${id}`}>
        <img className={'item-picture'} src={pictureUrl} alt="" />
      </Link>
      <div>
        <div className={'item-info'}>
          <h3>{name}</h3>
          <p className={'item-description'}>{description}</p>
          <p><b>Stock: </b>{stock}</p>
          <p><b>Price: </b>{price}</p>
        </div>
      </div>
    </div>
  )
}
export default Item;