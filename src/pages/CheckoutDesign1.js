import * as React from 'react';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import './checkout.css';
import '../App.css';

function CheckoutDesign1() {
  const location = useLocation();
  console.log(location, " useLocation Hook");
  const toppings = location.state?.toppings;
  return (
    <div className="app">
        <div className='main-content-checkout-page'>
            <div class="form">
                <div class="title-checkout">Checkout</div>
                <div class="subtitle">Let's get this pizza ordered!</div>
                <div class="input-container ic1">
                    <input id="name" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="name" class="placeholder">Name</label>
                </div>
                <div class="input-container ic2">
                    <input id="email" class="input" type="email" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="email" class="placeholder">Email</label>
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
                <div class="input-container ic2">
                    <input id="address" class="input" type="text" placeholder=" " />
                    <div class="cut cut-short"></div>
                    <label for="address" class="placeholder">Address</label>
                </div>
                <Link to="/">
                    <div className="button-placement">
                        <button type="text" class="submit">Submit</button>
                    </div>
                </Link>
            </div>
        </div>
      </div>
  );
}

export default CheckoutDesign1;
