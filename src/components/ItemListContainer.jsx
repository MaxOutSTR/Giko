const ItemListContainer = ({ greetingLines }) => {
  return (
    <div className="item-list-container">
      {
        (greetingLines) ?
          greetingLines.map((line) => {
            return (<div key={line}>{line}</div>)
          })
          : 'Welcome'
      }
    </div>
  )
}
export default ItemListContainer;