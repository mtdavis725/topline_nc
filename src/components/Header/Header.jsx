import images from '../../images'

function Header() {
    let logo = images[3];
    return (
            <header className="hero-image">
                <div className="hero-content">
                    
                    <img src={logo} alt="Header logo" className="header-logo" />
                    
                        <nav className="navbar navbar-expand-sm navbar-dark p-0 ">
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="navbarResponsive">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/about.html">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/lessons.html">Lessons</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/boarding.html">Boarding</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/gallery.html">Gallery</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="pages/contact.html">Contact</a>
                                    </li> 
                                </ul>
                            </div>
                            <a href="https://www.facebook.com/greenlevelequestrian" target="./blank">
                                <i className="fa fa-facebook-square social-link"></i>
                            </a>
                        </nav>
                    
                </div>
        </header>
    );
}

export default Header;