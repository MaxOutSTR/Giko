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
  const handleAddCart = () => {
    onAdd(counter)
  }
  return (
    <div style={{ height: '2em', fontSize: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
      <button onClick={handleSubstract} style={{ height: '100%' }}><span><GrSubtractCircle /></span></button>
      <button style={{ height: '100%', userSelect: 'none', pointerEvents: 'none' }}>{counter}</button>
      <button onClick={handleAdd} style={{ height: '100%' }}><span><GrAddCircle /></span></button>

      <button onClick={handleAddCart} style={{ userSelect: 'none', height: '100%' }}>Add to cart</button>
    </div>
  );
}
export default ItemCount;