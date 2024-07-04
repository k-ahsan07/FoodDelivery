import React, { useState } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home/Home'; // Adjust path as needed
import Cart from './pages/Cart/Cart'; // Adjust path as needed
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'; // Adjust path as needed
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);


  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
