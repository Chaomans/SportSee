import { NavLink } from "react-router-dom";
import styles from "./navtop.module.scss";
import logo from "/assets/logo_text.svg";

const NavTop = () => {
  return (
    <div className={styles.navtop}>
      <NavLink className={styles.logo} to="/">
        <img src={logo} className={styles.img} alt="SportSee's logo." />
      </NavLink>
      <nav className={styles.nav}>
        <NavLink className={styles.navlink} to="/">
          Accueil
        </NavLink>
        <NavLink className={styles.navlink} to=".">
          Profil
        </NavLink>
        <NavLink className={styles.navlink} to=".">
          Réglage
        </NavLink>
        <NavLink className={styles.navlink} to=".">
          Communauté
        </NavLink>
      </nav>
    </div>
  );
};

export default NavTop;
