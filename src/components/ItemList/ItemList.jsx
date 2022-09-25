import React, { useEffect, useState } from "react";
import Item from "./Item";
import './styles/itemList.css'
const ItemList = ({ items, text = '' }) => {
  return (
    <div>
      <h1 style={{ paddingLeft: '1em' }} >{text}</h1>
      <div className={'item-list-container'}>
        {
          items.map((item) => {
            return (
              <Item key={item.id}
                {...item} />
            );
          })
        }
      </div>
    </div>
  );
}
export default ItemList;