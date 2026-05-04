import './TopButton.css';
import {Link} from 'react-scroll';

function TopButton () {
    return (

        <>

        <div>
            <Link to="NavbarMenu" className="TopButton"
                  offset={-90} duration={500} spy={true} smooth={true} >
                <i className="fa-solid fa-circle-up fa-3x"></i>
            </Link>
        </div>

    </>

    );
}

export default TopButton;