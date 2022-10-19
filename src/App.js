import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SimpleCheckout from './pages/SimpleCheckout';
import SimplePizzamaker from './pages/SimplePizzamaker';
import SlideMaker from './pages/SlideMaker';

const App = () => (
  <div className='app'>
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="simplecheckout" element={ <SimpleCheckout/> } />
        <Route path="simplepizzamaker" element={ <SimplePizzamaker/> } />
        <Route path='SlideMaker' element={<SlideMaker/>} />
    </Routes> 
  </div>
);

export default App;
