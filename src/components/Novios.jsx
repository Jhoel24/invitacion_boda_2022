import styled from 'styled-components'
import borderImage from '../assets/images/borde-titulo.png'

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



const Novios = () => {
    return (
        <>
                <Titulo>
                    Novios
                        <img src={borderImage} alt="borde" />
                </Titulo>
        </>
    )
}

export default Novios
