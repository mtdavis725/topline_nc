import { Link } from 'react-router-dom'
import images from '../../images' /*Array of images from images folder*/

function About() {
    return (
    <section>
        <main className="container-xl">

        <div className="container-fluid pb-3">
            <div className="row mx-auto">
                <div className="col-12 text-center">
                    <h1 className="header-lg">Meet the Trainer</h1>
                </div>
            </div>
            <hr className="bg-light w-75 mx-auto" />
        </div>

        

        <div className="container-fluid about-container padding">   
                <div className="item1">
                    <h2 className="content-header pb-1">Laura Rose Heymann</h2>
                    <p>Laura's devotion to all things horses began at the age of six in Charlottesville, VA, when her mother first enrolled her in riding lessons. From there, Laura became increasingly absorbed in the horseback riding community as a hunter/jumper, eventer, and foxhunter, under the instruction of Page Turner. </p>
                    <p>With 11 years of intense training from Page, Page has provided the foundation of Laura's training methods. Through Page, Laura was first introduced to Natural Horsemanship by Louis Wood. </p>
                    <p>Natural Horsemanship drastically altered Laura's perception of working with horses and provided her with a new trajectory towards not just riding, but the actual training and teaching of the horse. Thanks to Page and Louis (and Laura's supportive parents :) Laura had the opportunity to participate in dozens of clinics on different horses of various skill levels.</p>
                </div>

            <div className="item2">
                    <img src={images.about[0]} alt="VA countryside" className="img-fluid" />
                </div>


                <div className="item3">
                    <img src={images.about[1]} alt="Laura Heymann" className="img-fluid" />
                </div>

                <div className="item4">
                    
                    <p>This instruction continued until Laura was accepted to Elon University in Elon, NC. Once at Elon, Laura focused entirely on Dressage and competed on the Intercollegiate team, as well as in USDF rated shows through 1st level with scores in the 70's. Immediately upon graduating in 2008 with a B.A in Sociology, Laura settled on starting a business and opened Topline Training in August 2008.</p>
                    <p>
                        After freelancing ​for 8 years, Laura had the opportunity to settle into one location which is
                        now called Green Level Equestrian in Apex. Laura currently has a very busy M-F youth and adult
                        lesson program​ with many events offered on Saturdays for lesson clients to participate in or
                        attend.
                    </p>
                    <p>
                        The main goal of the barn is to provide a kind, open, judgement-free zone for horses and riders
                        to learn and relax while maintaining top quality horse care.
                        ​</p>
                </div>

                <div className="item5">
                    <img src={images.about[2]} alt="GLE" className="img-fluid" />
                </div>

            </div>


       
        <div className="container-fluid about-container2 padding">
            <div className="item1">
                <h1 className="text-center header-lg">Training Philosophy</h1>
                <hr className="bg-light w-75 mx-auto" />
            </div>

            <div className="item2">
                <p>Laura has a unique approach which concentrates on the partnership between horse and rider. Her practice allows the horse to become a more willing participant to help achieve the rider's
                goals.</p>
                <p>Laura’s training is premised on the fact that no one horse has the same background as any other. From their status within the herd to previous injuries or accidents, each horse enters the riding arena with a different set of experiences. Therefore, using the same set of exercises to train every horse does not produce a completely successful outcome, nor does it make sense.</p>
            </div> 

            <div className="item3">
                <blockquote className="blockquote">
                    <i className="fa fa-quote-left p-2"> </i>
                     The key to having an honest, understanding partnership with a horse is to be able to have a rewarding system of communication.  
                    <i className="fa fa-quote-right p-2"></i>
                </blockquote>
            </div>      
                
            <div className="item4">
                <p>Instead of dominating and directing the horse’s energy, this form of communication promotes a constructive system of feedback between horse and human, encouraging the horse to be an active and engaged participant in learning to understand the rider’s requests. From there, the horse learns that being interactive with people does not have to be physically or psychologically painful.
                </p>
                <p>Please see the <Link to="../lessons" class="text-link">Lessons</Link> page for more details!
                </p>
            </div>
            
        </div>

    </main>
    </section>
    );
}

export default About;

