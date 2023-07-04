import { useReducer, useState } from 'react';
import './App.css';

import Form from './components/Form';
import ServiceCard from './components/ServiceCard';
import ServiceContext from './contexts/ServiceContext';

function servicesReducer(state, action) {
  switch (action.type) {
    case "ADD_SERVICE":
      return action.payload;
    case "REMOVE_SERVICE":
      return state.filter(service => service.id != action.payload)

    default:
      return state;
  }
}

function App() {

  const serviceDefaultValues = {
    id: 3423345,
    type: "Verificar sinal Wi-Fi",
    time: "40 minutos"
  };

  /* Devemos usar o useReducer ao invés do useState */
  const [services, dispatch] = useReducer(servicesReducer, [serviceDefaultValues])

  useEffect(
    () => {
      /* NOTA: Esse useEffect é executado apenas 1x ao montar o componente App.
      Serve para buscar a lista no Storage e exibir em tela (atualizando o estado de 'services' por meio do dispatch) 
      */
      const services = localStorage.getItem('services');

      /// Se não estiver nullo no Storage
      if (services) {

        /// Convertemos de String/Json para objeto literal JS
        const storedList = JSON.parse(services);

        /// Se a lista não estiver vazia
        if (storedList.length > 0) {

          /// Dispatch: Atualizamos o estado de "services" com os conteúdos presentes no LocalStorage
          dispatch({ type: 'ADD_SERVICE', payload: storedList });
        }
      }
    }, []);

  useEffect(() => {

    /// Armazenamos/Atualizamos a lista no LocalStorage sempre que houver alguma alteração no estado de "list"
    /// NOTA: A ação de "remover" um item fará com que o estado de "list" sofra alteração ao clicar no botão
    localStorage.setItem('services', JSON.stringify(services));

  }, [services]);

  return (

    <ServiceContext.Provider value={{ services, dispatch }}>
      <div className='card'>

        <h1>Novo atendimento</h1>

        <Form />

        <h1>Seus atendimentos</h1>

        {
          services.length > 0 ?
            services.map(service =>
            (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))
            : <h3> A lista de atendimentos está vazia</h3>
        }

      </div>
    </ServiceContext.Provider>

  );
}

export default App;