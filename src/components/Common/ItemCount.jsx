import { useContext } from "react";
import { useState } from "react";
import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'
import './styles/itemCount.css'
import CartContext from "../../context/CartContext";
const ItemCount = ({ stock, initial, onAdd, item }) => {
  const [counter, setCounter] = useState(initial)
  const cartContext = useContext(CartContext)
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
    cartContext.addItem(item, counter)
    setCounter(initial)

  }
  return (
    <div className={'item-count-container'}>
      <button className={'item item--controller'} onClick={handleSubstract}>
        <span className={'icon--span'} ><GrSubtractCircle style={{ display: 'block', margin: '0 auto' }} /></span>
      </button>

      <span className={'item item--count'}>{counter}</span>

      <button className={'item item--controller'} onClick={handleAdd}>
        <span className={'icon--span'} ><GrAddCircle /></span>
      </button>

      <button className={'item item--add-to-cart'} onClick={handleAddCart} >
        Add to cart
      </button>
    </div>
  );
}
export default ItemCount;