import React, {  useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import '../App.css'
import ImageSlider from "../components/ImageSlider";
import { Swiper, SwiperSlide } from 'swiper/react';
import Map from "../components/map/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ReactDOM from 'react-dom';
import LocationPin from '../components/map/LocationPin'
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

function SlideMaker() {

  var slides = [
    { url: '/images/sliderPics/bacon.jpg', title: 'bacon', price: 1, isActive: true },
    { url: '/images/sliderPics/sausage.png', title: 'sausage', price: 2, isActive: false },
    { url: '/images/sliderPics/pepperoni.jpg', title: 'pepperoni', price: 3, isActive: false }
  ];

  var slides1 = [
    { url: '/images/sliderPics/mushroom.jfif', title: 'mushroom', price: 1, isActive: true },
    { url: '/images/sliderPics/onion.jpg', title: 'onion', price: 2, isActive: false },
    { url: '/images/sliderPics/peppers.jpg', title: 'peppers', price: 3, isActive: false }
  ];

  var slides2 = [
    {url: '/images/sliderPics/whitesauce.jpeg', title: 'whitesauce', price: 1, isActive: true},
    {url: '/images/sliderPics/pizza-sauce.png', title: 'pizza-sauce', price: 2, isActive: false}
  ];

  var slides3 = [
    {url: '/images/sliderPics/regularCrust.png', title: 'regularCrust', price: 1, isActive: true},
    {url: '/images/sliderPics/cauliflowercrust.webp', title: 'cauliflower', price: 2, isActive: false}
  ];

  const [state, setState] = useState({
    isPaneOpen: false,
  });

  function calcTotal(){
  var total = 8.98;
    for(let i = 0; i < slides.length; i++){
      if(slides[i].isActive){
        total+=slides[i].price;
      }
    }
    for(let i = 0; i < slides1.length; i++){
      if(slides1[i].isActive){
        total+=slides1[i].price;
      }
    }
    for(let i = 0; i < slides2.length; i++){
      if(slides2[i].isActive){
        total+=slides2[i].price;
      }
    }
    for(let i = 0; i < slides3.length; i++){
      if(slides3[i].isActive){
        total+=slides3[i].price;
      }
    }

    return "Total: $" + total;
  }

  const location = {
    address: 'Newell Dr, Gainesville, FL 32603',
    lat: 29.64927,
    lng: -82.34376,
  } 

  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };

  return (
    <div>
      <div className="main-content">
      <SlidingPane
          className="checkoutSlider"
          overlayClassName="pane"
          isOpen={state.isPaneOpen}
          title={calcTotal.call()}
          from="bottom"
          width="100%"
          onRequestClose={() => {
            setState({ isPaneOpen: false });
          }}
      >
          <div class="form">
                <div class="title-checkout">Checkout</div>
                <div class="subtitle">Let's get this pizza ordered!</div>
                <div class="input-container ic1">
                    <input id="name" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="name" class="placeholder">Name</label>
                </div>
                <div class="input-container ic1">
                    <input id="card" class="input" type="number" placeholder=" " />
                    <div class="cut"></div>
                    <label for="card" class="placeholder">Card #</label>
                </div>
                <div class="input-container ic1">
                    <input id="exp" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="exp" class="placeholder">Exp</label>
                </div>
                <div class="input-container ic2">
                    <input id="ccv" class="input" type="number" placeholder=" " />
                    <div class="cut"></div>
                    <label for="ccv" class="placeholder">CCV</label>
                </div>
                <div className="map-box">
                  <Wrapper apiKey={"AIzaSyCafiRu_wI0hkn94SQ3V1E8N_78ffmyD0k"} render={render}>
                    <Map location={location} zoomLevel={15} />
                  </Wrapper>
                  <LocationPin/> 
                </div>
                <Popup trigger={<button class="submit"> Submit</button>} modal>
                  {close =>(
                    <div className="modal">
                      <div className="h2">Order Confirmed</div>
                      <Link to="/">
                        <div className="button-placement">
                            <button type="text" class="submit">Return to Home</button>
                        </div>
                      </Link>
                    </div>)}
                </Popup>
            </div>
        </SlidingPane>
      
      <div className="selection-container">
        <div className="design-two-title">Your Pizza</div>
        <div className="design-two-paragraph">Please Select From Below</div>
        <div className="design-two-subtitle">Meats</div>
        <div className="slider-image-container">
          <ImageSlider slides={slides} />
        </div>
        <div className="design-two-subtitle">Vegetables</div>
        <div className="slider-image-container">
          <ImageSlider slides={slides1} />
        </div>
        <div className="design-two-subtitle">Sauce</div>
        <div className="slider-image-container">
          <ImageSlider slides={slides2} />
        </div>
        <div className="design-two-subtitle">Crust</div>
        <div className="slider-image-container">
          <ImageSlider slides={slides3} />
        </div>

        <div className="button-placement">
              <button className="button-35" onClick={() => setState({ isPaneOpen: true })}>Checkout</button>
        </div>
      </div>
      </div>
    </div>



  );
}

export default SlideMaker;
