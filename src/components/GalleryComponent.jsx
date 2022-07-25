import styled from 'styled-components'
import imagen1 from '../assets/images/galeria-imagen1.jpeg'
import imagen2 from '../assets/images/galeria-imagen2.jpeg'
import imagen3 from '../assets/images/galeria-imagen3.jpeg'
import imagen4 from '../assets/images/galeria-imagen4.jpeg'
import imagen5 from '../assets/images/galeria-imagen5.jpeg'
import imagen6 from '../assets/images/galeria-imagen6.jpeg'
import imagen7 from '../assets/images/galeria-imagen7.jpeg'
import imagen8 from '../assets/images/galeria-imagen8.jpeg'
import imagen9 from '../assets/images/galeria-imagen9.jpeg'
import imagen10 from '../assets/images/galeria-imagen10.jpeg'
import { Link } from 'react-router-dom'


const Titulo = styled.h1`
    font-family: 'Great Vibes', cursive;
    text-align: center;
    font-size: 7rem;
    @media (max-width: 768px){
        font-size: 5rem;
    }
    @media (max-width: 361px){
        font-size: 4rem;
    }
`
const Galeria = styled.div`
    
`

const GalleryComponent = () => {

    return (
        <div className='contenedor'>
            {/* <Link to="/" className='regresar'>Regresar</Link> */}
            <Titulo>Galería</Titulo>
            <Galeria>
                <div>
                    <img src={imagen1} alt="Imagen 1" />
                </div>
                <div>
                    <img src={imagen2} alt="Imagen 2" />
                </div>
                <div>
                    <img src={imagen3} alt="Imagen 3" />
                </div>
                <div>
                    <img src={imagen4} alt="Imagen 4" />
                </div>
                <div>
                    <img src={imagen5} alt="Imagen 5" />
                </div>
                <div>
                    <img src={imagen6} alt="Imagen 6" />
                </div>
                <div>
                    <img src={imagen7} alt="Imagen 7" />
                </div>
                <div>
                    <img src={imagen8} alt="Imagen 8" />
                </div>
                <div>
                    <img src={imagen9} alt="Imagen 9" />
                </div>
                <div>
                    <img src={imagen10} alt="Imagen 10" />
                </div>
            </Galeria>
        </div>
    )
}

export default GalleryComponent