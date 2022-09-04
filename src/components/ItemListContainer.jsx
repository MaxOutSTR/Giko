import { useState } from "react";
import ItemList from "./ItemList";

const ItemListContainer = ({ greetingLines }) => {

  //TO MOVE

  return (
    <div className="item-list-container">
      <ItemList />

      {/* {
        (greetingLines) ?
          greetingLines.map((line) => {
            return (<div key={line}>{line}</div>)
          })
          : 'Welcome'
      } */}
    </div >
  )
}
export default ItemListContainer;