import React, { useState } from "react";
import './App.css';

function App() {
  const [selected, setSelected] = useState([]);
  const meat_toppings = ["Pepperoni", "Sausage", "Chicken", "Sausage"];
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

  const selectedItems = selected.length
    ? selected.reduce((total, item) => {
      return total + "' " + item;
    })
    : "";

  var isSelected = (item) =>
    selected.includes(item) ? "selected-item" : "not-selected-item";

  return (
    <div className="app">
      <div className="meat_toppings">
        <div className="title">▼ Meat Toppings:</div>
        <div className="list-container">
          {meat_toppings.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleSelect} />
              <span className={isSelected(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="veggie_toppings">
        <div className="title">▼ Veggie Toppings:</div>
        <div className="list-container">
          {veggie_toppings.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleSelect} />
              <span className={isSelected(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="other_toppings">
        <div className="title">▼ Other Toppings:</div>
        <div className="list-container">
          {other_toppings.map((item, index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleSelect} />
              <span className={isSelected(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <button className="button">Add to Cart</button>
      <div>
        {'Items checked are: '}{selectedItems}
      </div>
    </div>
  );
}

export default App;
