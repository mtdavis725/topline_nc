import PageTitle from '../PageTitle';

function Contact() {
    return(
        <section>
            <main className="container-xl">
            <PageTitle title="Let's get in touch!"></PageTitle>
              
            <div className="contact-container padding">
                <div className="item1" id="form_container">
                    <p className="text-center">
                        Please send us your message below. We will get back to you as quickly as possible!
                        <em> *Lessons cannot be scheduled through this form.</em>
                    </p>

                    <form name="contact" method="POST" data-netlify="true">
                        <div className="form-group">
                            <label for="message">
                                Message:</label>
                            <textarea className="form-control" type="textarea" id="message" name="message"
                                maxlength="6000" rows="6"></textarea>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-sm-6">
                                <label for="name">Your Name:</label>
                                <input type="text" className="form-control" id="name" name="name" required />
                            </div>
                            <div className="form-group col-sm-6">
                                <label for="email">Email:</label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div>
                        </div>
                        
                            <div className="form-group">
                                <button type="submit" className="btn btn-outline-light btn-md w-50 float-right">Submit&nbsp;<span><i className="fa fa-envelope"></i></span></button>
                            </div>
                    </form>

                    <div id="success_message" style={{width:`100%`, height:`100%`, display:`none`}}>
                        <h3>Posted your message successfully!</h3>
                    </div>
                    <div id="error_message" style={{width:`100%`, height:`100%`, display:`none`}}>
                        <h3>Error</h3>
                        <p>Sorry there was an error sending your form.</p>
                    </div>

                </div>

                <div className="item2 embed-responsive embed-responsive-4by3">
                    <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJoV6tzbjsrIkRZGlUWXLreSg&key=AIzaSyAE3hNxNLhkI7uPWlxsONDxo5MD2_Bk6iE" title="..." ></iframe>
                </div>
                    
                

                </div>
            </main>
        </section>
    );
}

export default Contact;