import CartWidget from './CartWidget';
import Dropdown from '../Common/Dropdown';
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import logo from '../../images/giko-nav-bar-logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { collection, getFirestore, getDocs } from 'firebase/firestore'
const NavBar = () => {
  const cartContext = useContext(CartContext)
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [dropCategories, setDropCategories] = useState(false)
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  }

  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, 'categories');
    getDocs(categoriesCollection).then((snapshot) => {
      setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })

  }, [])

  useEffect(() => {
    if (!categories[0]) return;
    setCategory(categories[0].key)
  }, [categories])
  return (
    <>
      <div className='nav-bar'>
        <Link to={'/'}>
          <img alt='logo' src={logo}></img>
        </Link>
        <div className='nav-bar--button' onClick={() => { setDropCategories(!dropCategories) }}>
          <Dropdown label={'categories'} options={categories} drop={dropCategories} />
        </div>
        <Link className='nav-bar--button' to={'/'}>
          <div>login</div>
        </Link>
        <Link className='nav-bar--button' to={'/cart'}>
          <CartWidget />
        </Link>
      </div>
    </>
  )
}
export default NavBar;