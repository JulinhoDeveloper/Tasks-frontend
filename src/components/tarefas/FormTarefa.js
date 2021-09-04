import React from 'react';


const FormTarefa = () => {

    return (
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input 
                    type="text"
                    className="input-text"
                    placeholder="Nome do projeto"
                    name="nome"
                    />
                </div>
                <div className="contenedor-input">
                    <input
                    type="submit"
                    className="btn btn-primario btn-submit btn-block"
                    value="Cadastrar Tarefa"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarefa;