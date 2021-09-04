import React from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra';
import FormTarefa from '../tarefas/FormTarefa';
import ListarTarefas from '../tarefas/ListarTarefas';

const Projetos = () => {
    return (
        <div className="contenedor-app">
            <Sidebar/>
        <div className="seccion-principal">
            <Barra/>
            <main>
                <FormTarefa/>
                <div className="contenedor-tareas">
                    <ListarTarefas/>
                </div>
            </main>
        </div>
        </div>
    );
}
export default Projetos;