import { NavLink } from "react-router-dom";
import styles from "./navtop.module.scss";

const NavTop = () => {
  return (
    <div className={styles.navtop}>
      <div className={styles.logo}>
        <img src="" alt="SportSee's logo." />
      </div>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/">Profil</NavLink>
        <NavLink to="/">Réglage</NavLink>
        <NavLink to="/">Communauté</NavLink>
      </nav>
    </div>
  );
};

export default NavTop;
