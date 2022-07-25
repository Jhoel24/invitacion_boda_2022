import styled from "styled-components"
import CountdownTimer from "./CountdownTimer"

const ContenidoNavegacion = styled.div`
    position: absolute;
    top: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 5rem;
    @media (max-width: 768px){
        flex-direction: column;
        gap: 3rem;

    }
`

const Navegacion = styled.nav`
    display: flex;
    gap: 2rem;

    a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        cursor: pointer;
        font-size: 2rem;  
        @media (max-width: 768px){
            font-size: 1.2rem;
        }
    }
`

const Banner = () => {

    const partyDate = new Date('January 04 2023 00:00:00').getTime()

    return (
        <div className="contenido-banner">
            <div className="fondo-banner">
                <ContenidoNavegacion>
                    <p className="logo"><span>Sophia</span> & <span>Diego</span></p>
                    <Navegacion className="navegacion">
                        <a href="#contenido-banner">Inicio</a>
                        <a href="#pareja">Novios</a>
                        <a href="#wedding">Boda</a>
                        <a href="#rsvp">RSVP</a>
                    </Navegacion>
                </ContenidoNavegacion>
                    <h1>Reserva la fecha</h1>
                    <CountdownTimer 
                        countdownTimestampMs={partyDate}
                    />
                    <p className="texto-banner">¡Nos vamos a casar!</p>
            </div>
        </div>
    )
}

export default Banner