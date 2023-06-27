import style from "../Form/FormComponent.module.css";
import CardComponent from "../Cards/CardComponent";
import InputComponent from "../Input/InputComponent";
import CheckboxComponent from "../Checkbox/CheckboxComponent";
<<<<<<< HEAD
=======
import CardsListComponent from "../Cards/CardsListComponent";
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
import { useState } from "react";

function FormComponent() {

    /// Definindo os estados dos elementos do formulário
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImageUrl, setPokemonImageUrl] = useState("");
<<<<<<< HEAD
    const [pokemon, setPokemon] = useState({});
    const [formIsValid, setFormIsValid] = useState(false);

    /// Funções que atualizam os estados do formulário
    const handleChangePokemonName = (event) => {
        setPokemonName(event.target.value);
        formValidator(); /// TODO: Ver outra forma de fazer em tempo real
=======
    // const [pokemon, setPokemon] = useState({});
    const [formIsValid, setFormIsValid] = useState(false);

    const [pokemonList, setPokemonList] = useState([]);

    /// Funções que atualizam os estados do formulário
    const handleChangePokemonName = (event) => {
        setPokemonName(event.target.value);
        //formValidator();
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
    }

    const handleChangePokemonImageUrl = (event) => {
        setPokemonImageUrl(event.target.value);
<<<<<<< HEAD
        formValidator();
    }

    const handleButtonClick = () => {
        setPokemon(
=======
        //formValidator();
    }

    const handleButtonClick = () => {

        /// Populando o array de pokemon (Atualizando o estado do array)

        /// 1ª forma
        /* const pokemonListTemp = [...pokemonList];
        pokemonListTemp.push(
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
            {
                name: pokemonName,
                image: pokemonImageUrl
            }
        )
<<<<<<< HEAD
=======
        setPokemonList(pokemonListTemp); */

        /// 2ª forma
        setPokemonList(
            [
                ...pokemonList, /// Capturando o estado anterior do array
                { /// Adicionando o novo elemento
                    name: pokemonName,
                    image: pokemonImageUrl
                }
            ]
        )

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
        /// Limpando os valores do input
        setPokemonName("");
        setPokemonImageUrl("");
        setFormIsValid(false);
    }

    /// Função que valida os campos do formulário
    const formValidator = () => {
<<<<<<< HEAD
=======

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
        if (pokemonName.length >= 2 && pokemonImageUrl.length > 0) {
            setFormIsValid(true);
        } else {
            setFormIsValid(false);
        }
    }

    return (
        <>
<<<<<<< HEAD
            {/* Card com os dados do formulário */}
            <CardComponent
                name={pokemon.name}
                imageUrl={pokemon.image}
            />
=======
            <CardsListComponent>
                {
                    pokemonList.map(pokemonCard => {
                        return (
                            <CardComponent
                                key={pokemonCard.name}
                                name={pokemonCard.name}
                                imageUrl={pokemonCard.image}
                            />
                        );
                    })
                }
            </CardsListComponent>

>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d

            {/* Card com os campos do formulário */}
            <div className={style.container}>

                <InputComponent
                    label="Seu Pokémon preferido"
                    type="text"
                    value={pokemonName}
                    fnOnChange={handleChangePokemonName}
<<<<<<< HEAD
=======
                    onKeyUp={formValidator}
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
                />

                <InputComponent
                    label="Imagem URL do Pokémon"
                    type="url"
                    value={pokemonImageUrl}
                    fnOnChange={handleChangePokemonImageUrl}
<<<<<<< HEAD
=======
                    onKeyUp={formValidator}
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
                />

                <CheckboxComponent />

                <p>Checkbox(externo): {"Não"}</p>

                <button
                    onClick={handleButtonClick}
                    disabled={!formIsValid}
                >Salvar</button>
            </div>
        </>
    );
}

export default FormComponent;