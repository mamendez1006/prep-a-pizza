import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import SimpleCheckout from './pages/SimpleCheckout';
import CheckoutDesign1 from './pages/CheckoutDesign1';
import SimplePizzamaker from './pages/SimplePizzamaker';
import SlideMaker from './pages/SlideMaker';
import Navbar from './components/NavBar';
import Design1 from './pages/Design1'
import Design2 from './pages/Design2'

const App = () => (
  <div className='app'>
    <Navbar />
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/home1" element={ <Design1/> } />
        <Route path="/home2" element={ <Design2/> } />
        <Route path="simplecheckout" element={ <SimpleCheckout/> } />
        <Route path="simplecheckout/completion" element={ <CheckoutDesign1/> } />
        <Route path="/home1/simplepizzamaker" element={ <SimplePizzamaker/> } />
        <Route path='/home2/SlideMaker' element={<SlideMaker/>} />
    </Routes> 
  </div>
);

export default App;
