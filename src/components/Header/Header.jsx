import images from '../../images'
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react';


function Header() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const handleNavCollapse = () => {
        setIsNavCollapsed(!isNavCollapsed);
    }
    const location = useLocation();
    const pathname = location.pathname;
    const currentPath = (pathname) => {
        if(pathname === "/") {
            return "Home"
        } else {
            return pathname.charAt(1).toUpperCase() + pathname.slice(2);
        }
    }
    const logo = images.logo;

    return (
        <header className="hero-image">
            <div className="hero-content"> 
                <div className="item1">
                    <img src={logo} alt="Header logo" className="header-logo img-fluid" />
                </div>

                <nav className="item2 navbar navbar-expand-sm navbar-dark p-0">
                    <a href="https://www.facebook.com/greenlevelequestrian" target="./blank" className="mobile-hidden">
                        <i className="fa fa-facebook-square social-link"></i>
                    </a>
                    <button className="navbar-toggler nav-link" type="button" data-toggle="collapse"
                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" >
                        {currentPath(pathname) + " "}
                        <i class="fa fa-angle-down"></i>
                    </button>
                    
                    <div className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`} id="navbarResponsive">
                        <ul className="navbar-nav mx-auto">
                            
                            <li className="nav-item"  onClick={handleNavCollapse}>
                                <NavLink to="./" className="nav-link">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item"  onClick={handleNavCollapse}>
                                <NavLink to="./about" className="nav-link">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item"  onClick={handleNavCollapse}>
                                <NavLink to="./lessons" className="nav-link">
                                    Lessons
                                </NavLink>
                            </li>
                            <li className="nav-item"  onClick={handleNavCollapse}>
                                <NavLink to="./boarding" className="nav-link">
                                    Boarding
                                </NavLink>
                            </li>
                            <li className="nav-item"  onClick={handleNavCollapse}>
                                <NavLink to="./gallery" className="nav-link">
                                    Gallery
                                </NavLink>
                            </li>
                            <li className="nav-item"  onClick={handleNavCollapse}>
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