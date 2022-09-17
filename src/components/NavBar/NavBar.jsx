import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import logo from '../../images/giko-nav-bar-logo.png'
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
      <div className='nav-bar'>
        <Link to={'/'}>
          <img alt='logo' src={logo}></img>
        </Link>
        <Link className='button' to={'/'}>
          <div onClick={onModelsClick}>models</div>
        </Link>
        <Link className='button' to={'/'}>
          <div onClick={onLoginClick}>login</div>
        </Link>
        <Link className='button' to={'/'}>
          <CartWidget onCartClick={onCartClick} />
        </Link>
      </div>
    </>
  )
}
export default NavBar;