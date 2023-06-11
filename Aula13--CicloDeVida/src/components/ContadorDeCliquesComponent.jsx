import { useEffect, useState } from "react";

function ContadorDeCliquesComponent() {
    const [cliques, setCliques] = useState(0);

    useEffect(() => {
        console.log("<ContadorDeCliquesComponent/> Foi montado")
        alert(`Clicou ${cliques} vezes no botão`)
        document.title = `Clicou ${cliques} vezes`

        // return function limpaComponent() {
        //     console.log("<ContadorDeCliquesComponent/> Foi Desmontado/Limpo")
        // }
    },
        //array de dependencias, 
        //se tiver vazio executa apenas uma vez
        //se tiver algo, toda vez que executar altera cliques
        [cliques])

    return (
        <>
            <h2>Clicou {cliques} vezes no botão</h2>
            <button onClick={() => setCliques(cliques + 1)}>Clique aqui</button>
        </>
    )
}

export default ContadorDeCliquesComponent;