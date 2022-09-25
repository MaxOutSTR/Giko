const CartItem = ({ item, quantity, removeItem }) => {
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        height: '6em',
        margin: '1em 0',
        border: '1px solid #000',
        width: '60%'
      }}
    >
      <img style={{
        height: '100%',
        aspectRatio: 1
      }} alt="" src={item.pictureUrl} />
      <div style={{
        width: '100%',
        padding: '0 1em'
      }}>
        <p>{item.name}</p>
        <p>{`Count: ${quantity}`}</p>
      </div>
      <div style={{
        width: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          padding: '0 1em'
        }}>{item.price}</div>
      </div>
      <span style={{
        position: 'absolute',
        top: '0',
        right: '0',
        border: '1px solid #000',
        color: '#FFF',
        backgroundColor: '#000',
        cursor: 'pointer',
        userSelect: 'none'
      }}
        onClick={() => { removeItem(item.id) }}
      >
        X
      </span>
    </div>
  )
}
export default CartItem;