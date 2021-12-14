import images from '../../images' /*Array of images from images folder*/

function Lessons() {
    return(
        <section>
            <main className="container-xl">
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-12 text-center">
                            <h1 className="page-header py-2 my-2">Training with Topline</h1>
                        </div>
                    </div>
                </div>

                <hr className="bg-light w-75 mx-auto" />

            
                <div className="container-fluid padding">
                <h2 className="content-header">Lesson Details</h2>
                    <div className="row mx-auto">
                    
                            
                            <div className="col-xs-12 col-sm-6 ">
                                    <p>Laura's standard lessons often revolve around a specific skill, from equitation, to horse
                                behavior, to a dressage movement, to the overall balance of the horse. From there, Laura
                                incorporates a number of related exercises, on the ground and under saddle, to help both horse
                                and rider find a clear understanding of the skill or concept.</p>
                                <p>If you have your own horse or you are more than welcome to trailer in to our facility in Apex, NC
                                for a lesson.</p>
                            </div>
                            <div className="col-xs-12 col-sm-6">
                                <p>If you do not have a horse of your own, or you are interested in tuning up your
                                riding on a different horse, Laura Rose runs a training program as well!</p>
                                <p>*All lessons are held at Green Level Equestrian, please inquire for any off-site training
                                requests (rates subject to change).</p>
                            </div>
                        
                    </div>
                </div>



                <div className="container-fluid padding">
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-6 col-md-5 p-2">
                            <div className="card border">
                                <img src={images.cards[3]} className="card-img" alt="..." />
                                <div className="card-img-overlay d-flex align-items-center">
                                    <div className="card-overlay-title">
                                        <h3 className="card-title lessons">Standard Lesson</h3>
                                        <p className="hide">(Tap for Details)</p>
                                    </div>
                                    <div className="card-text p-3">
                                        <p>Private standard lessons are 45-60 minutes in length. </p>
                                        <p>Shorter private lessons (30 minute), and group lessons are also available.</p>


                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-10 col-sm-6 col-md-5 p-2">
                            <div className="card border">
                                <img src={images.cards[4]} className="card-img" alt="..." />

                                <div className="card-img-overlay d-flex align-items-center">
                                    <div className="card-overlay-title">
                                        <h3 className="card-title lessons">Training Programs</h3>
                                        <p className="hide">(Tap for Details)</p>
                                    </div>
                                    <div className="card-text p-3">
                                        <p><strong>Full training:</strong> consists of <u>five</u> weekly private lessons.</p>
                                        <p><strong>Partial training:</strong> consists of <u>three</u> weekly private lessons.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>




                <div className="container-fluid padding">
                    <div className="row mx-auto justify-content-center">
                        <div className="col-sm-9 align-self-center">
                            <h4>Have any questions or interested in booking a lesson?</h4>
                        </div>
                        <div className="col-sm-3 text-center">
                            <a href="contact.html"><button type="button" className="btn btn-outline-light btn-lg w-100">Contact us&nbsp;<i className="fa fa-long-arrow-right"></i></button></a>
                        </div>
                    </div>
                    <hr className="bg-light w-75 mx-auto" />
                </div>



            

                <div className="container-fluid padding">
                    <div className="row mx-auto">
                        <div className="col-12 pb-0 ">
                            <h2 className="content-header">For Your Consideration</h2>
                            <p>Once you have some riding under your belt, Laura has numerous resources to help you find an
                                appropriate horse to lease, or buy. Horse leasing/ownership isn't for everyone, but many people
                                find that once they start riding all they want to do is RIDE MORE! And while multiple lessons a
                                week are nice, having some time to ride on your own can be a useful learning tool to discover
                                new things you would like to learn to do on or off the horse, and different goals for your
                                lesson time!</p>
                        </div>

                    </div>
                </div>


            
                <div className="container-fluid padding">
                    <div className="row mx-auto">
                        <div className="col-12 border border-danger rounded">
                            <h2 className="content-header">Safety</h2>
                            <p>While we want all of our riders to grow their equestrian skills and to have fun, our first
                                priority for all of our riders is always safety. All riders must wear the appropriate safety
                                gear during each lesson. Please wear boots/hard soled shoes and long/pants for all lessons.</p>
                        </div>

                    </div>
                </div>
            </main>
        </section>
    );
}

export default Lessons;