import React, {  useState } from "react";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import '../App.css'
import ImageSlider from "../components/ImageSlider";

function SlideMaker() {

  const slides = [
    { url: '/images/sliderPics/bacon.jpg', title: 'bacon', price: 1 },
    { url: '/images/sliderPics/sausage.png', title: 'sausage', price: 1 },
    { url: '/images/sliderPics/pepperoni.jpg', title: 'pepperoni', price: 1 }
  ];

  const slides1 = [
    { url: '/images/sliderPics/mushroom.jfif', title: 'mushroom', price: 1 },
    { url: '/images/sliderPics/onion.jpg', title: 'onion', price: 1 },
    { url: '/images/sliderPics/peppers.jpg', title: 'peppers', price: 1 }
  ];

  const slides2 = [
    {url: '/images/sliderPics/whitesauce.jpeg', title: 'whitesauce', price: 1},
    {url: '/images/sliderPics/pizza-sauce.png', title: 'pizza-sauce', price: 1}
  ];

  const slides3 = [
    {url: '/images/sliderPics/regularCrust.png', title: 'regularCrust', price: 1},
    {url: '/images/sliderPics/cauliflowercrust.webp', title: 'cauliflower', price: 1}
  ];

  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto'
  };

  const headingStyles = {
    textAlign: 'center'
  };

  const [state, setState] = useState({
    isPaneOpen: false,
  });

  return (
    <div>

<SlidingPane
          className="checkout"
          overlayClassName="pane"
          isOpen={state.isPaneOpen}
          title="Checkout!"
          from="bottom"
          width="100%"
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setState({ isPaneOpen: false });
          }}
        >
          <div className="form-box">
            <label>Name:
              <input type="text" name="name" />
            </label>
            <br></br>
            <label>Card Number:
              <input type="text" name="card number" />
            </label>
            <br></br>
            <label>Exp. date:
              <input type="text" name="exp date" />
            </label>
            <br></br>
            <label>CCV:
              <input type="text" name="ccv" />
            </label>
            <br></br>
            <Link to = "/">
              <input type="submit" value="Submit" />
            </Link>
          </div>
        </SlidingPane>

      <div className="heading">
        <h1 style={headingStyles}>Meats</h1>
      </div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      <h1 style={headingStyles}>Veggies</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides1} />
      </div>
      <h1 style={headingStyles}>Sauce</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides2} />
      </div>
      <h1 style={headingStyles}>Crust</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides3} />
      </div>

      <div>
        <button className="button" onClick={() => setState({ isPaneOpen: true })}>
          Checkout!
        </button>
      </div>
    </div>



  );
}

export default SlideMaker;
