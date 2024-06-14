import { Outlet } from "react-router-dom";
import NavSide from "../../components/NavSide/NavSide";
import NavTop from "../../components/NavTop/NavTop";
import styles from "./rootlayout.module.scss";

const RootLayout = () => {
  return (
    <div className={styles.rootlayout}>
      <NavTop />
      <div className={styles.content}>
        <NavSide />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
