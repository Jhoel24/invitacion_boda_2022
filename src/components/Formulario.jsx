import { useState } from 'react'
import styled from 'styled-components'
import SegundoFormulario from './SegundoFormulario'
import axios from 'axios'
import Spinner from './Spinner'

const Titulo = styled.h2`
    /* font-family: 'Great Vibes', cursive; */
    text-align: center;
    margin: 0;
    font-size: 7rem;
    position: relative;
    white-space: none;
    text-transform: uppercase;
    color: white;
    font-weight: 900;
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

const ContenedorFormulario = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    .formulario-codigo{
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        margin-bottom: 2rem;

        p {
            font-size: 3rem;
            font-weight: 600;
            color: white;
            @media (max-width: 768px){
                font-size: 2rem;
            }
        }

        h3 {
            color: #fff;
            font-size: 4rem;
            @media (max-width: 768px){
                font-size: 3.3rem;
            }
        }

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
    const [familia, setFamilia] = useState({})
    const [msgError, setMsgError] = useState('')
    const [cargando, setCargando] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
       try {
           setCargando(true)
           const url = 'https://arcane-inlet-95336.herokuapp.com/api/familia/buscar'
           const { data } = await axios.post(url, { codigo })
           setCargando(false)
           setFamilia(data)
           setCodigo('')
       } catch (error) {
           setMsgError(error.response.data.error)
           setTimeout(() => {
                setMsgError('')
           }, 2000)
           setCargando(false)
       }
    }

    console.log('Me renderizo');

  return (
    <div className='rsvp'>
        <Titulo>
            Por favor confirma tu asistencia acá
        </Titulo>
        <ContenedorFormulario>
            <div className='formulario-codigo'>
                <h3>Por favor ingresa tu código</h3>
                <p>Agradeceremos confirmes tu asistencia lo antes posible o hasta el 15 de noviembre</p>
                { msgError && <div className='error'>{msgError}</div> }
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
            { cargando && <Spinner /> }
            { familia?.nombre && (
                <div className='formulario-invitados'>
                    <SegundoFormulario 
                        familia={familia}
                    />
                </div>

            ) }
        </ContenedorFormulario>
    </div>
  )
}

export default Formulario