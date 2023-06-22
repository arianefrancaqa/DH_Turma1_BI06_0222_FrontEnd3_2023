import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../contexts/context'

const Navbar = () => {
    /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    
    
    */
    const { language, handleChangeLA } = useContext(LanguageContext);
    const { text } = language

    return (
        <div className="navbar">
            {/* DICA: Deixe essas informações dinâmicas, utilize os valores capturados via contexto (veja 'text', na linha 8) */}
            <p>Início</p>
            <p>Idioma atual: ${text}</p>
            <button onClick={handleChangeLA}>Alterar idioma</button>
        </div>
    )
}

export default Navbar