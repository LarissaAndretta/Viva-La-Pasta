import React, { useState } from 'react';

function SaudacaoCondicionalComponent() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    function logar(){
        alert("Logado com sucesso!");
        setIsLoggedIn(true);
    }

    function deslogar(){
        alert("Deslogado com sucesso!");
        setIsLoggedIn(false);
    }

    if (isLoggedIn) {
        return (
            <div>
                <h1>Bem-vindo, usuário!</h1>
                <button onClick={() => {
                    setIsLoggedIn(false)
                    alert("Deslogado com sucesso")
                }}>Deslogar</button>
                <button onClick={deslogar}>Deslogar</button>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Por favor, faça login.</h1>
                <button onClick={() => {
                    setIsLoggedIn(false)
                    alert("Logado com sucesso")
                }}>Deslogar</button>
                <button onClick={logar}>Logar</button>
            </div>
        );
    }
}

export default SaudacaoCondicionalComponent;