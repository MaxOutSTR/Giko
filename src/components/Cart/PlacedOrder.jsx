import { Link } from "react-router-dom";
import './styles/placedOrder.css'
const PlacedOrder = ({ orderId }) => {
  return (
    <div className="order-placed--container">
      <h1 className="order-placed--title">Your order was succesfuly placed!</h1>
      <div className="order-placed--mesage" ><span className="order-placed--text">Order code: </span><input className="order-placed--id" value={orderId} readOnly onClick={(evt) => { evt.target.select() }} /></div>
      <br />
      <div>Wanna try <Link to={'/'}>looking for more cool stuff?</Link></div>
    </div>
  )
}
export default PlacedOrder;