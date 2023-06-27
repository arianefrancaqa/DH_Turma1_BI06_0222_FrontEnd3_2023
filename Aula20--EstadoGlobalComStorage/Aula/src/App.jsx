import './App.css';
import { useState, useEffect, useReducer } from 'react';

<<<<<<< HEAD

=======
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
function App() {

  const [newTodo, setNewTodo] = useState("");

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

  function todoReducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        return action.payload;
      default:
        return state;
    }
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
  }

  const [todos, dispatch] = useReducer(todoReducer, [
    {
      id: 2354345345,
      text: "Aprender useReducer"
    }
<<<<<<< HEAD
  ])

  useEffect(() => {

    /// Buscamos se existe algum dado no Storage

    /// Salvamos o novo estado da lista após buscar no Storage (se existir algo)
=======
  ]);

  useEffect(() => {

    const todos = localStorage.getItem("todos");

    if (todos) {

      const todosJS = JSON.parse(todos)

      dispatch(
        {
          type: "ADD_TODO",
          payload: todosJS
        }
      );

    }
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

  }, []); // Executamos 1x ao montar o componente <App />


  useEffect(() => {
<<<<<<< HEAD
    /// Precisamos manter o Storage sempre atualizado
  }, []);
=======
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); /// Executamos todas as vezes que "todos" sofrer alteração no estado
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

  const handleNewTodo = () => {
    if (newTodo.trim() !== '') {

      const todo = {
        id: Date.now(),/// Forma de gerar uma chave aleátoria
        text: newTodo
      };

<<<<<<< HEAD
      console.log(todo);

      /// Salvamos o novo item na Lista de tarefas
=======
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
      dispatch(
        {
          type: "ADD_TODO",
          payload: [todo, ...todos]
        }
<<<<<<< HEAD
      )
=======
      );
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

      setNewTodo("");

    } else {
      alert("Necessário informar alguma descrição");
    }
  };

  const handleRemoveTodo = (id) => {
<<<<<<< HEAD
    console.log(id);
    /// Removemos o item selecionado da lista de Tarefas
=======

    dispatch(
      {
        type: "DELETE_TODO",
        payload: id
      }
    )
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
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