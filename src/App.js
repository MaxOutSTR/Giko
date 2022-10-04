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
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/Giko/' element={<ItemListContainer />} />
          <Route path='/Giko/item/:id' element={<ItemDetailContainer />} />
          <Route path='/Giko/cart' element={<Cart />} />
          <Route path='/Giko/category/:categoryId' element={<CategoriesContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
