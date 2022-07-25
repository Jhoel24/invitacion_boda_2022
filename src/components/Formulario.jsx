import { useState } from 'react'
import styled from 'styled-components'
import borderImage from '../assets/images/borde-titulo.png'

const Titulo = styled.h2`
    font-family: 'Great Vibes', cursive;
    text-align: center;
    margin: 3rem 0;
    font-size: 7rem;
    position: relative;
    white-space: none;
    @media (max-width: 768px){
        font-size: 4.5rem;
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

const ContenedorFormulario = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    .formulario-codigo{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;

        form {
            display: flex;
            justify-content: space-between;
            gap: 4rem;
            input {
                padding: 1rem 2rem;
                border: none;
                border-radius: 5px;
                display: block;
                width: 100%;
            }
            .submit {
                background-color: var(--azul);
                border: 2px solid var(--azul);
                color: white;
                font-weight: 800;
                text-transform: uppercase;
                cursor: pointer;
                &:hover {
                    background-color: white;
                    color: var(--azul);
                }
            }
        }

    }
`

const Formulario = () => {
    
    const [codigo, setCodigo] = useState('')
    const [error, setError] = useState(false)

    const codigosValidos = ['abc123']

    const handleSubmit = e => {
        e.preventDefault()
        if(!codigosValidos.includes(codigo)){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2500);
            return
        }
    }

  return (
    <>
        <Titulo>
            ¿Asistirás?
            <img src={borderImage} alt="borde" />
        </Titulo>
        <ContenedorFormulario>
            <div className='formulario-codigo'>
                <h3>Por favor ingresa tu código</h3>
                { error && <div className='error'>Código incorrecto</div> }
                <form
                    onSubmit={handleSubmit}
                >
                    <input 
                        type={'text'}
                        placeholder='Tu código...'
                        onChange={(e) => setCodigo(e.target.value)}
                    />
                    <input 
                        type={'submit'}
                        value={'Enviar'}
                        className='submit'
                    />
                </form>
            </div>
        </ContenedorFormulario>
    </>
  )
}

export default Formulario