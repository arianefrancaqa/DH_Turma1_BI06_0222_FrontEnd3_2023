<<<<<<< HEAD
function ButtonComponent({label, fnOnClick}) {
    return(
        <button onClick={fnOnClick}>{label}</button>
    )
    
=======
function ButtonComponent({ label, fnOnClick }) {
    return (
        <button
            onClick={fnOnClick}
        >{label}</button>
    );
>>>>>>> afa423e254ce4f7864299fa0cb47bf5b9fe0027d
}

export default ButtonComponent;