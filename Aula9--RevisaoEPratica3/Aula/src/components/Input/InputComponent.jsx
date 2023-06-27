import style from "./InputComponent.module.css";

<<<<<<< HEAD
function InputComponent({ label, type, value, fnOnChange }) {
=======
function InputComponent({ label, type, value, fnOnChange, onKeyUp }) {
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
    return (
        <div className={style.input}>
            <label>{label ?? "Não informado"}</label>
            <br />
            <input
                type={type}
                value={value}
                onChange={fnOnChange}
<<<<<<< HEAD
=======
                onKeyUp={onKeyUp}
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
            />
        </div>
    );
}

export default InputComponent;