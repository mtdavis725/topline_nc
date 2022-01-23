import images from '../../images' /*Array of images from images folder*/
import { Link } from 'react-router-dom'
import PageTitle from '../PageTitle';


function Lessons() {
    return (
        
            <main>
            <PageTitle title="Training with Topline"></PageTitle>
               

                <div className="grid-container lessons-container padding">
                    
                    <div className="item1">
                    <h2>Lesson Details</h2>
                    
                        <p>Laura's standard lessons often revolve around a specific skill, from equitation, to horse
                        behavior, to a dressage movement, to the overall balance of the horse. From there, Laura incorporates a number of related exercises, on the ground and under saddle, to help both horse and rider find a clear understanding of the skill or concept.</p>

                        <p>If you have your own horse or you are more than welcome to trailer in to our facility in Apex, NC for a lesson.</p>

                        <p>If you do not have a horse of your own, or you are interested in tuning up your riding on a different horse, Laura Rose runs a training program as well!</p>

                        <em>*All lessons are held at Green Level Equestrian, please inquire for any off-site training requests (rates subject to change).</em>

                    </div>

                    <div className="item2">
                        <div className="card lesson-card">
                            <img src={images.cards[3]} className="card-img" alt="..." />
                            <div className="card-img-overlay">
                                <div className="card-overlay-title">
                                    <h4 className="card-title">Standard Lesson</h4>
                                    <p className="hide">(Tap for Details)</p>
                                </div>
                                <div className="card-text">
                                    <p>Private standard lessons are 45-60 minutes in length. </p>
                                    <p>Shorter private lessons (30 minute), and group lessons are also available.</p>
                                </div>
                            </div>
                        </div>

                        <div className="card lesson-card">
                                <img src={images.cards[4]} className="card-img" alt="..." />

                                <div className="card-img-overlay">
                                    <div className="card-overlay-title">
                                        <h4 className="card-title">Training Programs</h4>
                                        <p className="hide">(Tap for Details)</p>
                                    </div>
                                    <div className="card-text">
                                        <p><strong>Full training:</strong> consists of <u>five</u> weekly private lessons.</p>
                                        <p><strong>Partial training:</strong> consists of <u>three</u> weekly private lessons.
                                        </p>
                                    </div>
                                </div>
                            </div>
                    </div>

                   

                        <div className="item3">
                            <h3>Have any questions or interested in booking a lesson?</h3>
                            <Link to="/contact">
                                <button type="button" className="btn btn-outline-light btn-lg">Contact us&nbsp;<i className="fa fa-long-arrow-right"></i></button>
                            </Link>
                            <hr className="bg-light w-75 mx-auto" />
                        </div>
                        
                        
                </div>

                

                





                <div className="grid-container lessons-container2 padding">
                    <div className="item1">
                    <h2>For Your Consideration</h2>
                    <hr className='bg-light w-25'></hr>
                            <p>Once you have some riding under your belt, Laura has numerous resources to help you find an appropriate horse to lease, or buy. Horse leasing/ownership isn't for everyone, but many people find that once they start riding all they want to do is RIDE MORE! And while multiple lessons a week are nice, having some time to ride on your own can be a useful learning tool to discover new things you would like to learn to do on or off the horse, and different goals for your lesson time!</p>
                        </div>

                        <div className="item2">
                        <h2>Safety</h2>
                        <hr className='bg-light w-25'></hr>
                            <p>While we want all of our riders to grow their equestrian skills and to have fun, our first priority for all of our riders is always safety. All riders must wear the appropriate safety gear during each lesson. Please wear boots/hard soled shoes and long/pants for all lessons.</p>
                        </div>
                </div>

            </main>
        
    );
}

export default Lessons;