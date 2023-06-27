import "./styles.css";
import ctdEstrutura from "./ctd_estrutura";
import ItemComponent from "./components/ItemComponent";
import ButtonComponent from "./components/ButtonComponent";

<<<<<<< HEAD
import ReactDOM from 'react-dom/client';
import ButtonStateComponent from "./components/ButtonStateComponent";
import { useState } from "react";

// let arrayFiltered = [];

// const executefilterAndDefineArrayData = (year) => {
//   arrayFiltered = ctdEstrutura.filter(item => item.ano.match(year));
//   console.log("Clicou no botão");
//   console.log(arrayFiltered);

//   /// Não recomendado utilizar assim, necessário adicionar um Hook
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
//   )

// };
=======
import ButtonStateComponent from "./components/ButtonStateComponent";

import { useState } from "react";
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d


function App() {

<<<<<<< HEAD
  const [arrayFiltered, setArrayFiltered] = useState([]);

  const executefilterAndDefineArrayData = (year) => {
    setArrayFiltered(ctdEstrutura.filter(item => item.ano.match(year)));
=======
  /// Definindo o estado do Array
  const [arrayFiltered, setArrayFiltered] = useState([]);

  const executefilterAndDefineArrayData = (year) => {
    const array = ctdEstrutura.filter(item => item.ano.match(year));
    setArrayFiltered(array); /// Função que atualiza o array (e o estado)

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
  };

  return (
    <div className="container">
<<<<<<< HEAD
      <br />
      <ButtonStateComponent/>
      <br />
=======

      <br />
      <br />

      <ButtonStateComponent />

      <br />
      <br />

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
      <h1 className="title">CTD - Jornada do Aluno</h1>

      <h1 className="filter">Filtrar por ano</h1>

      <ButtonComponent
        description="Ano 1"
        fn={() => executefilterAndDefineArrayData("1")}
      />

      <ButtonComponent
        description="Ano 2"
        fn={() => executefilterAndDefineArrayData("2")}
      />

      <ButtonComponent
        description="Ano 3"
        fn={() => executefilterAndDefineArrayData("3")}
      />

      {
        arrayFiltered.map((item, index) => {

          return <ItemComponent
            key={index}
            {...item}
          />
        })
      }
    </div>
  )
}

export default App;