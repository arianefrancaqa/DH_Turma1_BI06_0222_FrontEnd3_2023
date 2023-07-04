import ItemComponent from "./components/ItemComponent";
import ctdEstrutura from "./ctd_estrutura";
<<<<<<< HEAD
import "./styles.css";
=======
import ItemComponent from "./components/ItemComponent";
import "./styles.css"
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

function App() {

  return (
<<<<<<< HEAD
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
=======

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
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
  )
}

export default App;