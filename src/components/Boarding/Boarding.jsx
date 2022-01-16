import PageTitle from '../PageTitle';
import images from '../../images' /*Array of images from images folder*/
import { Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Boarding() {
    return(
        <section>
            <main>

            <PageTitle 
                title="Green Level Equestrian - Apex, NC"
                about="Come and joins us at Green Level Equestrian (GLE)! We are very excited to have use of the lovely facility. The main goal of the barn is to provide a kind, open, judgement-free zone for horses and riders to learn and relax while maintaining top quality horse care."
            ></PageTitle>

            <div className="grid-container boarding-container padding">
                <div className="item1">
                <Carousel fade indicators={false} nextLabel="" prevLabel="">
                    <Carousel.Item>
                        <img className="img-fluid" src={images.carousel[0]} alt="First slide"/>
                        <Carousel.Caption>
                        <h4>1013 White Oak Creek Dr. Apex, NC 27523</h4>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="img-fluid" src={images.carousel[1]} alt="Second slide"/>
                        <Carousel.Caption>
                        <h4>Indoor & Outdoor Riding Options</h4>
                        
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="img-fluid" src={images.carousel[2]} alt="Third slide"/>
                        <Carousel.Caption>
                        <h4>Lessons & Training Programs Available</h4>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="img-fluid" src={images.carousel[3]} alt="Fourth slide"/>
                        <Carousel.Caption>
                        <h4>On-Site Barn Manager</h4>
                        </Carousel.Caption>
                    </Carousel.Item>

                    
                    </Carousel>
                </div>

                <div className="item2">   
                    <h4>Facilty features:</h4>
                   
                    <p>Our barn has 16 well ventilated stalls each with a back window, metal stall front and automated fly spray dispenser. We also have two wash/grooming stalls including hot and cold water.</p>

                    <h4>Riding options:</h4>
                    
                    <p>GLE has both a covered arena and outdoor arena. Both arenas are lighted making riding convenient no matter the time of day. The outdoor arena carries a full set of jumps including a roll top, brush jump and coop!</p>
                </div>


                <div className="item3">
                    <h4>What's included with board?</h4>
                    <ul>
                        <li>Stall equipped with:</li>
                        <ul className="pl-3">
                            <li>Two water buckets, a feed bucket</li>
                            <li>A blanket bar</li>
                        </ul>
                        <li>Scheduling of veterinarian and farrier services</li>
                        <li>2 daily grain feedings</li>
                        <li>3-4 feedings orchard grass hay</li>
                        <li>Supplements</li>
                        <li>Winter blanketing</li>
                    </ul>
                </div>
            
                <div className="item4">
                    <h3>Interested in checking boarding availability or scheduling a tour of our facility?</h3>
                    <Link to="/contact">
                        <button type="button" className="btn btn-outline-light btn-lg">Contact us&nbsp;<i className="fa fa-long-arrow-right"></i></button>
                    </Link>
                </div>
                
            </div>
            
            </main>
        </section>

    );
}

export default Boarding;