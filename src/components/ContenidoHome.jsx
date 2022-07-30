import Banner from "./Banner"
import Formulario from "./Formulario"
import InformacionBoda from "./InformacionBoda"
import Novios from "./Novios"

const ContenidoHome = () => {
    return (
        <>
        <Banner />
        <section className="contenedor" id="novios">
          <Novios />
        </section>
        <section className="contenedor" id="boda">
          <InformacionBoda />
        </section>
        <section className="contenedor" id="rsvp">
          <Formulario />
        </section>
      </>
    )
}

export default ContenidoHome