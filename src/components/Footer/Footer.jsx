import images from '../../images'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer class="padding">
            <div class="footer-container">

            <Link to="/" className="item1 redirect" >
                <i className="fa fa-long-arrow-up"></i>
            </Link>

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
        </footer>
    );
}

export default Footer;