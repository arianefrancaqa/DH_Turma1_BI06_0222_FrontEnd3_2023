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
    }

    return (
        <>
            <h4 id="clicks">Numero de cliques: {clicks}</h4>
            <button onClick={contadorDeClicks}>Clique aqui</button>
        </>
    );
}

export default ButtonStateComponent;