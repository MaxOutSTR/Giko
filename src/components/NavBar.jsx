import '../styles/main.css'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
const NavBar = () => {
  const onModelsClick = () => {
    console.log('models');
  }
  const onLoginClick = () => {
    console.log('login');
  }
  const onCartClick = () => {
    console.log('cart');
  }
  return (
    <>
      <div className="nav-bar">
        <Link to={'/'}
          className='nav-bar--logo' >
          GIK<span>&#333;</span>
        </Link>
        <div className='nav-bar--button' onClick={onModelsClick}>models</div>
        <div className='nav-bar--button' onClick={onLoginClick}>login</div>
        <CartWidget onCartClick={onCartClick} />
      </div>
    </>
  )
}
export default NavBar;