import './App.css'
import React, { useState } from 'react'
<<<<<<< HEAD
import { LanguageContext, languages } from './contexts/context.js'
import Navbar from './components/Navbar';
import Body from './components/Body';
import { LanguageConsumer } from './contexts/LanguageConsumer';

function App() {
  //Crie a função que modifica o valor do idioma atual pelo novo idioma selecionado;
  //No retorno, use o LanguageContext com o provider.
=======
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';

function App() {
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

  const [language, setLanguage] = useState(languages.english);

  const handleChangeLA = () => {
<<<<<<< HEAD

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
=======
    setLanguage(() => {
      //DICA: Função que troca um idioma por outro (ao clicar no botão)
    })
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
  }

  return (
    <div className="App">
<<<<<<< HEAD
      <LanguageContext.Provider value={{ language, handleChangeLA }}>
        <LanguageConsumer>
          <Navbar />
          <Body />
        </LanguageConsumer>
      </LanguageContext.Provider>
=======
      <>{/*  DICA: Adicione o provider LanguageContext */}
        <Navbar />
        <Body />
      </>
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
    </div>
  )
}

export default App