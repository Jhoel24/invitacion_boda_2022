import styled from 'styled-components'
import borderImage from '../assets/images/borde-titulo.png'
import parejaFeliz from '../assets/images/pareja-feliz.webp'

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
const ContenedorImagenTexto = styled.div`
    margin: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 2rem;
    }

    .imagen, .texto {
        flex: 1
    }

    .texto p{
        font-size: 3rem;
        font-weight: 200;
        line-height: 2;

        @media (max-width:768px){
            text-align: center;
            font-size: 2.2rem;
        }

        span {
            font-weight: 600;
            text-transform: uppercase;
            color: #b99851;
        }
    }

    .imagen {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .imagen img {
        object-fit: cover;
        height: 500px;
        box-shadow: 0px 2px 10px 0px;
        @media (max-width: 768px){
            height: 450px;
        }
    }


`


const Novios = () => {
    return (
        <>
            <ContenedorImagenTexto>
                <div className='imagen'>
                    <img src='/assets/images/imagen-frase.jpg' alt="Pareja feliz" />
                </div>
                <div className='texto'>
                    <p>Por eso el hombre deja a su padre y a su madre, y se une a su mujer, y los dos se funden en un solo ser.<br></br> <span>Génesis 2:24</span>  </p>
                </div>
                <a href='https://www.waze.com/en/live-map/directions/finca-san-nicolas-av.-genova-urb.-cumbres-de-san-francisco,-san-salvador?place=w.177471625.1774585175.21894723'>Waze</a>
            </ContenedorImagenTexto>
        </>
    )
}

export default Novios
