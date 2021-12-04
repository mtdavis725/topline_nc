import images from '../../images'

function Footer() {
    let logo = images[3];
    return (
        <footer>
            <div class="container-xl">
            <div class="row align-items-center no-gutters">
                <div className="col-12 text-center pb-3">
                    <a href="#home" className=" text-center mx-auto redirect">
                        <i className="fa fa-long-arrow-up"></i>
                    </a>
                </div>
                <div className="col-12 col-sm-3 text-center">
                    <img src={logo} alt="Footer logo" className="footer-logo" />
                </div>
                <div className="col-12 col-sm-6 text-center">
                    <span><i className="fa fa-phone"> &nbsp;</i>(919) 444-1767</span>
                    
                    <br />
                    <span><i className="fa fa-envelope"> &nbsp;</i>toplinetrainer@gmail.com</span>
                    <br /> 
                    
                    <span><i className="fa fa-map-marker"> &nbsp;</i>1013 White Oak Creek Dr. Apex, NC 27523</span>
                </div>
                <div className="col-12 col-sm-3 text-center">
                    <span>&copy; Topline Training 2021</span>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;