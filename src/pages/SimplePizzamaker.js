import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  var isSelected = (item) =>
    selected.includes(item) ? "selected-item" : "not-selected-item";

  return (
    <div className="app">
      <div className="main-content">
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
        <Link to="/simplecheckout" state={{ toppings: selected }} >
          <div className="button-placement">
            <button className="button-35">Add to Cart</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default SimplePizzamaker;
