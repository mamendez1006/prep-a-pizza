import React, {  useState } from "react";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import '../App.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import LocationPin from '../components/map/LocationPin'
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


// import required modules
import { EffectCoverflow, Pagination } from "swiper";

import Map from "../components/map/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import ReactDOM from 'react-dom';

function SlideMaker() {
  const [state, setState] = useState({
    isPaneOpen: false,
  });

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
          title={"Total: $10.99"}
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
                    <input id="name" class="input" type="text" placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="name" class="placeholder">Name</label>
                </div>
                <div class="subtitle">Card Information</div>
                <div class="input-container ic1">
                    <input id="card" class="input" type="number" placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="card" class="placeholder">Card #</label>
                </div>
                <div class="input-container ic1">
                    <input id="exp" class="input" type="text" placeholder=" " required/>
                    <div class="cut"></div>
                    <label for="exp" class="placeholder">Exp</label>
                </div>
                <div class="input-container ic2">
                    <input id="ccv" class="input" type="number" placeholder=" " required/>
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
        <div className="design-two-paragraph">Select One Of Each By Swiping To The Ingredient You Want</div>
        <div className="design-two-subtitle">Meats</div>
        <div className="swiper-container">
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"1"}
          coverflowEffect={{
          rotate: 5,
          stretch: 40,
          depth: 10,
          modifier: 1,
          slideShadows: true,
          scale: .7,
          }}
          pagination={{
              dynamicBullets: true,
              clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          initial-slide={"1"}
          class="mySwiper" >
             <SwiperSlide>
              <div className="slider-text">None</div>
            </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/sausage.glb" orientation="20deg 0 0" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/bacon.glb" orientation="50deg 0 0" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/pepperoni.glb" orientation="20deg 0 0" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="design-two-subtitle">Vegetables</div>
        <div className="swiper-container">
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"1"}
          coverflowEffect={{
          rotate: 5,
          stretch: 40,
          depth: 10,
          modifier: 1,
          slideShadows: true,
          scale: .7,
          }}
          pagination={{
              dynamicBullets: true,
              clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          initial-slide={"1"}
          class="mySwiper" >
            <SwiperSlide>
              <div className="slider-text">None</div>
            </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/pepper.glb" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/purple_onion.glb" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/spinach.glb" orientation="50deg 0 0" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="design-two-subtitle">Extras</div>
        <div className="swiper-container">
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"1"}
          coverflowEffect={{
          rotate: 10,
          stretch: 40,
          depth: 10,
          modifier: 1,
          slideShadows: true,
          scale: .7,
          }}
          pagination={{
              dynamicBullets: true,
              clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          initial-slide={"1"}
          class="mySwiper" >
            <SwiperSlide>
              <div className="slider-text">None</div>
            </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/olive_oil.glb" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/hot-sauce.glb" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
          <SwiperSlide>
            <model-viewer src="/images/design2/cheddar_cheese.glb" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="design-two-subtitle">Crust</div>
        <div className="swiper-container">
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"1"}
          coverflowEffect={{
          rotate: 5,
          stretch: 40,
          depth: 10,
          modifier: 1,
          slideShadows: true,
          scale: .7,
          }}
          pagination={{
              dynamicBullets: true,
              clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          initial-slide={"1"}
          class="mySwiper" >
          <SwiperSlide>
            <model-viewer src="/images/design2/pizza.glb" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="design-two-subtitle">Sauce</div>
        <div className="swiper-container">
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"1"}
          coverflowEffect={{
          rotate: 5,
          stretch: 40,
          depth: 10,
          modifier: 1,
          slideShadows: true,
          scale: .7,
          }}
          pagination={{
              dynamicBullets: true,
              clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          initial-slide={"1"}
          class="mySwiper" >
          <SwiperSlide>
            <model-viewer src="/images/design2/sauce.glb" orientation="10deg 0 0" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="design-two-subtitle">Cheese</div>
        <div className="swiper-container">
          <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"1"}
          coverflowEffect={{
          rotate: 5,
          stretch: 40,
          depth: 10,
          modifier: 1,
          slideShadows: true,
          scale: .7,
          }}
          pagination={{
              dynamicBullets: true,
              clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]}
          initial-slide={"1"}
          class="mySwiper" >
          <SwiperSlide>
          <model-viewer src="/images/design2/cheddar_cheese.glb" ar environment-image="images/design2/moon_1k.hdr" disable-zoom shadow-intensity="1" auto-rotate alt="Spinach"></model-viewer>
          </SwiperSlide>
        </Swiper>
        </div>

        <div className="button-placement-homepage">
              <button className="button-35" onClick={() => setState({ isPaneOpen: true })}>Checkout</button>
        </div>
      </div>
      </div>
    </div>



  );
}

export default SlideMaker;
