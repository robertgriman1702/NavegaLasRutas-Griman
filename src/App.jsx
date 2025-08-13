import React from 'react';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
import Cart from './components/Cart/Cart.jsx';
import Checkout from './components/checkout/checkout.jsx';
import WhatsButton from './components/whatsButton/whatsButton.jsx';
import Viewpager from './components/Hero/hero.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className='App-container'>
          <NavBar />
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <Viewpager />
                  <ItemListContainer />
                </>
              } 
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/detail/:productId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h2 style={{color: "#fff", textAlign: "center"}}>404 - Página no encontrada</h2>} />
          </Routes>
          <Footer />
          <WhatsButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
