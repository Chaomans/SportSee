import { NavLink } from "react-router-dom";
import styles from "./notFound.module.scss";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.h1}>404</h1>
      <p className={styles.errorMsg}>Désolé, cette page n'existe pas...</p>
      <NavLink to={"/"} className={styles.link}>
        Accueil
      </NavLink>
    </div>
  );
};

export default NotFound;
