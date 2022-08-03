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
        bottom: -1.3rem;
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
        <div className='contenedor clase-nueva'>
            <Link to="/" className='regresar'>
            Regresar
            </Link>
            <Titulo>
                Galería
                <img src={'assets/images/colochos.png'} alt="" />
            </Titulo>
            <div className='gallery'>
                <div className='galery-item'>
                    <img src='/assets/images/galeria1.jpg' alt="Imagen 1" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria2.jpg' alt="Imagen 2" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria3.jpg' alt="Imagen 3" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria4.jpg' alt="Imagen 4" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria5.jpg' alt="Imagen 5" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria6.jpg' alt="Imagen 6" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria7.jpg' alt="Imagen 7" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria8.jpg' alt="Imagen 8" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria9.jpg' alt="Imagen 9" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria10.jpg' alt="Imagen 10" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria11.jpg' alt="Imagen 10" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria12.jpg' alt="Imagen 10" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria13.jpg' alt="Imagen 10" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria14.jpg' alt="Imagen 10" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria15.jpg' alt="Imagen 10" />
                </div>
                <div className='galery-item'>
                    <img src='/assets/images/galeria16.jpg' alt="Imagen 10" />
                </div>
            </div>
        </div>
    )
}

export default GalleryComponent