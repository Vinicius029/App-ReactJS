import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import iconFavorite from "./favorite.png";     /* branco */
import iconUnfavorite from "./unfavorite.png"; /* vermelho */

function Card({ id }) {

    return (
        <section className={styles.card}>
            <Link to={`/watch/${id}`} >
                <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="Capa" className={styles.capa} />
            </Link>
            <figure className={styles.icon}>
                <img src={iconFavorite} alt="Ícone" />
            </figure>
        </section>
    );
}

export default Card;
