import images from '../../images' /*Array of images from images folder*/
import { Link } from 'react-router-dom'

let galleryImages = images.gallery.map((item, index) => {
    return <img src={images.gallery[index]} alt={item}  />
    })

function Gallery() {
    return (
        <section>
            <main className="container-xl">
                <div className="container-fluid">
                    <div className="row mx-auto">
                        <div className="col-12 text-center">
                            <h1 className="page-header ">Photo Gallery</h1>
                        </div>
                    </div>
                    <hr className="bg-light w-75 mx-auto" />
                    <div className="row">
                        <div className="col-12 text-center">
                            <span>Visit our <Link to="https://www.facebook.com/greenlevelequestrian" className="text-link">Facebook</Link> page to see more photos and stay up to date with us!</span>
                        </div>
                    </div>
                </div>

                <div className="gallery-container">
                    {galleryImages}                
                </div>  
            </main>
        </section>

    );
}

export default Gallery;