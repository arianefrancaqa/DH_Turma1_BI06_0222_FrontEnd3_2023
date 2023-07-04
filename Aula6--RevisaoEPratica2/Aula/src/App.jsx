import ctdEstrutura from "./ctd_estrutura";
import ItemComponent from "./components/ItemComponent";
<<<<<<< HEAD
import "./styles.css";
import ButtonComponent from "./components/ButtonComponent";
import ReactDOM from 'react-dom/client'

let arrayCtd = [];

const handleClickButton = (ano) => {
  console.log(ano);
  
  arrayCtd = ctdEstrutura.filter(item => item.ano.match(ano))
  
  console.log(arrayCtd);

  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />)
=======
import ButtonComponent from "./components/ButtonComponent";
import "./styles.css";

import ReactDOM from 'react-dom/client';

/// Declarando Array com escopo global (para o App.jsx)
let arrayCtd = []

/// Função que filtra os dados do array com base no ano recebido
const handleClickButton = (ano) => {
  console.log(ano);

  /// Atribuindo os dados ao Array após o filtro
  arrayCtd = ctdEstrutura.filter(item => item.ano.match(ano));
  console.log(arrayCtd);

  /// Reconstruindo a renderização da página (PS: Não é a forma recomendada - Veremos uma forma melhor)
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
}

function App() {

  return (
    <div className="container">

      <h1 className="title">CTD - Jornada do Aluno</h1>

      <ButtonComponent
        label="Ano 1"
<<<<<<< HEAD
        fnOnClick={() => handleClickButton("1")}
=======
        fnOnClick={
          () => handleClickButton("1")
        } /* Enviando a função via prop para o component */
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
      />

      <br />

      <ButtonComponent
        label="Ano 2"
<<<<<<< HEAD
        fnOnClick={() => handleClickButton("2")}
=======
        fnOnClick={
          () => handleClickButton("2")
        }
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
      />

      <br />

      <ButtonComponent
        label="Ano 3"
<<<<<<< HEAD
        fnOnClick={() => handleClickButton("3")}
      />

      <br />
      {
        arrayCtd.map((item, index) => {
          // //Primeira abordagem para filtrar dados
          // if (item.ano.match("3")) {
          //   return <ItemComponent
          //     key={index}
          //     {...item}
          //   />
          //}
          return <ItemComponent
            key={index}
            {...item}
          />
=======
        fnOnClick={
          () => handleClickButton("3")
        }
      />

      {
        /// Segunda abordagem
        arrayCtd.map((item, index) => {
          return (
            <ItemComponent
              key={index}
              bimestre={item.bimestre}
              disciplinas={item.disciplinas}
              ano={item.ano}
            /* {...item} */ /* Outra forma de enviar as props para o Component (Spread Operator) */
            />
          )

          /// Primeira abordagem
          /*  if(item.ano.match("1")) {
             return (
               <ItemComponent
                 key={index}
                 bimestre={item.bimestre}
                 disciplinas={item.disciplinas}
                 ano={item.ano}
               // {...item} 
               />
             )
           } */
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
        })
      }
    </div>
  )
<<<<<<< HEAD
=======

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
}

export default App;