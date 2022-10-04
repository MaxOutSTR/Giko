import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoriesContainer from './components/Categories/CategoriesContainer';
import CartProvider from './context/CartProvider';
import Cart from './components/Cart/Cart'
function App() {
  return (
    <CartProvider defaultValue={[]}>
      <BrowserRouter basename='/Giko'>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/:categoryId' element={<CategoriesContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
