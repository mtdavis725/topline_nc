import images from '../../images'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
            <div class="container-xl px-0 padding">
            <div class="row align-items-center no-gutters">
                <div className="col-12 text-center pb-2">
                    <Link to="/" className="text-center mx-auto redirect" >
                        <i className="fa fa-long-arrow-up"></i>
                    </Link>
                </div>
                <div className="col-12 col-sm-3 text-center p-2">
                    <img src={images.logo} alt="Footer logo" className="footer-logo" />
                </div>
                <div className="col-12 col-sm-6 text-center p-2 py-3">
                    <span><i className="fa fa-phone"> &nbsp;</i>(919) 444-1767</span>
                    <br />
                    <span><i className="fa fa-envelope"> &nbsp;</i>toplinetrainer@gmail.com</span>
                    <br /> 
                    <span><i className="fa fa-map-marker"> &nbsp;</i>1013 White Oak Creek Dr. Apex, NC 27523</span>
                </div>
                <div className="col-12 col-sm-3 text-center p-2">
                    <span>&copy; Topline Training 2022</span>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;