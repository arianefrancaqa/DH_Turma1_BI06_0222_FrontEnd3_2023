import styles from "./ItemComponent.module.css";

<<<<<<< HEAD
function ItemComponent({ bimestre, ano, disciplinas }) {
=======
function ItemComponent({ ano, disciplinas, bimestre }) {
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
    return (
        <div className={styles.div}>
            <h1>Bimestre {bimestre} - Ano {ano}</h1>
            <h3 className={styles.h3} style={{ color: "#a31b98" }}>Disciplinas</h3>
            {
                disciplinas.map(disciplina => {
                    return (
                        <li key={disciplina}>{disciplina}</li>
                    )
                })
            }
        </div>
    );
}

export default ItemComponent;