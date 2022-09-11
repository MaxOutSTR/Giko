const ItemDetail = ({ item }) => {
  return (
    <div style={{ marginTop: '5em' }}>
      {/* Descripcion, foto y precio */}
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.pictureUrl} alt="" />
      <h3>{item.price}</h3>
    </div>
  )
}
export default ItemDetail