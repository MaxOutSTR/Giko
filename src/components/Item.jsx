import React from "react";
import ItemCount from "./ItemCount";
const Item = ({ id, title, stock, description, price, pictureUrl }) => {
  const handleAdd = (count) => {
    alert(`Added ${count} of ${title}`)
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div>
        <img src={pictureUrl} alt="" style={{ width: '10em', height: '10em' }} />
      </div>
      <div style={{ width: '100%' }}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p><b>Stock: </b>{stock}</p>
        <p><b>Price: </b>{price}</p>

        <ItemCount initial={1} onAdd={handleAdd} stock={stock} />
      </div>
    </div>
  )
}
export default Item;