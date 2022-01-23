import images from '../../images' /*Array of images from images folder*/
import { Link } from 'react-router-dom'
import PageTitle from '../PageTitle';


let galleryImages = images.gallery.map((item, index) => {
    return <img src={images.gallery[index]} alt={item}  />
       
    })

function Gallery() {
    return (
        
            <main>
            <PageTitle title="Photo Gallery"></PageTitle>
            
            <p class="text-center"> Visit our <Link to="https://www.facebook.com/greenlevelequestrian" className="text-link">Facebook</Link> page to see more photos and stay up to date with us!</p>

            <div className="grid-container gallery-container padding">
                {galleryImages}     
                
            </div> 
             
            </main>
        

    );
}

export default Gallery;