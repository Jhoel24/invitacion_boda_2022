import { useState } from 'react'
import styled from 'styled-components'
import borderImage from '../assets/images/borde-titulo.png'
import ModalComponent from './Modal'
import NuestraBodaInfo from './NuestraBodaInfo'

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
const ContenedorCardInfo = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 768px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div:nth-child(2) {
        flex: 0 0 30%;
    }
`
const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex: 1;
    box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -webkit-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -moz-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    @media (max-width: 768px){
        flex: 0 0 1;
    }

    img {
        height: auto;
        width: auto;
        
        @media (max-width: 768px){
        }
    }

    .contenido-texto {
        padding: 3rem;
        line-height: 2;
        text-align: center;

        .contenido-direccion {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;

            .imagen-waze {
                height: 50px;
                width: 50px;
                background-image: url('/assets/images/waze-logo.png');
                background-size: cover;
                background-position: center center;
                background-repeat: no-repeat;
            }
            a {
                text-decoration: none;
                font-size: 1.4rem;
                padding: .2rem 3rem;
                background-color: var(--azul);
                color: #fff;
                border-radius: 10px;
                font-weight: 700;
                cursor: pointer;
                border: 2px solid var(--azul);
                transition: all .2s ease-in-out;

                &:hover {
                    background-color: white;
                    color: var(--azul);
                }
            }
        }

        p {
            font-size: 2rem;
        }
        
        h3 {
            text-align: center;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 3px;
            font-size: 2.8rem;

            &:after{
                content: '';
                display: block;
                margin-top: .5rem;
                width: 50%;
                transform: translateX(50%);
                height: 2px;
                background-color: var(--rosado);
                text-align: center;
            }
        }
    }

`

const InformacionBoda = () => {

    const [modalIsOpen, setIsOpen] = useState(false)

    const arrayInfo = [
        { titulo: 'Código de vestimenta', parrafo: '- Formal', imagen: '/assets/images/traje.png' },
        { titulo: 'Regalos', parrafo: 'Agradeceremos sus muestras de cariño en regalo de sobre', imagen: '/assets/images/regalo.png' },
    ]

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <>
            <ModalComponent 
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}  
            />
            <Titulo>
                Nuestra boda
                <img src={'assets/images/colochos.png'} alt="borde" />
            </Titulo>
            <ContenedorCardInfo>
                    <Card>
                        <div className='centrar-imagen'>
                            <img src={'/assets/images/fiesta.png'} alt="ceremonia"/>
                        </div>
                        <div className='contenido-texto'>
                            <h3>Ceremonia y recepción</h3>
                            <p>22 de enero, 2023</p>
                            <p>4:30 pm</p>
                            <p className='texto-importante'>Finca San Nicolás</p>
                            <div className='contenido-direccion'>
                                <div className='imagen-waze'>
                                </div>
                                <a href='https://www.waze.com/en/live-map/directions/finca-san-nicolas-av.-genova-urb.-cumbres-de-san-francisco,-san-salvador?place=w.177471625.1774585175.21894723'>Ir a</a>
                            </div>
                        </div>
                    </Card>
                    <Card>
                        <div className='centrar-imagen'>
                            <img src={arrayInfo[0].imagen} />
                        </div>
                        <div className="contenido-texto">
                            <h3>{arrayInfo[0].titulo}</h3>
                            <p>{arrayInfo[0].parrafo}</p>
                            <button onClick={openModal} className='open-modal' >Ver galería</button>
                        </div>
                    </Card>
                {/* { arrayInfo.map((info, i) => (
                    <NuestraBodaInfo 
                        key={i}
                        info={info}
                    />
                )) } */}
            </ContenedorCardInfo>
            <div className='contenedor-colochos'>
                <img src="/assets/images/colochos.png" alt="Colochos dorados" />
            </div>
        </>
    )
}

export default InformacionBoda