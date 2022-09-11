import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from 'react-router-dom'
const ItemDetailContainer = () => {
  const itemsMock = [
    {
      id: 1,
      title: 'Mouse',
      stock: 7,
      description: 'Just a regular office mouse',
      price: 2.99,
      pictureUrl: 'https://d2ulnfq8we0v3.cloudfront.net/cdn/990386/media/catalog/product/cache/1/small_image/295x/040ec09b1e35df139433887a97daa66f/a/9/a989de43d315f8b05b1cecf57723eee4_10.jpg'
    },
    {
      id: 2,
      title: 'Keyboard',
      stock: 4,
      description: 'Just a regular office keyboard',
      price: 5.99,
      pictureUrl: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MK2A3Z?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1628010524000'
    },
    {
      id: 3,
      title: 'Headphones',
      stock: 6,
      description: 'Just regular office headphones',
      price: 16.49,
      pictureUrl: 'https://www.addasound.com/uploads/image/20220517/14/inspire-16-bluetooth-headset.jpg'
    },
  ];
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
    <>
      <ItemDetail
        item={item}
      />
    </>
  )
}
export default ItemDetailContainer