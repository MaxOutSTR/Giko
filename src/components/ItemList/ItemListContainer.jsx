
import ItemList from "./ItemList";
import CartContext from "../../context/CartContext";
import { useContext } from "react";
import { useEffect } from "react";
const ItemListContainer = () => {
  const cart = useContext(CartContext);
  useEffect(() => {
    console.log(cart)
  }, [])
  return (
    <div>
      <ItemList />
    </div >
  )
}
export default ItemListContainer;