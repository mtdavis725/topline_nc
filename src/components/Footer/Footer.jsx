import images from '../../images'

function Footer() {
    const redirect = () => {
        window.scrollTo(0, 0);
    }

    return (
        <footer className="padding">
            
            <div className="container-xl">
            <div className="grid-container footer-container">
            
            <div className="item1 redirect" >
                <i className="fa fa-long-arrow-up" onClick={redirect}></i>
            </div>

            <img src={images.logo} alt="Footer logo" className="item2 footer-logo" />
                
            <div className="item3">
                <span><i className="fa fa-phone"> &nbsp;</i>(919) 444-1767</span>
                <br />
                <span><i className="fa fa-envelope"> &nbsp;</i>toplinetrainer@gmail.com</span>
                <br /> 
                <span><i className="fa fa-map-marker"> &nbsp;</i>1013 White Oak Creek Dr. Apex, NC 27523</span>
            </div>
                
                <span className="item4">&copy; Topline Training 2022</span>
            </div>
            </div>
        </footer>
    );
}

export default Footer;