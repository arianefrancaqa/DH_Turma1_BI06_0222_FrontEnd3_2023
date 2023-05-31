import style from "./CardComponent.module.css";

function CardComponent({ title, imgUrl }) {

    const imgUrlDefault = "https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg";

    return (
        <div className={style.div}>
            <h2 className={style.title}>{title ?? "Indefinido"}</h2>
            <img className={style.img} src={imgUrl ?? imgUrlDefault} alt="img" />
        </div>
    );
}

export default CardComponent;