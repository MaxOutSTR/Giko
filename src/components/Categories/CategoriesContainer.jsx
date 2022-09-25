import { doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection } from 'firebase/firestore'
import { useState } from "react";
import ItemList from "../ItemList/ItemList";
import CenterContainer from "../Common/CenterContainer";
import Loader from "../Common/Loader";
const CategoriesContainer = () => {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('');
  useEffect(() => {
    if (!categoryId) return;
    const db = getFirestore();
    const productsCollection = collection(db, 'products');
    const q = query(
      productsCollection,
      where('categoryId', '==', categoryId)
    );
    setLoading(true)
    getDocs(q).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
      setLoading(false)
    })
    const categoryRef = doc(db, 'categories', categoryId);
    getDoc(categoryRef).then((snapshot) => {
      if (snapshot.exists) {
        setSelectedCategory({ id: snapshot.id, ...snapshot.data() })
      }
    })
  }, [categoryId])
  return (
    <>
      {
        (loading) ?
          <CenterContainer>
            <Loader />
          </CenterContainer>
          :
          <ItemList items={items} text={`Looking for: ${selectedCategory.name}`} />
      }
    </>
  )
}
export default CategoriesContainer;