import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const [comentarios, setComentarios] = useState([]);

  useEffect(
    () => {
      buscandoCommentsApi();
    }, []
  );

  const buscandoCommentsApi = async () => {
    console.log("Buscando Comentários ");

    const response = await axios.get("https://jsonplaceholder.typicode.com/comments");
    setComentarios([...response.data])
    console.log(response.data);
  }

  useEffect(
    () => {
      postandoCommentsApi();
    }, []
  );

  const postandoCommentsApi = async () => {
    console.log("Buscando Comentários ");

    const response = await axios.post('https://jsonplaceholder.typicode.com/comments/posts', {
      name: "Teste",
      email: "test@mail.com",
      body: "Muito ruim esse site"
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
    setComentarios([...response.data])
    console.log(response.data);
  }

  return (
    <>

      <div className='div-selects'>

        <h1>Lista Comentários</h1>

        {
          comentarios.map(comentario => {
            return (
              <>
                <div
                  key={comentario.id}
                  value={comentario.id}
                  className='div-resposta'

                >
                  <h3>Nome: {comentario.name ?? "Indefinido"}</h3>
                  <p>Email: {comentario.email ?? "Indefinido"}</p>
                  <p>Comentário: {comentario.body ?? "Indefinido"}</p>
                </div>
              </>
            )
          })
        }

      </div>



    </>
  )
}

export default App;