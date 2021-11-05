import React from 'react';
import "./Cadastro.css"

export default _ => {
    return(
        <div id="areaCadastro">
            <div id="areaText">
                <h1>Cadastro</h1>
                <h4>Preencha os dados abaixo para começar.</h4>
            </div>
            <form action="#">
                <input type="text" placeholder="Nome"/>
                <input type="text" placeholder="Sobrenome" />
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha"/>
            </form>
            <button type="button">Concluir cadastro</button>
        </div>
    );
};