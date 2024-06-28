import NavSide from "../../components/NavSide/NavSide";
import NavTop from "../../components/NavTop/NavTop";
import styles from "./rootlayout.module.scss";
import { useState } from "react";
import UserProvider from "../../Providers/UserProvider";
import ActivityProvider from "../../Providers/ActivityProvider";
import PerformanceProvider from "../../Providers/PerformanceProvider";
import AverageSessionsProvider from "../../Providers/AverageSessionsProvider";
import { Outlet } from "react-router-dom";
import { outletContextType } from "../../utils/types";

const RootLayout = () => {
  const [userId, setUserId] = useState<number | null>(null);
  return (
    <div className={styles.rootlayout}>
      <NavTop />
      <div className={styles.content}>
        <NavSide />
        <UserProvider userId={userId}>
          <ActivityProvider userId={userId}>
            <PerformanceProvider userId={userId}>
              <AverageSessionsProvider userId={userId}>
                <Outlet
                  context={{ userId, setUserId } satisfies outletContextType}
                />
              </AverageSessionsProvider>
            </PerformanceProvider>
          </ActivityProvider>
        </UserProvider>
      </div>
    </div>
  );
};

export default RootLayout;
