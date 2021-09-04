import React from 'react';

const Login = () => {
    const onChange = () => {

    }
    return(
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Efetuar Login</h1>
                <form>
                    <div className="campo-form">
                    <label htmlFor="email">Email</label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Digite o email"
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