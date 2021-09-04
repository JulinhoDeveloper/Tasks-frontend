import React, { Fragment } from 'react';
import Tarefa from './Tarefa';



const ListarTarefas = () => {

    const tarefasProjeto =  [
        {nome: 'Eligir Plataforma', estado:true},
        {nome: 'Eligir Plataforma', estado:false}

];

    return (
        <Fragment>
            <h2>Projeto: Tarefas</h2>
            <ul className = "Listado-tareas">
                {tarefasProjeto.length === 0
                ?  (<li className="tarefa"><p>Não há tarefas</p></li>)
                : tarefasProjeto.map(tarefa =>(
                    <Tarefa
                    tarefa={tarefa}
                    />
                ))
                }
                   <button type="button"
             className="btn btn-eliminar">
                Excluir Projeto &times;
            </button>
            </ul>
         
        </Fragment>
    );
}

export default ListarTarefas;