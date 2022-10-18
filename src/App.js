import React from 'react';
import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Simple_Checkout from './pages/Simple_Checkout';
import Simple_Pizzamaker from './pages/Simple_Pizzamaker';
import SlideMaker from './pages/SlideMaker';

const App = () => (
  <div className='app'>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="simple_checkout" element={ <Simple_Checkout/> } />
        <Route path="simple_pizzamaker" element={ <Simple_Pizzamaker/> } />
        <Route path='SlideMaker' element={<SlideMaker/>} />
    </Routes> 
  </div>
);

export default App;
