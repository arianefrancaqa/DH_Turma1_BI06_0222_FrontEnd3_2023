import ItemComponent from "./components/ItemComponent";
import ctdEstrutura from "./ctd_estrutura";
import "./styles.css";

function App() {

  return (
    <>
      <div className="container">
        <h1 className="title">CTD - Jornada do Aluno</h1>
        {
          ctdEstrutura.map((item, index) => {
            return (
              <ItemComponent
                key={index}
                bimestre={item.bimestre}
                ano={item.ano}
                disciplinas={item.disciplinas}
              />
            )
          })
        }
      </div>

    </>
  )
}

export default App;