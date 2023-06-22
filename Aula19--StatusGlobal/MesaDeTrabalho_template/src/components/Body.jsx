import React, { useContext } from 'react'
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
        </div>
    )
}

export default Body