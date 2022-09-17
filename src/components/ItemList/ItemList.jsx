import React, { useEffect, useState } from "react";
import Item from "./Item";
import { itemsMock } from "../../mocks"
import './styles/itemList.css'
const ItemList = () => {
  const itemPromise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(itemsMock) }, 2000)
  })

  const [items, setItems] = useState([]);

  useEffect(() => {
    itemPromise.then((res) => {
      setItems(res)
    })
  }, [])

  return (
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