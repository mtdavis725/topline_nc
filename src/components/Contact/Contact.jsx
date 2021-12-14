function Contact() {
    return(
        <section>
            <main class="container-xl">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1 class="page-header py-2 my-2">Let's get in touch!</h1>
                        </div>
                    </div>
                </div>

                <hr class="bg-light w-75 mx-auto" />


                <div class="container-fluid padding">
                    <div class="row justify-content-center">
                        <div class="col-sm-12 col-md-10 col-lg-6 p-3" id="form_container">


                            <p class="text-center">
                                Please send us your message below. We will get back to you as quickly as possible!
                                <em>*Lessons cannot be scheduled through this form.</em>
                            </p>

                            <form name="contact" method="POST" data-netlify="true">
                                <div class="row justify-content-center">
                                    <div class="col-12 form-group pb-0">
                                        <label for="message">
                                            Message:</label>
                                        <textarea class="form-control" type="textarea" id="message" name="message"
                                            maxlength="6000" rows="7"></textarea>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-sm-6 form-group pt-0">
                                        <label for="name">
                                            Your Name:</label>
                                        <input type="text" class="form-control" id="name" name="name" required />
                                    </div>
                                    <div class="col-sm-6 form-group pt-0">
                                        <label for="email">
                                            Email:</label>
                                        <input type="email" class="form-control" id="email" name="email" required />
                                    </div>
                                </div>



                                <div class="row justify-content-center">
                                    <div class="col-12 form-group pt-0">
                                        <button type="submit" class="btn btn-outline-light btn-md w-50 float-right">Submit
                                            &nbsp;<span><i class="fa fa-envelope"></i></span></button>
                                    </div>
                                </div>

                            </form>
                            <div id="success_message" style={{width:`100%`, height:`100%`, display:`none`}}>
                                <h3>Posted your message successfully!</h3>
                            </div>
                            <div id="error_message" style={{width:`100%`, height:`100%`, display:`none`}}>
                                <h3>Error</h3>
                                Sorry there was an error sending your form.

                            </div>

                        </div>

                        <div class="col-sm-12 col-md-10 col-lg-6 p-3">

                        
                            <div class="embed-responsive embed-responsive-4by3 h-100">
                                <iframe class="embed-responsive-item rounded"
                                    src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAE3hNxNLhkI7uPWlxsONDxo5MD2_Bk6iE&q=place_id:ChIJX1kwzrjsrIkRlTtqk3S-lHw&" title="..."></iframe>

                            </div>
                        </div>



                    </div>
                </div>
            </main>
        </section>
    );
}

export default Contact;