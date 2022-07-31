import styled from 'styled-components'

const Card = styled.div`
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
        h3 {
            text-align: left;
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