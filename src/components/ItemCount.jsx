import React, { useState } from "react";
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial)
  const handleSubstract = () => {
    if (counter > initial) {
      setCounter(counter - 1)
    }
  }
  const handleAdd = () => {
    if (counter < stock) {
      setCounter(counter + 1)
    }
  }
  const handleAddCart = (value) => {
    onAdd(counter)
  }
  return (
    <>

      <button onClick={handleSubstract}><span><GrSubtractCircle /></span></button>
      <span>{counter}</span>
      <button onClick={handleAdd}><span><GrAddCircle /></span></button>

      <button onClick={handleAddCart}>Add to cart</button>
    </>
  );
}
export default ItemCount;