import '../App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';


function Home() {

  const navigate = useNavigate();
  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/simplepizzamaker');
  };
  return(
  <div className="app">
    <div className="main-content-homepage">
      <div className='homepage-image'></div>
        <div className="button-placement-landing">
          <button className="button-35" onClick={navigateHome}>Customize & Order Pizza</button>
        </div>
    </div>
  </div>
);
  }
export default Home;
