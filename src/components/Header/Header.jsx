import images from '../../images'
import { NavLink, useLocation } from 'react-router-dom'
import { useState } from 'react';
import { Nav, Navbar } from  'react-bootstrap'


function Header() {
    const [expanded, setExpanded] = useState(false);
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

                <div className="item2">
                    <Navbar collapseOnSelect expanded={expanded} expand="sm" bg="transparent" variant="dark">

                        <NavLink to="https://www.facebook.com/greenlevelequestrian" className="mobile-hidden">
                            <i className="fa fa-facebook-square social-link"></i>
                        </NavLink>
                    
                        <Navbar.Toggle children={currentPath(pathname)} onClick={() => setExpanded(expanded ? false : "expanded")} className="dropdown-toggle" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to="./" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                                        Home
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to="./about" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                                        About
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to="./lessons" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                                        Lessons
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to="./boarding" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                                        Boarding
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to="./gallery" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                                        Gallery
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to="./contact" onClick={() => setTimeout(() => {setExpanded(false)}, 150)}>
                                        Contact
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link as={NavLink} to="https://www.facebook.com/greenlevelequestrian" className="mobile-visible">
                                        <i className="fa fa-facebook-square social-link"></i>
                                    </Nav.Link>
                                </Nav.Item>
                                                 
                            </Nav>
                        </Navbar.Collapse>
                    
                    </Navbar>
                </div>
                {/*
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
                */}
            </div>
        </header>
    );
}

export default Header;