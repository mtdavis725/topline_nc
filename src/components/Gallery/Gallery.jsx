import images from '../../images' /*Array of images from images folder*/
import { Link } from 'react-router-dom'

function Gallery() {
    return (
        <section>
            <main className="container-xl">
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-12 text-center">
                            <h1 className="page-header py-2 my-2">Photo Gallery</h1>
                        </div>
                    </div>
                    <hr className="mb-1 bg-light w-75 mx-auto" />
                    <div className="row">
                        <div className="col-12 text-center">
                            <span>Visit our <Link to="https://www.facebook.com/greenlevelequestrian" class="text-link">Facebook</Link> page to see more photos and stay up to date with us!</span>
                        </div>
                    </div>
                </div>

                <div className="row mx-auto">
                    
                    <div className="col-sm-6 col-md-4 col-lg-3 p-0">
                    <img src={images.gallery[0]} alt="gallery" className="img-fluid p-1 p-1" />
                    <img src={images.gallery[1]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[2]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[3]} alt="gallery" className="img-fluid p-1" />
                    
                    
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 p-0">
                    
                    <img src={images.gallery[4]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[5]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[6]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[7]} alt="gallery" className="img-fluid p-1" />
                    
                    </div>

                    <div className="col-sm-6 col-md-3 col-lg-3 p-0">
                    
                    <img src={images.gallery[8]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[9]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[10]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[11]} alt="gallery" className="img-fluid p-1" />
                    </div>

                    <div className="col-sm-6 col-md-4 col-lg-3 p-0">
                    
                    
                    <img src={images.gallery[12]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[13]} alt="gallery" className="img-fluid p-1" />
                    <img src={images.gallery[14]} alt="gallery" className="img-fluid p-1" />
                    </div>

                    

                    
                </div>

                

                <div className="gallery">
                


                    <div className="col">
                        <a href="./images/gallery-Laura-with-kids-ribbons.jpg" data-lightbox="gallery"><img alt="" src="./images/gallery-Laura-with-kids-ribbons.jpg" className="img-fluid" /></a>
                        <a href="./images/gallery-braids-w960-o.jpg" data-lightbox="gallery"><img alt="" src="./images/gallery-braids-w960-o.jpg" className="img-fluid" /></a>

                        <a href="../images/gallery-lesson.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-lesson.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-beau-w795-o.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-beau-w795-o.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-sammi.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-sammi.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-laura-kids-indoor.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-laura-kids-indoor.jpg" className="img-fluid" /></a>
                    </div>
                    <div className="col">
                        <a href="../images/gallery-sammi-cotton.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-sammi-cotton.jpg" className="img-fluid" /></a>
                        <a href="../images/galleryvero-sillhouette.JPG" data-lightbox="gallery"><img alt="" src="../images/galleryvero-sillhouette.JPG" className="img-fluid" /></a>
                        <a href="../images/gallery-peekaboo.JPG" data-lightbox="gallery"><img alt="" src="../images/gallery-peekaboo.JPG" className="img-fluid" /></a>
                        <a href="../images/gallery-outdoor-arena.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-outdoor-arena.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-mom_and_laddie.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-mom_and_laddie.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-bw-laura-taylor.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-bw-laura-taylor.jpg" className="img-fluid" /></a>
                    </div>
                    <div className="col">
                        <a href="../images/gallery-trail.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-trail.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-jumping.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-jumping.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-horse-anatomy-lesson.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-horse-anatomy-lesson.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-kisses_for_Ali.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-kisses_for_Ali.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-gabby.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-gabby.jpg" className="img-fluid" /></a>
                        <a href="../images/gallery-Laura-riding.jpg" data-lightbox="gallery"><img alt="" src="../images/gallery-Laura-riding.jpg" className="img-fluid" /></a>
                    </div>
                </div>
            </main>
        </section>

    );
}

export default Gallery;