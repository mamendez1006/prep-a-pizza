import React, {useState} from "react";
import './App.css';

function App() {
  const [selected, setSelected] = useState([]);
  const toppings = ["Pepperoni", "Sausage", "Bacon", "Peppers", "Onions", "Mushrooms"];

  const handleSelect = (event) => {
    var updatedToppings = [...selected];
    if (event.target.selected){
      updatedToppings = [...selected,event.target.value];
    } else {
      updatedToppings.splice(selected.indexOf(event.target.value), 1);
    }
    setSelected(updatedToppings);
  };

  const selectedItems = selected.length
    ? selected.reduce((total,item) => {
      return total + "' " + item;
      })
    : "";

    var isSelected = (item) =>
    selected.includes(item) ? "selected-item" : "not-selected-item";
    
  return (
    <div className="app">
      <div className="toppings">
        <div className="title">Your Toppings:</div>
        <div className="list-container">
          {toppings.map((item,index) => (
            <div key={index}>
              <input value={item} type="checkbox" onChange={handleSelect} />
              <span className={isSelected(item)}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        {'Items checked are:'}{selectedItems}
      </div>
    </div>
  );
}

export default App;
