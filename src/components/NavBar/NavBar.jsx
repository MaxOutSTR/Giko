import CartWidget from './CartWidget';
import Dropdown from '../Common/Dropdown';
import { Link } from 'react-router-dom'
import './styles/navbar.css'
import logo from '../../images/giko-nav-bar-logo.png'
import { useState } from 'react';
import { useEffect } from 'react';
import { collection, getFirestore, getDocs } from 'firebase/firestore'
const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [dropCategories, setDropCategories] = useState(false)


  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, 'categories');
    getDocs(categoriesCollection).then((snapshot) => {
      setCategories(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    })
  }, [])

  return (
    <>
      <div className='nav-bar'>
        <Link to={'/'}>
          <img alt='logo' src={logo}></img>
        </Link>
        <div className='nav-bar--button' onMouseEnter={() => { setDropCategories(true) }}>
          <Dropdown label={'categories'} options={categories} drop={dropCategories} setDrop={setDropCategories} />
        </div>
        <Link className='nav-bar--button' to={'/cart'}>
          <CartWidget />
        </Link>
      </div>
    </>
  )
}
export default NavBar;