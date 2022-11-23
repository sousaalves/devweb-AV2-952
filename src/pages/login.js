import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Home from "./home";

const Login = () => {

    console.log(window.location.pathname);

    return (
        <>
        <div className="login">
            <header>Login</header>
            <h5>Usuário:</h5>
            <input id="user"></input>
            <button id="enviaruser">Enviar</button>
            <h5>Senha:</h5>
            <input id="senha"></input>
            <button id="enviarsenha">Enviar</button>

            <Link to={"../home"} className="link">
            Ir para Home
            </Link>
        
        </div>      
        </>
    );

};

export default Login;