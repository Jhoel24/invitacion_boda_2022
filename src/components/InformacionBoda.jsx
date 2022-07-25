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

const InformacionBoda = () => {

    const arrayInfo = [
        { titulo: 'Recepción', parrafo: 'Alguna dirección y algún párrafo de relleno', imagen: recepcion },
        { titulo: 'Ceremonia', parrafo: 'Alguna dirección y algún párrafo de relleno', imagen: ceremonia },
        { titulo: 'Fiesta', parrafo: 'Alguna dirección y algún párrafo de relleno', imagen: fiesta },
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
            </ContenedorCardInfo>
        </>
    )
}

export default InformacionBoda