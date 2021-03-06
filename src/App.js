import React from 'react';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import NovaConta from './components/auth/NovaConta';
import Projetos from './components/projetos/Projetos';
import ProjetoState from './context/projetos/projetoState';

function App() {
  return(
    <ProjetoState>
   <Router>
     <Switch>
     <Route exact path="/" component={Login} />
     <Route exact path="/novaconta" component={NovaConta} />
      <Route exact path="/projetos" component={Projetos} />
     </Switch>
   </Router>
   </ProjetoState>
  );
}



export default App;
