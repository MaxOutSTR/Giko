
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
const ItemListContainer = ({ greetingLines }) => {
  const { categoryId } = useParams();
  return (
    <div className="item-list-container">
      <ItemList
        categoryId={categoryId}
      />
    </div >
  )
}
export default ItemListContainer;