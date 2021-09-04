import React from 'react';
import Projeto from './Projeto';
const ListarProjetos = () =>{


    const projetos = [
        {nome: 'oiooi'},
        {nome: 'igigigig'}
    ]

    return (

        <ul className="listado-proyetos">
         {projetos.map(projeto=>(
             <Projeto
                 projeto={projeto}
             />
         ))}
        </ul>
    )
}

export default ListarProjetos;