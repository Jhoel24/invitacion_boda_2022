import styled from 'styled-components'
import borderImage from '../assets/images/borde-titulo.png'
import parejaFeliz from '../assets/images/pareja-feliz.webp'

const Titulo = styled.h2`
    font-family: 'Great Vibes', cursive;
    text-align: center;
    margin: 2rem;
    font-size: 7rem;
    position: relative;
    white-space: none;
    @media (max-width: 768px){
        font-size: 3rem;
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
const ContenedorImagenTexto = styled.div`
    margin: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 2rem;
    }

    .imagen, .texto {
        flex: 1
    }
`


const Novios = () => {
    return (
        <>
            <Titulo>
                Algún texto bonito
                    <img src={borderImage} alt="borde" />
            </Titulo>
            <ContenedorImagenTexto>
                <div className='imagen'>
                    <img src={parejaFeliz} alt="Pareja feliz" />
                </div>
                <div className='texto'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi fugiat enim omnis rem quo suscipit, sed expedita id voluptas minima nulla in praesentium recusandae iusto! Quam voluptatibus quis consectetur dicta?</p>
                </div>
            </ContenedorImagenTexto>
        </>
    )
}

export default Novios
