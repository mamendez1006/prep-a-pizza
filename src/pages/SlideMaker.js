import React, {  useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import '../App.css'
import ImageSlider from "../components/ImageSlider";
import { Swiper, SwiperSlide } from 'swiper/react';

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
                <div class="img-container-checkout">
                    <img src="/images/map.png"></img>
                </div>
                <Link to="/">
                    <div className="button-placement">
                        <button type="text" class="submit">Submit</button>
                    </div>
                </Link>
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
