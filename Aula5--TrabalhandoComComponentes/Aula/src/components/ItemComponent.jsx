import style from "./ItemComponent.module.css";

function ItemComponent({ bimestre, ano, disciplinas }) {
<<<<<<< HEAD
    return (
        <>
            <div>
                <h1 style={{
                    color: "#4D0C5A"
                }}>Bimestre {bimestre} - Ano {ano}</h1>
                <h3 className={style.h3}>Disciplinas</h3>
                {
                    disciplinas.map((disciplina, index) => {
                        return <p key={index}>
                            {disciplina}</p>
                    })
                }
            </div>
        </>
=======

    const h1 = {
        color: "#0E6A28"
    }

    return (
        <div>
            <h1 style={h1}>Bimestre {bimestre} - Ano {ano}</h1>
            <h3 className={style.h3}>Disciplinas</h3>
            {
                disciplinas.map((disciplina, index) => {
                    return (
                        <p
                            key={index}>
                            {disciplina}
                        </p>
                    )
                })
            }
        </div>
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
    );
}

export default ItemComponent;