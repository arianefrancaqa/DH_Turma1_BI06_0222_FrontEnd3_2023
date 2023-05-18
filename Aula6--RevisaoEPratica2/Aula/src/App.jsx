import ctdEstrutura from "./ctd_estrutura";
import ItemComponent from "./components/ItemComponent";
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
}

function App() {

  return (
    <div className="container">

      <h1 className="title">CTD - Jornada do Aluno</h1>

      <ButtonComponent
        label="Ano 1"
        fnOnClick={() => handleClickButton("1")}
      />

      <br />

      <ButtonComponent
        label="Ano 2"
        fnOnClick={() => handleClickButton("2")}
      />

      <br />

      <ButtonComponent
        label="Ano 3"
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
        })
      }
    </div>
  )
}

export default App;