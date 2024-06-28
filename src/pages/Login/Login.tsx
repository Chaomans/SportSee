import { NavLink, useOutletContext } from "react-router-dom";
import { outletContextType } from "../../utils/types";
import styles from "./login.module.scss";

const Login = () => {
  const { setUserId } = useOutletContext<outletContextType>();
  return (
    <div className={styles.login}>
      <h1 className={styles.h1}>Vous êtes...</h1>
      <div className={styles.users}>
        <NavLink
          to="/monitoring"
          onClick={() => setUserId(12)}
          className={styles.link}
        >
          Karl
        </NavLink>
        <NavLink
          to="/monitoring"
          onClick={() => setUserId(18)}
          className={styles.link}
        >
          Cecilia
        </NavLink>
      </div>
    </div>
  );
};

export default Login;
