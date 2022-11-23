import ImageGallery from "react-image-gallery"
import { imagenesVestimenta } from "../helpers/imagenesVestimenta"
import 'react-image-gallery/styles/css/image-gallery.css'

const Carousel = () => {
    
    const images = imagenesVestimenta()

    return (
        <>
            <ImageGallery 
                items={images} 
                infinite
                // fullscreen
                lazyLoad
                // showFullscreenButtons
            />
        </>
  )
}

export default Carousel