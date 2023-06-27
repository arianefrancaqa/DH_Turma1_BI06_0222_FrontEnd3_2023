<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useReducer } from 'react';
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
import './App.css';

import Form from './components/Form';
import ServiceCard from './components/ServiceCard';

<<<<<<< HEAD
=======
import ServiceContext from "./contexts/ServiceContext";




function servicesReducer(state, action) {

  switch (action.type) {

    case "ADD_SERVICE":
      return action.payload;

    default:
      return state;
  }

}

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
function App() {

  const serviceDefaultValues = {
    id: 3423345,
    type: "Verificar sinal Wi-Fi",
    time: "40 minutos"
  };

<<<<<<< HEAD
  /* Devemos usar o useReducer ao invés do useState */
  const [services, setServices] = useState([serviceDefaultValues])

  return (

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
=======
  const [services, dispatch] = useReducer(servicesReducer, [serviceDefaultValues])

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
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

  );
}

export default App;