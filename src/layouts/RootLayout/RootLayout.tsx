import NavSide from "../../components/NavSide/NavSide";
import NavTop from "../../components/NavTop/NavTop";
import styles from "./rootlayout.module.scss";
import UserProvider from "../../Providers/UserProvider";
import ActivityProvider from "../../Providers/ActivityProvider";
import PerformanceProvider from "../../Providers/PerformanceProvider";
import AverageSessionsProvider from "../../Providers/AverageSessionsProvider";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className={styles.rootlayout}>
      <NavTop />
      <div className={styles.content}>
        <NavSide />
        <UserProvider>
          <ActivityProvider>
            <PerformanceProvider>
              <AverageSessionsProvider>
                <Outlet />
              </AverageSessionsProvider>
            </PerformanceProvider>
          </ActivityProvider>
        </UserProvider>
      </div>
    </div>
  );
};

export default RootLayout;
