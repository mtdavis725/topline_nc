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
            <div className="container-xl"> 
            <div className="grid-container hero-container">



                <div className="item1">
                    <img src={logo} alt="Header logo" className="header-logo img-fluid" />
                </div>

                <div className="item2">
                    <Navbar collapseOnSelect expanded={expanded} expand="sm" bg="transparent" variant="dark">

                        <Nav.Link href="https://www.facebook.com/greenlevelequestrian" target="_blank" className="mobile-hidden">
                            <i className="fa fa-facebook-square social-link"></i>
                        </Nav.Link>
                    
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
                                    <Nav.Link as="a" href="https://www.facebook.com/greenlevelequestrian" target="_blank" className="mobile-visible">
                                        <i className="fa fa-facebook-square social-link"></i>
                                    </Nav.Link>
                                </Nav.Item>
                                                 
                            </Nav>
                        </Navbar.Collapse> 
                    </Navbar>
                </div>
            </div>
            </div>
        </header>
    );
}

export default Header;