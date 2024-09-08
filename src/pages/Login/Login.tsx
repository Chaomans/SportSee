import { NavLink } from "react-router-dom";
import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <h1 className={styles.h1}>Vous êtes...</h1>
      <div className={styles.users}>
        <NavLink to="/monitoring/12" className={styles.link}>
          {JSON.parse(import.meta.env.VITE_USE_MOCK) ? "Mars" : "Karl"}
        </NavLink>
        <NavLink to="/monitoring/18" className={styles.link}>
          {JSON.parse(import.meta.env.VITE_USE_MOCK) ? "Paprika" : "Cecilia"}
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
