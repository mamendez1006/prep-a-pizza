import React, { useState } from "react";
import { Link } from "react-router-dom";
import SlidingPane from "react-sliding-pane";
import Map from "../components/map/Map";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import '../App.css';

function SimplePizzamaker() {
  const [selected, setSelected] = useState([]);
  const meat_toppings = ["Pepperoni", "Bacon", "Sausage"];
  const veggie_toppings = ["Peppers", "Onions", "Spinach"];
  const other_toppings = ["Extra cheese", "Olive Oil", "Hot sauce"];


  const handleSelect = (event) => {
    var updatedToppings = [...selected];
    if (event.target.checked) {
      updatedToppings = [...selected, event.target.value];
    } else {
      updatedToppings.splice(selected.indexOf(event.target.value), 1);
    }
    setSelected(updatedToppings);
  };

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

  var isSelected = (item) =>
    selected.includes(item) ? "selected-item" : "not-selected-item";

  return (
    <div className="app">
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
                    <input id="name" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="name" class="placeholder">Name</label>
                </div>
                <div class="subtitle">Card Information</div>
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
                <div class="subtitle">Delivery Address</div>
                <div class="input-container ic2">
                    <input id="addy" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="addy" class="placeholder">Address</label>
                </div>
                <div class="input-container ic2">
                    <input id="zip" class="input" type="number" placeholder=" " />
                    <div class="cut"></div>
                    <label for="zip" class="placeholder">Zip Code</label>
                </div>
                <div class="input-container ic2">
                    <input id="state" class="input" type="text" placeholder=" " />
                    <div class="cut"></div>
                    <label for="state" class="placeholder">State</label>
                </div>
                <Link to="/">
                    <div className="button-placement-homepage">
                        <button type="text" class="submit">Submit</button>
                    </div>
                </Link>
            </div>
        </SlidingPane>

        <div className="pizzaContainer">
          <div className="fixed-pizza">
            <div className="header">Your Pizza</div>
            <div className="pizza-overview">
              <img src="/images/design1/pizza-background.png" alt="Pizza background"></img>
              {selected.map((item, index) => (
                <img key={index} src={"/images/design1/" + item + ".png"} alt={item} />
              ))}
            </div>
          </div>
          <hr />
        </div>
        <div className="options">
        <div className="header2">Choose Your Toppings</div>
        <div className="toppings-box">
          <div className="title">Meat Toppings</div>
          <div className="list-container small-margin">
            {meat_toppings.map((item, index) => (
              <div className="checkbox-rect2" key={index}>
                <input id={item + "-id"} value={item} type="checkbox" onChange={handleSelect} />
                <label htmlFor={item + "-id"} className={isSelected(item)} >{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="toppings-box">
          <div className="title">Veggie Toppings</div>
          <div className="list-container small-margin">
            {veggie_toppings.map((item, index) => (
              <div className="checkbox-rect2" key={index}>
                <input id={item + "-id"} value={item} type="checkbox" onChange={handleSelect} />
                <label htmlFor={item + "-id"} className={isSelected(item)}>{item}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="toppings-box">
          <div className="title">Other Toppings</div>
          <div className="list-container small-margin">
            {other_toppings.map((item, index) => (
              <div className="checkbox-rect2" key={index}>
                <input id={item + "-id"} value={item} type="checkbox" onChange={handleSelect} />
                <label htmlFor={item + "-id"} className={isSelected(item)}>{item}</label>
              </div>
            ))}
          </div>
          </div>
        </div>
        <div className="button-placement">
              <button className="button-35" onClick={() => setState({ isPaneOpen: true })}>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default SimplePizzamaker;
