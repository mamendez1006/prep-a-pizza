import '../App.css';
import { Link } from "react-router-dom";

const Home = () => (
  <div className="app">
    <div className="main-content-homepage">
      <div className='homepage-image'></div>
      <Link to="SlideMaker">
          <div className="button-placement-landing">
            <button className="button-35">Customize & Order Pizza</button>
          </div>
      </Link>
    </div>
  </div>
);

export default Home;
