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
import borderImage from '../assets/images/borde-titulo.png'
import { Link } from 'react-router-dom'

const Titulo = styled.h2`
    font-family: 'Great Vibes', cursive;
    text-align: center;
    margin: 3rem 0;
    font-size: 7rem;
    position: relative;
    white-space: none;
    @media (max-width: 768px){
        font-size: 4.5rem;
    }
    img {
        position: absolute;
        width: 200px;
        height: 40px;
        bottom: -1rem;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 768px){
            width: 130px;
            height: 25px;
        }
    }
`

const GalleryComponent = () => {

    return (
        <div className='contenedor'>
            <Link to="/" className='regresar'>Regresar para confirmar</Link>
            <Titulo>
                Galería
                <img src={borderImage} alt="" />
            </Titulo>
            <div className='gallery'>
                <div className='galery-item'>
                    <img src={imagen1} alt="Imagen 1" />
                </div>
                <div className='galery-item'>
                    <img src={imagen2} alt="Imagen 2" />
                </div>
                <div className='galery-item'>
                    <img src={imagen3} alt="Imagen 3" />
                </div>
                <div className='galery-item'>
                    <img src={imagen4} alt="Imagen 4" />
                </div>
                <div className='galery-item'>
                    <img src={imagen5} alt="Imagen 5" />
                </div>
                <div className='galery-item'>
                    <img src={imagen6} alt="Imagen 6" />
                </div>
                <div className='galery-item'>
                    <img src={imagen7} alt="Imagen 7" />
                </div>
                <div className='galery-item'>
                    <img src={imagen8} alt="Imagen 8" />
                </div>
                <div className='galery-item'>
                    <img src={imagen9} alt="Imagen 9" />
                </div>
                <div className='galery-item'>
                    <img src={imagen10} alt="Imagen 10" />
                </div>
            </div>
        </div>
    )
}

export default GalleryComponent