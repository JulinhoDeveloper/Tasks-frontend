import React, {useReducer} from 'react';

import projetoContext from './projetoContext';
import projetoReducer from './projetoReducer';

const ProjetoState = props => {
    const initialState = {
        formulario: false
    }

    // Dispach para executar as funções
    const [state, dispatch] = useReducer(projetoReducer, initialState)

     //Serie de funcões para o crud
     return (
         <projetoContext.Provider
         value={{
             formulario: state.formulario
         }}
         >
             {props.children}
         </projetoContext.Provider>
     )
}

export default ProjetoState;