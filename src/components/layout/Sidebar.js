import React from 'react';
import NovoProjeto from '../projetos/NovoProjeto';
import ListarProjetos from '../projetos/Listar';
const Sidebar = () => {
    return ( 
        <aside>
            <h1><span>Tasks</span></h1>

    <NovoProjeto/>
            <div className="proyetos">
                <h2>Projetos</h2>
               <ListarProjetos/>
            </div>
        </aside>
     );
}
 
export default Sidebar;