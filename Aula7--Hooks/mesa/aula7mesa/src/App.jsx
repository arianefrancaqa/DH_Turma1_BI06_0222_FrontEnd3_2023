import { useState } from 'react'
import './App.css'
import ButtonStateComponent from './components/ButtonStateComponent';
import ItemComponent from './components/ItemComponent';

let contador = 0;

function App() {
  const [item, setItem] = useState([]);

  const adicionaItems = () => {
    console.log("Usuário clicou");
    contador++;
    const newItem = `O item ${contador} foi adicionado à lista! `;
    setItem(v => [...v, newItem]);

  }

  return (
    <div className="container">
      <br />
      <ButtonStateComponent
        fn={adicionaItems}
      />
      <br />
      <ul>
        <ItemComponent
          item={item}
        />
      </ul>
      {/* {
        item.map((itemEach, index) => {
          return <ItemComponent
            key={index}
            {...itemEach}
          />
        })
      } */}
      <br />
    </div>
  )
}

export default App
