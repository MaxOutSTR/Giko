import { useState } from "react";
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import './styles/itemCount.css'
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
    <div className={'item-count-container'}>
      <button className={'item'} onClick={handleSubstract}><span><GrSubtractCircle /></span></button>
      <button className={'item item--count'}>{counter}</button>
      <button className={'item'} onClick={handleAdd}><span><GrAddCircle /></span></button>
      <button className={'item item--add-to-cart'} onClick={handleAddCart}>Add to cart</button>
    </div>
  );
}
export default ItemCount;