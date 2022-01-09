import PageTitle from '../PageTitle';
import images from '../../images' /*Array of images from images folder*/
import { Link } from 'react-router-dom'

function Boarding() {
    return(
        <section>
            <main className="container-xl">

            <PageTitle 
                title="Green Level Equestrian - Apex, NC"
            ></PageTitle>

            <div className="boarding-container padding">
                <div className="item1">
                    <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={images.carousel[0]} className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={images.carousel[1]} className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={images.carousel[2]} className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={images.carousel[3]}className="img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={images.carousel[4]} className="img-fluid" alt="..." />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                    
                <div className="item2">
                    <p>Come and joins us at Green Level Equestrian (GLE)! We are very excited to have use of the lovely facility. The main goal of the barn is to provide a kind, open, judgement-free zone for horses and riders to learn and relax while maintaining top quality horse care.</p>

                </div>

                <div className="item3">
                    
                    <h4>Facilty features:</h4>
                   
                    <p>Our barn has 16 well ventilated stalls each with a back window, metal stall front and automated fly spray dispenser. We also have two wash/grooming stalls including hot and cold water.</p>

                    <h3>Riding options</h3>
                    <hr className='bg-light w-25'></hr>
                    <p>GLE has both a covered arena and outdoor arena. Both arenas are lighted making riding convenient no matter the time of day. The outdoor arena carries a full set of jumps including a roll top, brush jump and coop!</p>
                </div>

                

                <div className="item4">
                    <h3>What's included with board?</h3>
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

            
                <div className="item5">
                    <h4>Interested in checking boarding availability or scheduling a tour of our facility?</h4>
                    <Link to="/contact">
                        <button type="button" className="btn btn-outline-light btn-md w-50">Contact us&nbsp;<i className="fa fa-long-arrow-right"></i></button>
                    </Link>
                </div>
                
            </div>
            
            </main>
        </section>

    );
}

export default Boarding;