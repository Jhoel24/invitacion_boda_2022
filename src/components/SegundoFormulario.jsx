import Select from 'react-select'
import styled from 'styled-components'

const FormularioContainer = styled.div`
    padding: 2rem;
    box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -webkit-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    -moz-box-shadow: 3px 4px 8px -1px rgba(0,0,0,0.1);
    
    h2 {
        text-align: center;
    }

`

const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
]
const options2 = [
    { value: 'recepcion', label: 'Recepción' },
    { value: 'ceremonia', label: 'Ceremonia' },
    { value: 'fiesta', label: 'Fiesta' },
    { value: 'todo', label: 'Todo' },
]

const SegundoFormulario = () => {
    
    return (
        <>
            <FormularioContainer className="formulario-container">  
            <h2>Bienvenido/a familia ...</h2>
            <form className="formulario">
                <Select 
                    className="select-input"
                    options={options}
                    placeholder="Número de invitados"
                    />
                <Select 
                    className="select-input"
                    options={options2}
                    placeholder="Asistiré a"
                />
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