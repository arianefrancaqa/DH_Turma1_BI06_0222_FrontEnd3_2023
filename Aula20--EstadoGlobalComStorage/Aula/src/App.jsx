import './App.css';
import { useState, useEffect, useReducer } from 'react';

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea
function App() {

  const [newTodo, setNewTodo] = useState("");

<<<<<<< HEAD
=======
<<<<<<< HEAD
  // /// Trocamos o useState() pelo useReducer()
  // const [todos, setTodos] = useState(
  //   [
  //     {
  //       id: 2354345345,
  //       text: "Aprender useReducer"
  //     }
  //   ]
  // );

>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea
  function todoReducer(state, action) {

    switch (action.type) {

      case "ADD_TODO":
        return action.payload;

      case "DELETE_TODO":
        return state.filter(todo => todo.id != action.payload);

      default:
        return state;
    }
<<<<<<< HEAD

=======
=======
  function todoReducer(state, action) {

    switch (action.type) {

      case "ADD_TODO":
        return action.payload;

      case "DELETE_TODO":
        return state.filter(todo => todo.id != action.payload);

      default:
        return state;
    }

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea
  }

  const [todos, dispatch] = useReducer(todoReducer, [
    {
      id: 2354345345,
      text: "Aprender useReducer"
    }
<<<<<<< HEAD
  ]);
=======
<<<<<<< HEAD
  ])
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea

  useEffect(() => {

    const todos = localStorage.getItem("todos");

    if (todos) {

<<<<<<< HEAD
=======
    /// Salvamos o novo estado da lista após buscar no Storage (se existir algo)
=======
  ]);

  useEffect(() => {

    const todos = localStorage.getItem("todos");

    if (todos) {

>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea
      const todosJS = JSON.parse(todos)

      dispatch(
        {
          type: "ADD_TODO",
          payload: todosJS
        }
      );

    }
<<<<<<< HEAD
=======
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea

  }, []); // Executamos 1x ao montar o componente <App />


  useEffect(() => {
<<<<<<< HEAD
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); /// Executamos todas as vezes que "todos" sofrer alteração no estado
=======
<<<<<<< HEAD
    /// Precisamos manter o Storage sempre atualizado
  }, []);
=======
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); /// Executamos todas as vezes que "todos" sofrer alteração no estado
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea

  const handleNewTodo = () => {
    if (newTodo.trim() !== '') {

      const todo = {
        id: Date.now(),/// Forma de gerar uma chave aleátoria
        text: newTodo
      };

<<<<<<< HEAD
=======
<<<<<<< HEAD
      console.log(todo);

      /// Salvamos o novo item na Lista de tarefas
=======
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea
      dispatch(
        {
          type: "ADD_TODO",
          payload: [todo, ...todos]
        }
<<<<<<< HEAD
      );
=======
<<<<<<< HEAD
      )
=======
      );
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea

      setNewTodo("");

    } else {
      alert("Necessário informar alguma descrição");
    }
  };

  const handleRemoveTodo = (id) => {
<<<<<<< HEAD
=======
<<<<<<< HEAD
    console.log(id);
    /// Removemos o item selecionado da lista de Tarefas
=======
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea

    dispatch(
      {
        type: "DELETE_TODO",
        payload: id
      }
    )
<<<<<<< HEAD
=======
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
>>>>>>> d76a26f618fd42ee513c4d54243128283fc56eea
  };


  return (
    <div className='card'>

      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={newTodo}
        onChange={event => setNewTodo(event.target.value)}
      />

      <button onClick={handleNewTodo}>Adicionar Tarefa</button>

      {
        todos.length > 0 ?
          todos.map(todo => (
            <div className='divTodo' key={todo.id}>

              <div className='divText'>
                {todo.text}
              </div>

              <button style={{
                backgroundColor: "#8a6df1",
                color: "#2F2D2D"
              }} onClick={() => handleRemoveTodo(todo.id)}>Remover
              </button>

            </div>
          ))
          : <h3>A lista de tarefas está vazia</h3>
      }

    </div>
  );
}

export default App;