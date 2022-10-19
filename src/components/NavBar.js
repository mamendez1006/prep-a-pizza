import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function NavBar({backVisible, backDest}) {
    const navigate = useNavigate();
    const visibilityState = backVisible ? "visible" : "hidden";
    console.log(visibilityState);

    const navigateTo = () => {
        navigate(backDest);
    }

    return (
        <div className='navbar'>
            <button style={{visibility: visibilityState}} className="back-button" type="button" onClick={navigateTo}>
                <img alt="back button" src="/images/back-icon.png" />
            </button>
            <Link className='link-style' to='/'>
                <img alt="logo" src="/images/name-logo.png" />
            </Link>
        </div>
    );
}

export default NavBar;