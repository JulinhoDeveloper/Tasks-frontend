import React from 'react';


const Tarefa = ({tarefa}) => {

    return (
      <li className="tarea sombra">
          <p>{tarefa.nome}</p>

          <div className="estado">
              { tarefa.estado
             ?
              (
                 <button 
                  type="button"
                 className="completo"            
                 >Completo    
                 </button>
             )
             :
             (
            <button 
             type="button"
              className="completo"            
          >Incompleto   
              </button>
    )
             }
         </div>
         <div className="aciones">
             <button type="button"
             className="btn btn-primario">
                 Editar
             </button >
             <button type="button"
             className="btn btn-secundario">
                 Excluir
             </button>
         </div>
  
     </li>  
    );
}

export default Tarefa;