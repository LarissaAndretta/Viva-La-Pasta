import React, { useState } from 'react';

function ContadorComponent() {
    const saudacao = "Olá";
    // let nome = "Alice";
    const [nome, setNome] = useState(null)
    const [contador, setContador] = useState(5); // Inicializa contador com 0

    function incrementarValor(){
        setContador(contador + 1)
    }

    function alterarNome(){
        setNome("Gustavo")
    }

    return (
        <div>
            {nome == null && <h1>{saudacao}, usuário não identificado</h1>}
            {nome != null && <h1>{saudacao}, {nome}!</h1>}
            
            <p>Contador: {contador}</p>
            <button onClick={() => setContador("Asdasd")}>Descontar</button>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            <button onClick={incrementarValor}>Incrementar</button>
            <button onClick={alterarNome}>Alterar Nome</button>
        </div>
    );
}

export default ContadorComponent;