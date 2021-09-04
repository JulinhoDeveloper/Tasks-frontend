import React, { useState } from 'react';
import { Link} from 'react-router-dom';
const Login = () => {

    // State para inuciar a sessao
    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    });

    
    const {email, password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //usuário iniciar sessão
    const onSubmit = e =>{
        e.preventDefault();

        // validar campos vazios


    }

    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Efetuar Login</h1>
                <form
                onSubmit={onSubmit}
                >
                    <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Digite o email"
                      value={email}
                      onChange={onChange}
                    />
                    </div>

                    <div className="campo-form">
                    <label htmlFor="password">Senha</label>
                    <input 
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={onChange}
                    />
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Acessar" />
                    </div>
                </form>

                <Link to={'/novaconta'} className="enlace-cuenta">
                   Cadastrar
                </Link>
            </div>
        </div>
    );
}

export default Login