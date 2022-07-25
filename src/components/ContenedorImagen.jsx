const ContenedorImagen = ({n}) => {
    return (
        <div>
            <img src={`./assets/images/galeria-imagen${n}.jpeg`} alt={`Imagen no ${n}`} />
        </div>
    )
}

export default ContenedorImagen