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
        font-size: 5.6rem;
    }
    img {
        position: absolute;
        width: 300px;
        height: 70px;
        bottom: -2rem;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 768px){
            width: 130px;
            height: 45px;
        }
    }
`

const FraseYContador = () => {

    const partyDate = new Date('January 22 2023 00:00:00').getTime()

    return (
        <>
            <Titulo>
                Sophia & Diego
                <img src={'assets/images/colochos.png'} alt="borde" />
            </Titulo>
            <div className='contenido-tiempo-frase'>
                    <CountdownTimer 
                        countdownTimestampMs={partyDate}
                    />
                <p className="texto-banner">"Nos complace que seas parte de esta nueva etapa de nuestras vidas, esperamos que nos puedan acompañar en este día tan especial."</p>
            </div>
        </>
    )
}

export default FraseYContador