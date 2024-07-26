import { useActivity } from "../../Providers/ActivityProvider";
import { useAverageSessions } from "../../Providers/AverageSessionsProvider";
import { usePerformance } from "../../Providers/PerformanceProvider";
import { useUser } from "../../Providers/UserProvider";
import ActivityDisplay from "../../components/ActivityDisplay/ActivityDisplay";
import AverageSessionsDisplay from "../../components/AverageSessionsDisplay/AverageSessionsDisplay";
import KeyDataDisplay from "../../components/KeyDataDisplay/KeyDataDisplay";
import PerformanceDisplay from "../../components/PerformanceDisplay/PerformanceDisplay";
import ScoreDisplay from "../../components/ScoreDisplay/ScoreDisplay";
import styles from "./monitoring.module.scss";

const Monitoring = () => {
  const user = useUser();
  const activity = useActivity();
  const performance = usePerformance();
  const average = useAverageSessions();

  return (
    <div className={styles.monitoring}>
      <div className={styles.greets}>
        {user.data && (
          <>
            <h1>
              Bonjour{" "}
              <span className={styles.firstname}>
                {user.data.userInfos.firstName}
              </span>
            </h1>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
          </>
        )}
      </div>
      <div className={styles.data}>
        <div className={styles.activity}>
          <ActivityDisplay activity={activity} />
        </div>
        <div className={styles.performance}>
          <PerformanceDisplay performance={performance} />
        </div>
        <div className={styles.average}>
          <AverageSessionsDisplay average={average} />
        </div>
        {user.data && (
          <div className={styles.score}>
            <ScoreDisplay score={user.data.score ?? user.data.todayScore} />
          </div>
        )}
        <div className={styles.KeyData}>
          {user.data && (
            <>
              <KeyDataDisplay
                name="calories"
                value={user.data.keyData.calorieCount}
              />
              <KeyDataDisplay
                name="proteines"
                value={user.data.keyData.proteinCount}
              />
              <KeyDataDisplay
                name="glucides"
                value={user.data.keyData.carbohydrateCount}
              />
              <KeyDataDisplay
                name="lipides"
                value={user.data.keyData.lipidCount}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
