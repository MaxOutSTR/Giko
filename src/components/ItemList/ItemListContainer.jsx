
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import CenterContainer from '../Common/CenterContainer'
import Loader from '../Common/Loader'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)
  const db = getFirestore();
  useEffect(() => {
    setLoading(true)
    const productsCollection = collection(db, 'products');
    getDocs(productsCollection).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false)
    })
  }, [])
  useEffect(() => {
    setLoading(true)
    const productsCollection = collection(db, 'products');
    getDocs(productsCollection).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false)
    })
  }, [])
  return (
    <div>
      {
        (loading) ?
          <CenterContainer>
            <Loader />
          </CenterContainer>
          :
          <ItemList items={items} />
      }
    </div >
  )
}
export default ItemListContainer;