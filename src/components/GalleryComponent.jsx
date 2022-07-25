import styled from 'styled-components'
import ContenedorImagen from './ContenedorImagen'

const Titulo = styled.h1`
    font-family: 'Great Vibes', cursive;
    text-align: center;
    font-size: 7rem;
    @media (max-width: 768px){
        font-size: 5rem;
    }
`
const Galeria = styled.div`
    
`

const GalleryComponent = () => {

    const arrNumeroImagenes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <div className='galeria'>
            <Titulo>Galería</Titulo>
            <Galeria>
                {arrNumeroImagenes.map(n => (
                    <ContenedorImagen 
                        key={n}
                        n={n}
                    />
                ))}
            </Galeria>
        </div>
    )
}

export default GalleryComponent