import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import Loader from '../Common/Loader'
import CenterContainer from "../Common/CenterContainer"
import './styles/itemDetailContainer.css'
import { doc, getDoc, getFirestore } from "firebase/firestore"
const ItemDetailContainer = () => {
  const { id } = useParams()
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productRef = doc(db, 'products', id);
    setLoading(true)
    getDoc(productRef).then((snapshot) => {
      if (snapshot.exists) {
        setItem({ id: snapshot.id, ...snapshot.data() })
        setLoading(false)
      }
    })
  }, [])
  return (
    (loading) ?
      <CenterContainer>
        <Loader />
      </CenterContainer>
      :
      <div className={'item-detail-container'}>
        <ItemDetail item={item} />
      </div>
  )
}
export default ItemDetailContainer