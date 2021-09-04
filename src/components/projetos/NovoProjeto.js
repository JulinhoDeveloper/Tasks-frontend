
import React, {Fragment, useState} from 'react'

const NovoProjeto = () =>{


    //state para projeto
    const [projeto, guardarProjeto] = useState({
        nome: ''
    });

    //adicionar o nome do projeto
    const {nome} = projeto;
//le os conteudos do input
    const onChangeProjeto = e => {
        guardarProjeto({
            ...projeto,
           [e.target.name] : [e.target.value]
        })
    }
    //quando o usuario envia unm projeto

    const onSubmitProjeto = e => {
        e.preventDefault();
    }
    return (
  
      <Fragment>
            <button 
                type="button"
                className="btn btn-block btn-primario"
            >Novo Projeto</button>
                        <form
                        className="formulario-nuevo-proyeto"
                        onSubmit={onSubmitProjeto}
                        >
                          <input 
                                type="text"
                                className="input-text"
                                placeholder="Nome do projeto"
                                name="nome"
                                value={nome}
                                onChange={onChangeProjeto}
                            />

                            <input 
                                type="submit"
                                className="btn btn-primario btn-block"
                                value="Adicionar projeto"
                            />
                        </form>
         

        </Fragment>
     );
}

export default NovoProjeto;
