function Boarding() {
    return(
        <section>
            <main class="container-xl">
                <div class="container-fluid">
                    <div class="row mx-auto">
                        <div class="col-12 text-center">
                            <h1 class="page-header py-2 my-2">Green Level Equestrian - Apex, NC</h1>
                        </div>
                    </div>
                </div>


                <hr class="bg-light w-75 mx-auto" />

                <div class="container-fluid padding">
                    <div class="row mx-auto">
                        <div class="col-12 text-center">
                            <p> Come and joins us at Green Level Equestrian (GLE)! We are very excited to have use of the lovely
                                facility. The main goal of the barn is to provide a kind, open, judgement-free zone for horses
                                and riders to learn and relax while maintaining top quality horse care.​</p>
                        </div>
                    </div>
                    <hr class="bg-light w-75 mx-auto" />
                </div>

                <div class="container-fluid padding">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src="../images/gle-walkway-1.jpg" class="d-block mx-auto" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../images/indoor-arena-2.JPG" class="d-block mx-auto" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../images/outdoor-arena-1.JPG" class="d-block mx-auto" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../images/roman-petey.jpg" class="d-block mx-auto" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img src="../images/bridals-1.jpg" class="d-block mx-auto" alt="..." />
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid">
                    <div class="row mx-auto">
                        <div class="col-sm-6">
                            <div class="card h-100" style={{backgroundColor: `#090909`}}>
                                <div class="card-body">
                                    <h3 class="card-title text-center"><u>Facilty features:</u></h3>
                                    <p>Our barn has 16 well ventilated stalls each with a back window, metal stall front and
                                        automated fly spray dispenser. We also have two wash/grooming stalls including hot and
                                        cold water. </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card h-100" style={{backgroundColor: `#090909`}}>
                                <div class="card-body">
                                    <h3 class="card-title text-center"><u>Riding options:</u></h3>
                                    <p>GLE has both a covered arena and outdoor arena. Both arenas are lighted making riding
                                        convenient no matter the time of day. The outdoor arena carries a full set of jumps
                                        including a roll top, brush jump and coop! </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid padding">
                    <div class="row mx-auto">
                        <div class="col-12">
                            <div class="card p-3">
                                <div class="card-body">
                                    <h3 class="card-title text-center mb-4">What's included with board?</h3>
                                    <div class="row">
                                        <div class="col-12 col-sm-6 p-0">
                                            <ul class="mx-auto">
                                                <li>Stall equipped with:
                                                    <ul>
                                                        <li>Two water buckets, a feed bucket</li>
                                                        <li>A blanket bar</li>
                                                    </ul>
                                                </li>
                                                <li>Scheduling of veterinarian and farrier services</li>
                                            </ul>
                                        </div>
                                        <div class="col-12 col-sm-6 p-0">
                                            <ul>
                                                <li>2 daily grain feedings</li>
                                                <li>3-4 feedings orchard grass hay</li>
                                                <li>Supplements</li>
                                                <li>Winter blanketing</li>

                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid padding">
                    <div class="row mx-auto justify-content-center">
                        <div class="col-sm-9 align-self-center">
                            <h4>Interested in checking boarding availability or scheduling a tour of our facility?</h4>
                        </div>
                        <div class="col-sm-3 text-center">
                            <a href="contact.html"><button type="button" class="btn btn-outline-light btn-lg w-100">Contact us&nbsp;<i class="fa fa-long-arrow-right"></i></button></a>
                        </div>
                    </div>

                </div>



            </main>
        </section>

    );
}

export default Boarding;