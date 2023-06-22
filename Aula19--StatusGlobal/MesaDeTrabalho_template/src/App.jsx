import './App.css'
import React, { useState } from 'react'
import { LanguageContext, languages } from './contexts/context.js'
import Navbar from './components/Navbar';
import Body from './components/Body';
import { LanguageConsumer } from './contexts/LanguageConsumer';

function App() {
  //Crie a função que modifica o valor do idioma atual pelo novo idioma selecionado;
  //No retorno, use o LanguageContext com o provider.

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {

    //DICA: Função que troca um idioma por outro (ao clicar no botão)

    // if (language.text == EN) {
    //   setLanguage(languages.english)
    // }
    // if (language.text == PTBR) {
    //   setLanguage(languages.portuguese)
    // }
    // if (language.text == ES) {
    //   setLanguage(languages.spanish)
    // }

    language.text == EN ? setLanguage(languages.spanish) : setLanguage(languages.portuguese)
  }

  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, handleChangeLA }}>
        <LanguageConsumer>
          <Navbar />
          <Body />
        </LanguageConsumer>
      </LanguageContext.Provider>
    </div>
  )
}

export default App