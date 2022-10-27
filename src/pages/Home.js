import '../App.css';
import { Link } from "react-router-dom";

const Home = () => (
  <div className="app">
    <div className="main-content">
      <Link to="home1">
          <div className="button-placement-homepage">
            <button className="button-35">Design 1</button>
          </div>
      </Link>

      <Link to="home2">
          <div className="button-placement-homepage">
            <button className="button-35">Design 2</button>
          </div>
      </Link>
    </div>
  </div>
);

export default Home;
