import React, { useState } from 'react';


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
            </div>
        </div>
    );
}

export default Login