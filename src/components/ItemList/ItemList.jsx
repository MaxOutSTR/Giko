import React, { useEffect, useState } from "react";
import Item from "./Item";
import { itemsMock } from "../../mocks"
import './styles/itemList.css'
import Loader from "../Common/Loader";
const ItemList = () => {
  const itemPromise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(itemsMock) }, 1000)
  })

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    itemPromise.then((res) => {
      setItems(res)
      setLoading(false)
    })
  }, [])

  return (
    (loading) ?
      <div style={{ position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader />
      </div>
      :
      <div className={'item-list-container'}>
        {
          items.map((item) => {
            return (
              <>
                <Item key={item.id.toString()}
                  {...item} />
              </>
            );
          })
        }
      </div>
  );
}
export default ItemList;