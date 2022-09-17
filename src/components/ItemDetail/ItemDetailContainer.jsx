import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
import { itemsMock } from "../../mocks"
import './styles/itemDetailContainer.css'
const ItemDetailContainer = () => {
  const { id } = useParams()
  const getItem = new Promise((resolve, reject) => {

    const itemOb = itemsMock.find(x => x.id === parseInt(id));
    if (itemOb) {
      setTimeout(() => { resolve(itemOb) }, 2000)
    } else {
      setTimeout(() => { resolve('') }, 2000)
    }

  })

  const [item, setItem] = useState({})
  useEffect(() => {
    getItem.then((res) => {
      setItem(res)
    })
  }, [])
  return (
    <div className={'item-detail-container'}>
      <ItemDetail
        item={item}
      />
    </div>
  )
}
export default ItemDetailContainer