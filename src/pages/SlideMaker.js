import React, {  useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import '../App.css'
import ImageSlider from "../components/ImageSlider";

function SlideMaker() {

  const slides = [
    { url: '/images/sliderPics/bacon.jpg', title: 'bacon' },
    { url: '/images/sliderPics/sausage.png', title: 'sausage' },
    { url: '/images/sliderPics/pepperoni.jpg', title: 'pepperoni' }
  ];

  const slides1 = [
    { url: '/images/sliderPics/mushroom.jfif', title: 'mushroom' },
    { url: '/images/sliderPics/onion.jpg', title: 'onion' },
    { url: '/images/sliderPics/peppers.jpg', title: 'peppers' }
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
    isPaneOpenLeft: false,
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
            <input type="submit" value="Submit" />
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

      <div>
        <button onClick={() => setState({ isPaneOpen: true })}>
          Click me to open pane!
        </button>
      </div>

    </div>



  );
}

export default SlideMaker;
