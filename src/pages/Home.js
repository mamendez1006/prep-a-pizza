import '../App.css';
import { Link } from "react-router-dom";

const Home = () => (
  <div className="app">
    <div className="main-content">
      <Link to="simple_pizzamaker">
        <button className="button">Design 1</button>
      </Link>
    </div>
  </div>
);

export default Home;