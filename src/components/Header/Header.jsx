import images from '../../images'
import { NavLink } from 'react-router-dom'

function Header() {
    let logo = images.logo;
    return (
        <header className="hero-image padding">
            <div className="hero-content"> 

                <img src={logo} alt="Header logo" className="header-logo" />

                <nav className="navbar navbar-expand-sm navbar-dark p-0 ">
                    <a href="https://www.facebook.com/greenlevelequestrian" target="./blank" className="mobile-hidden">
                        <i className="fa fa-facebook-square social-link"></i>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/*className="collapse navbar-collapse"*/}
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <NavLink to="./" className="nav-link">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./about" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./lessons" className="nav-link">
                                    Lessons
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./boarding" className="nav-link">
                                    Boarding
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./gallery" className="nav-link">
                                    Gallery
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="./contact" className="nav-link">
                                    Contact
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a href="https://www.facebook.com/greenlevelequestrian" target="./blank" className="mobile-visible">
                                    <i className="fa fa-facebook-square social-link"></i>
                                </a>
                            </li>
                        </ul>
                        
                    </div>
                    
                </nav> 
            </div>
        </header>
    );
}

export default Header;