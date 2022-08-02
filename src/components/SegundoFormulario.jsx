import Select from 'react-select'
import styled from 'styled-components'
import { generateOptions } from '../helpers/createSelect'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormularioContainer = styled.div`
    margin-top: -1rem;
    padding: 1rem;
    box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -webkit-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -moz-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    
    h2 {
        text-align: center;
        color: white;
        font-weight: 200;

        span {
            font-weight: 700;
        }
    }

`

const options2 = [
    { value: 'recepcion', label: 'Recepción' },
    { value: 'ceremonia', label: 'Ceremonia' },
    { value: 'fiesta', label: 'Fiesta' },
    { value: 'todo', label: 'Todo' },
]

const SegundoFormulario = ({familia}) => {

    const [invitados, setInvitados] = useState('')
    const [eleccion, setEleccion] = useState('')
    const [error, setError] = useState(false)

    const navigate = useNavigate()
    
    const handleSubmit = async e => {
        e.preventDefault()
        if([invitados, eleccion].includes('')){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2500);
        }
        try {
            const url = 'https://arcane-inlet-95336.herokuapp.com/api/familia'
            await axios.put(url, { 
                invitados: Number(invitados),
                codigo: familia.codigo
             })
             console.log('Todo en orden');
             setTimeout(() => {
                 navigate('/galeria')
             }, 1500);
        } catch (error) {
            console.log(error);
        }
    }

    console.log('Me renderizo');

    return (
        <>
            <FormularioContainer className="formulario-container">  
            <h2>Bienvenido/a: <span>{familia.nombre}</span></h2>
            { error && <div className='error'>No puedes enviar el formulario vacío</div> }
            <form className="formulario" onSubmit={handleSubmit}>
                { typeof generateOptions(familia.invitados) === 'string' ? (
                    <input 
                        className='input-invitados'
                        type={'number'}
                        placeholder='Ingresa número de invitados'
                        onChange={e => setInvitados(e.target.value)}
                        name='invitados'
                        value={invitados}
                    />
                ): <>
                    {/* <Select 
                        className="select-input"
                        options={generateOptions(familia.invitados)}
                        placeholder="Número de invitados"
                        onChange={e => setInvitados(e.target.value)}
                        value={invitados}
                        name="invitados"
                    /> */}
                    <select
                        value={invitados}
                        onChange={e => setInvitados(e.target.value)}
                        className='input-select'
                    >
                        <option value={""}>-- Número de invitados --</option>
                        { generateOptions(familia.invitados).map((opcion, i) => (
                            <option
                                key={i}
                                value={opcion.value}
                            >{opcion.label}</option>
                        )) }
                    </select>
                </>}
                {/* <Select 
                    className="select-input"
                    options={options2}
                    placeholder="Asistiré a"
                    onChange={e => setEleccion(e.target.value)}
                    name="eleccion"
                    value={eleccion}
                /> */}
                <select
                    value={eleccion}
                    onChange={e => setEleccion(e.target.value)}
                    className='input-select'
                >
                    <option value={""}>-- Asistiré a --</option>
                    {options2.map((opcion,i) => (
                        <option
                            key={i}
                            value={opcion.value}
                        >{opcion.label}</option>
                    ))}
                </select>
                <div className="campo-submit">
                    <button 
                        type="submit"
                        className="button"
                        >Confirmar
                    </button>
                </div>
            </form>
        </FormularioContainer>
        </>
    )
}

export default SegundoFormulario