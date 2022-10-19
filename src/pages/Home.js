import '../App.css';
import { Link } from "react-router-dom";

const Home = () => (
  <div className="app">
    <div className="main-content">
      <Link to="simplepizzamaker">
        <button className="button">Design 1</button>
      </Link>

      <Link to="SlideMaker">
        <button className='button'>Design 2</button>
      </Link>
    </div>
  </div>
);

export default Home;
