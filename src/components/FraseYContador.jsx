import styled from 'styled-components'
import borderImage from '../assets/images/borde-titulo.png'
import CountdownTimer from './CountdownTimer'

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
        font-size: 6rem;
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

const FraseYContador = () => {

    const partyDate = new Date('January 04 2023 00:00:00').getTime()

    return (
        <>
            <Titulo>
                Sophia & Diego
                <img src={borderImage} alt="borde" />
            </Titulo>
            <div className='contenido-tiempo-frase'>
                    <CountdownTimer 
                        countdownTimestampMs={partyDate}
                    />
                <p className="texto-banner">Nos complace que seas parte de esta nueva etapa de nuestras vidas, esperamos que nos puedan acompañar en este día tan especial.</p>
            </div>
        </>
    )
}

export default FraseYContador