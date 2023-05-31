import { useState } from 'react';
import './App.css';
import CardComponent from './Components/Card/CardComponent';
import InputComponent from './Components/Input/InputComponent';


function App() {

  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [card, setCard] = useState({});
  const [cards, setCards] = useState([]);

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeImgUrl = (event) => {
    setImgUrl(event.target.value)
  }

  // const handleButtonClick = (event) => {

  //   event.preventDefault()

  //   setCard({
  //     title: title,
  //     imgUrl: imgUrl
  //   });

  //   setTitle("");
  //   setImgUrl("");

  // }

  const regex = /[0-9]/;

  const formValidator = () => {
    ///Validando os Imputs no Form
    if (title.length >= 3 && regex.test(imgUrl)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  const handleButtonAddElement = (event) => {
    event.preventDefault();

    setCard({
      title: title,
      imgUrl: imgUrl
    });
    /// Precisamos 'manter' os itens anteriores, e adicionar +1 um elemento a lista
    /// Copiamos o estado mais recente da lista, antes de adicionar o novo elemento
    const copyCardsList = [...cards];
    copyCardsList.push(card);
    /// Adicionamos o novo elemento
    setCards(copyCardsList) /// Atualizamos o novo estado da lista (usando o objeto de cópia)

    setTitle("");
    setImgUrl("");
    //setIsFormValid(false);
  }

  return (
    <>
      <h2>Template CheckPoint 1</h2>

      <form>

        <InputComponent
          title="Titulo do Anime"
          type="text"
          value={title}
          fnOnChange={handleChangeTitle}
          onKeyUp={formValidator}
        />

        <InputComponent
          title="Img URL"
          type="url"
          value={imgUrl}
          fnOnChange={handleChangeImgUrl}
          onKeyUp={formValidator}
        />

        <button
          onClick={handleButtonAddElement}
          disabled={!isFormValid}
        >Salvar</button>

      </form>

      {
        cards.length > 0 ? /// Se, a lista não estiver vazia...

          cards.map((card) => {
            return <CardComponent
              key={card.title}
              title={card.title}
              imgUrl={card.imgUrl}
            />
          })
          : /// Se não, a lista está vazia...
          <h4>A lista está vazia no momento</h4>
      }
    </>
  )
}

export default App