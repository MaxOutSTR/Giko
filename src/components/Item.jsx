import React from "react";
import ItemCount from "./ItemCount";
const Item = ({ id, title, stock, description, price, pictureUrl }) => {
  const handleAdd = (count) => {
    alert(`Added ${count} of ${title}`)
  }
  return (
    <>
      <div style={{ display: 'flex' }}>
        <div>
          <img src={pictureUrl} alt="" style={{ width: '10em', height: '10em' }} />
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{`Stock: ${stock}`}</p>
          <p>{`Price: $${price}`}</p>

          <ItemCount initial={1} onAdd={handleAdd} stock={stock} />
        </div>
      </div>
      <hr />
    </>
  )
}
export default Item;