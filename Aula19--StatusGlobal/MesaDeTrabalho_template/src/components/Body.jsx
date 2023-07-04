import React, { useContext } from 'react'
<<<<<<< HEAD
import LanguageContext from '../contexts/context'

const Body = () => {

    /* DICA: Utilize o useContext() */
    const { language } = useContext(LanguageContext);

    return (
        <div>
            {/* DICA: Utilize os valores capturados via contexto */}
            <h1>{language.title}</h1>
            <p>{language.description}</p>
            <p>{language.home}</p>
            <p>{language.current}</p>
            <p>{language.button}</p>
=======
import LanguageContext from '../context'

const Body = () => {
    
    /* DICA: Utilize o useContext() */
    
    return (
        <div>
            {/* DICA: Utilize os valores capturados via contexto */}
            <h1>Título</h1>
            <p>Descrição</p>
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
        </div>
    )
}

export default Body