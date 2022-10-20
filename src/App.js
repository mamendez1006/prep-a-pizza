import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SimpleCheckout from './pages/SimpleCheckout';
import CheckoutDesign1 from './pages/CheckoutDesign1';
import SimplePizzamaker from './pages/SimplePizzamaker';
import SlideMaker from './pages/SlideMaker';
import Navbar from './components/NavBar';

const App = () => (
  <div className='app'>
    <Navbar />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="simplecheckout" element={ <SimpleCheckout/> } />
        <Route path="simplecheckout/completion" element={ <CheckoutDesign1/> } />
        <Route path="simplepizzamaker" element={ <SimplePizzamaker/> } />
        <Route path='SlideMaker' element={<SlideMaker/>} />
    </Routes> 
  </div>
);

export default App;
