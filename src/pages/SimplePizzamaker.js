import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

import NavBar from "../components/NavBar";

function SimplePizzamaker() {
  const [selected, setSelected] = useState([]);
  const meat_toppings = ["Pepperoni", "Bacon", "Chicken", "Sausage"];
  const veggie_toppings = ["Peppers", "Onions", "Pickle", "Spinach"];
  const other_toppings = ["Extra cheese", "Extra oil", "Extra sauce", "Hot sauce", "Mayonnaise", "Mustard"];


  const handleSelect = (event) => {
    var updatedToppings = [...selected];
    if (event.target.checked) {
      updatedToppings = [...selected, event.target.value];
    } else {
      updatedToppings.splice(selected.indexOf(event.target.value), 1);
    }
    setSelected(updatedToppings);
  };

  var isSelected = (item) =>
    selected.includes(item) ? "selected-item" : "not-selected-item";

  return (
    <div className="app">
      <NavBar backVisible={false}/>
      <div className="main-content">
        <div className="pizza-overview">
          <img src="/images/pizza-background.png" alt="Pizza background"></img>
          {selected.map((item, index) => (
            <img key={index} src={"/images/" + item + ".png"} alt={item} />
          ))}
        </div>
        <div className="header">Choose Your Toppings</div>
        <div className="toppings-box">
          <div className="title">Meat Toppings</div>
          <div className="list-container small-margin">
            {meat_toppings.map((item, index) => (
              <div key={index}>
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
              <div key={index}>
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
              <div key={index}>
                <input id={item + "-id"} value={item} type="checkbox" onChange={handleSelect} />
                <label htmlFor={item + "-id"} className={isSelected(item)}>{item}</label>
              </div>
            ))}
          </div>
        </div>
        <Link to="/simplecheckout" state={{ toppings: selected }} >
          <button className="button">Add to Cart</button>
        </Link>
      </div>
    </div>
  );
}

export default SimplePizzamaker;
