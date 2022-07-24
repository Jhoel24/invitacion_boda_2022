import styled from "styled-components"

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
            </div>
        </div>
    )
}

export default Banner