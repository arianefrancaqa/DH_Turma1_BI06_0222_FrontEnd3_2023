import React, { useContext } from 'react'
import "../App.css"
<<<<<<< HEAD
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
=======
import LanguageContext from '../context'

const Navbar = () => {
    /* DICA: Descomente esse bloco de código, quando "App.jsx" tiver um provider
    const { language, handleChangeLA } = useContext(LanguageContext)
    const {text} = language
    
    */
    return (
        <div className="navbar">
            {/* DICA: Deixe essas informações dinâmicas, utilize os valores capturados via contexto (veja 'text', na linha 8) */}
            <p>Início</p> 
            <p>Idioma atual: PTBR</p>
            <button>Alterar idioma</button>
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
        </div>
    )
}

export default Navbar