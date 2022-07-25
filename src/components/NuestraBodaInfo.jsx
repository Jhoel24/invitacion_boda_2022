import styled from 'styled-components'

const Card = styled.div`
    background-color: white;
    flex: 0 0 33.3333%;
    @media (max-width: 768px){
        flex: 1s;
    }

    img {
        height: auto;
        width: auto;
        @media (max-width: 768px){
        }
    }

    .contenido-texto {
        padding: 3rem;
        h3 {
            text-align: left;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 3px;

            &:after{
                content: '';
                display: block;
                margin-top: .5rem;
                width: 50%;
                height: 2px;
                background-color: var(--rosado);
                text-align: center;
            }
        }
    }

`

const NuestraBodaInfo = ({info}) => {

    return (
        <Card>
            <img src={info.imagen} />
            <div className="contenido-texto">
                <h3>{info.titulo}</h3>
                <p>{info.parrafo}</p>
            </div>
        </Card>
    )
}

export default NuestraBodaInfo