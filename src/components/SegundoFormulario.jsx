import Select from 'react-select'
import styled from 'styled-components'
import { generateOptions } from '../helpers/createSelect'
import { useState } from 'react'

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
    
    
    const handleSubmit = async e => {
        e.preventDefault()
        console.log({invitados, eleccion});
    }

    return (
        <>
            <FormularioContainer className="formulario-container">  
            <h2>Bienvenido/a: <span>{familia.nombre}</span></h2>
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
                        onChange={e = setInvitados(e.target.value)}
                    >
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
                >
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