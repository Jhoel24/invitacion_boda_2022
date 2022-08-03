import Banner from "./Banner"
import Formulario from "./Formulario"
import FraseYContador from "./FraseYContador"
import InformacionBoda from "./InformacionBoda"
import Novios from "./Novios"
import styled from 'styled-components'

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

const ContenidoHome = () => {
    return (
      <div className="hidden">
        <Banner />
        <section className="contenedor" id="novios">
          <FraseYContador />
        </section>
        <section className="contenedor">
          <Novios />
        </section>
        <section className="contenedor" id="boda">
          <InformacionBoda />
        </section>
        <section className="contenedor">
          <div className="contenedor-imagen-contador">
            <img src="/assets/images/galeria8.jpg" alt="" />
            <div className="texto-regalos">
              <Titulo>
                Regalos
                <img src={'assets/images/colochos.png'} alt="borde" />
              </Titulo>
              <p className="sobre-texto">
                Agradeceremos sus muestras de cariño en regalo de sobre <br></br>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </p>
            </div>
          </div>
        </section>
        <div className="imagen-formulario">
          <div className="fondo-formulario">
            <section className="contenedor" id="rsvp">
              <Formulario />
            </section>
          </div>
        </div>
      </div>
    )
}

export default ContenidoHome