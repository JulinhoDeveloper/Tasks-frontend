import React, { useState } from 'react';
import { Link} from 'react-router-dom';
const NovaConta = () => {

    // State para iniciar sessao
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });


    
    const {nombre, email, password, confirmar} = usuario;

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
                <h1>Cadastrar</h1>
                <form
                onSubmit={onSubmit}
                >


                       <div className="campo-form">
                    <label htmlFor="email">Nome</label>
                    <input 
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Digite o seu nome"
                      value={nombre}
                      onChange={onChange}
                    />
                    </div>


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
                    <label htmlFor="confirmar">Confirmar Senha</label>
                    <input 
                      type="password"
                      id="confirmar"
                      name="confirmar"
                      placeholder="Repita a senha"
                      value={confirmar}
                      onChange={onChange}
                    />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Cadastrar" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                  Login
                </Link>
            </div>
        </div>
    );
}

export default NovaConta