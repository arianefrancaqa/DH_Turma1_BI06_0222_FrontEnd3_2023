<<<<<<< HEAD
//import styles from "./ItemComponent.module.css";
import { useState } from "react";

function ButtonStateComponent() {
    //jeito antigo
    //let clicks = 0;
    // const contadorDeClicks = () =>{
    //     clicks++
    //     console.log(clicks)
    //     document.getElementById("clicks").innerText = `Numero de cliques: ${clicks}`
    // }

    const [clicks, setClicks] = useState(0);

    const contadorDeClicks = () =>{
        console.log("Usuário clicou");
        setClicks(clicks + 1);
=======
import { useState } from 'react';

function ButtonStateComponent() {
    /* 
        /// Primeira Parte - Dinâmica antiga, alterando no DOM diretamente
        
        let clicks = 0
    
        const contadorDeClicks = () => {
            console.log("usuário clicou");
            clicks = clicks + 1;
            console.log(clicks);
            document.getElementById("clicks").innerText = `Número de clicks: ${clicks}`
        } */

    /// Segunda Parte - Utilizando Hooks - useState() para fazer a manipulação e controle

    /// Definimos a variável + função de atualização
    const [clicks, setSetClicks] = useState(0);


    const contadorDeClicks = () => {
        console.log("usuário clicou");
        setSetClicks(clicks + 1) /// Função que atualiza o estado de "Clicks"
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
    }

    return (
        <>
<<<<<<< HEAD
            <h4 id="clicks">Numero de cliques: {clicks}</h4>
=======
            <h4 id="clicks">Número de clicks: {clicks}</h4>
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
            <button onClick={contadorDeClicks}>Clique aqui</button>
        </>
    );
}

export default ButtonStateComponent;