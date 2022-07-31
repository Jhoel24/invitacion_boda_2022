import styled from 'styled-components'
import borderImage from '../assets/images/borde-titulo.png'
import NuestraBodaInfo from './NuestraBodaInfo'
import recepcion from '../assets/images/recepcion.jpeg'
import ceremonia from '../assets/images/ceremonia.jpeg'
import fiesta from '../assets/images/fiesta.jpeg'

const Titulo = styled.h2`
    font-family: 'Great Vibes', cursive;
    text-align: center;
    margin: 3rem 0;
    font-size: 9rem;
    position: relative;
    white-space: none;
    color: #b99851;
    font-weight: lighter;
    @media (max-width: 768px){
        font-size: 5.6rem;
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
const ContenedorCardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
const Card = styled.div`
    background-color: white;
    flex: 0 0 33.3333%;
    box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -webkit-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -moz-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    @media (max-width: 768px){
        flex: 1;
    }

    img {
        height: auto;
        width: auto;
        @media (max-width: 768px){
        }
    }

    .contenido-texto {
        padding: 3rem;
        line-height: 2;
        text-align: center;

        .contenido-direccion {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            .imagen-waze {
                height: 50px;
                width: 50px;
                background-image: url('/assets/images/waze-logo.png');
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
            }
            a {
                text-decoration: none;
                font-size: 1.4rem;
                padding: .2rem 3rem;
                background-color: var(--azul);
                color: #fff;
                border-radius: 10px;
                font-weight: 700;
                cursor: pointer;
                border: 2px solid var(--azul);
                transition: all .2s ease-in-out;

                &:hover {
                    background-color: white;
                    color: var(--azul);
                }
            }
        }

        
        h3 {
            text-align: left;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 2.8rem;

            &:after{
                content: '';
                display: block;
                margin-top: .5rem;
                width: 50%;
                height: 2px;
                background-color: var(--rosado);
                text-align: center;
            }
        }
    }

`

const InformacionBoda = () => {

    const arrayInfo = [
        { titulo: 'Código de vestimenta', parrafo: '- Formal', imagen: recepcion },
        { titulo: 'Regalos', parrafo: 'Alguna dirección y algún párrafo de relleno', imagen: fiesta },
    ]

    return (
        <>
            <Titulo>
                Nuestra boda
                <img src={borderImage} alt="borde" />
            </Titulo>
            <ContenedorCardInfo>
                { arrayInfo.map((info, i) => (
                    <NuestraBodaInfo 
                        key={i}
                        info={info}
                    />
                )) }
                <Card>
                    <img src={ceremonia} />
                    <div className='contenido-texto'>
                        <h3>Ceremonia y recepción</h3>
                        <p>22 de enero, 2023</p>
                        <p>4:30 pm</p>
                        <p className='texto-importante'>Finca San Nicolás</p>
                        <div className='contenido-direccion'>
                            <div className='imagen-waze'>
                            </div>
                            <a href='https://www.waze.com/en/live-map/directions/finca-san-nicolas-av.-genova-urb.-cumbres-de-san-francisco,-san-salvador?place=w.177471625.1774585175.21894723'>Ir a</a>
                        </div>
                    </div>
                </Card>
            </ContenedorCardInfo>
        </>
    )
}

export default InformacionBoda