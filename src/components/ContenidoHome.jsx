import Banner from "./Banner"
import Formulario from "./Formulario"
import FraseYContador from "./FraseYContador"
import InformacionBoda from "./InformacionBoda"
import Novios from "./Novios"

const ContenidoHome = () => {
    return (
        <>
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
        <div className="imagen-formulario">
          <div className="fondo-formulario">
            <section className="contenedor" id="rsvp">
              <Formulario />
            </section>
          </div>
        </div>
      </>
    )
}

export default ContenidoHome