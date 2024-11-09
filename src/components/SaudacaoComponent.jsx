import React from 'react';

function SaudacaoComponent() {
    const saudacao = "Olá";
    let nome = "Alice";

    nome = "Teste"

    return (
        <div>
            <h1>{saudacao}, {nome}!</h1>
        </div>
    );
}

export default SaudacaoComponent;