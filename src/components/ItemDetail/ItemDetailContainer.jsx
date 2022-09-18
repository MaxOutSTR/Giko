import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { itemsMock } from "../../mocks"
import Loader from '../Common/Loader'
import './styles/itemDetailContainer.css'
const ItemDetailContainer = () => {
  const { id } = useParams()
  const getItem = new Promise((resolve, reject) => {

    const itemOb = itemsMock.find(x => x.id === parseInt(id));
    if (itemOb) {
      setTimeout(() => { resolve(itemOb) }, 1000)
    } else {
      setTimeout(() => { resolve('') }, 1000)
    }
  })
  const [item, setItem] = useState({})
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    getItem.then((res) => {
      setItem(res)
      setLoading(false)
    })
  }, [])
  return (
    (loading) ?
      <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader />
      </div>
      :
      <div className={'item-detail-container'}>
        <ItemDetail item={item} />
      </div>
  )
}
export default ItemDetailContainer