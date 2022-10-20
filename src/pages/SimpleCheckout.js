import * as React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css';

function SimpleCheckout() {
  const location = useLocation();
  console.log(location, " useLocation Hook");
  const toppings = location.state?.toppings;
  return (
    <div className="app">
      <div className="main-content-checkout">
        <div className='checkout-content'>
          <div className='small-margin'>
            <h2>Checkout</h2>
            <p>1 item</p>
          </div>
          <hr />
          <div>
            <div className="checkout-overview">
              <div className="imgContainer">
                <img src="/images/pizza-background.png" alt="Pizza background"></img>
                <div className='images-toppings-checkout'>
                  {toppings.map((item, index) => (
                    <img key={index} src={"/images/" + item + ".png"} alt={item} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className='small-margin'>
            <p>Subtotal <span>$9.99</span></p>
            <p>Tax <span>$0.59</span></p>
            <br />
            <b><p>Total <span>$10.58</span></p></b>
          </div>
        </div>
        <div className="button-content">
          <Link to="/simplecheckout/completion">
            <div className="button-placement">
              <button className="button-35">Pay Now</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SimpleCheckout;
