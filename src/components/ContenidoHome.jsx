import Banner from "./Banner"
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
      </>
    )
}

export default ContenidoHome