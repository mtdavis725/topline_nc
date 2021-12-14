import { Link } from 'react-router-dom'
import images from '../../images' /*Array of images from images folder*/

function Home() {
    let aboutCard = images[4];
    let lessonsCard = images[5];
    let boardingCard = images[6];
    

    return (
        <section>
            <main className="container-xl ">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="page-header py-2 my-3">Take your horse to the top!</h1>
                        </div>
                    </div>
                </div>

                <hr className="bg-light w-75 mx-auto" />

                <div className="container-fluid text-center padding">
                    <div className="row mx-auto">
                        <div className="col-12 text-center py-2">
                            <p>Topline Training offers horse riding lessons, training programs, full boarding and much more. We are based out of the lovely Green Level Equestrian boarding facility in Apex, NC!
                                <strong>Laura Rose Heymann</strong>, owner/trainer and on-site barn manager, founded Topline
                                Training in August of 2008. It has been a lifelong dream of hers to better understand the equine
                                mind, and to create a community for those who share her passion. </p>
                        </div>
                        <hr className="bg-light w-75 mx-auto" />
                    </div>
                </div>




            
                <div className="container-fluid padding">
                    <div className="row mx-auto justify-content-center">
                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4 mb-2">

                            <div className="card h-100">
                                <img className="card-img-top" src={aboutCard} alt="About card"/>
                                <div className="card-body text-center">
                                    <h3 className="card-title p-1">About Us</h3>
                                    <p className="card-text">Laura Rose Heymann is a cornerstone of the local equine community
                                        operating Topline Training out of Green Level Equestrian for the past 4 years.</p>
                                </div>
                                <div className="card-footer">
                                    <Link to="../about">
                                        <button type="button" className="btn btn-outline-light btn-md w-100">
                                            Learn more &nbsp;<i className="fa fa-long-arrow-right"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4 mb-2">
                            <div className="card h-100">
                                <img className="card-img-top" src={lessonsCard} alt="Lessons card" />
                                <div className="card-body text-center">
                                    <h3 className="card-title p-1">Lessons</h3>
                                    <p className="card-text">We offer Hunter-Jumper and Dressage lessons to both children and
                                        adults! Full and partial training/lesson programs are also available. </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="../lessons">
                                        <button type="button" className="btn btn-outline-light btn-md w-100">
                                            Learn more &nbsp;<i className="fa fa-long-arrow-right"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-5 col-lg-4 mb-2">
                            <div className="card h-100">
                                <img className="card-img-top " src={boardingCard} alt="Boarding card" />
                                <div className="card-body text-center">
                                    <h3 className="card-title p-1">Boarding</h3>
                                    <p className="card-text">Full stall boarding is offered at Green Level Equestrian. Availability
                                        varies, please contact us to set up an appointment to come and visit.
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link to="../boarding">
                                        <button type="button" className="btn btn-outline-light btn-md w-100">
                                            Learn more &nbsp;<i className="fa fa-long-arrow-right"></i>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
        </section>

    );
}

export default Home;