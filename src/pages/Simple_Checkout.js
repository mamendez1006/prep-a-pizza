import * as React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import '../App.css';

function Simple_Checkout() {
  const location = useLocation();
  console.log(location, " useLocation Hook");
  const toppings = location.state?.toppings;
  return (
    <div className="app">
      <div className="main-content">
        <header>
          <Link to="/simple_pizzamaker">
            <button className="">Back</button>
          </Link>
        </header>
        <h2>Checkout</h2>
        <p>1 item</p>
        <hr />
        <div>
          <div className="checkout-overview">
            <img className="checkout-pizza" src="/images/pizza-background.png" alt="Pizza background"></img>
            {toppings.map((item, index) => (
              <img className="checkout-pizza" key={index} src={"/images/" + item + ".png"} alt={item} />
            ))}
          </div>
        </div>
        <hr />
        <div>
          <p>Subtotal <span>$9.99</span></p>
          <p>Tax <span>$0.59</span></p>
          <br />
          <b><p>Total <span>$10.58</span></p></b>
        </div>
        <button className="button">Buy Now</button>


      </div>
    </div>
  );
}

export default Simple_Checkout;
