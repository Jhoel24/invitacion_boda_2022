import styled from 'styled-components'

const Card = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex: 0 0 33.3333%;
    box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -webkit-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -moz-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    @media (max-width: 768px){
        flex: 1;
    }

    img {
        height: auto;
        width: auto;
        @media (max-width: 768px){
        }
    }

    .contenido-texto {
        padding: 3rem;
        text-align: center;

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
                height: 2px;
                transform: translateX(50%);
                background-color: var(--rosado);
                text-align: center;
            }
        }
    }

`

const NuestraBodaInfo = ({info}) => {

    return (
        <Card>
            <div className='centrar-imagen'>
                <img src={info.imagen} />
            </div>
            <div className="contenido-texto">
                <h3>{info.titulo}</h3>
                <p>{info.parrafo}</p>
            </div>
        </Card>
    )
}

export default NuestraBodaInfo