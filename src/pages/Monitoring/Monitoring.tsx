import { useUser } from "../../Providers/UserProvider";
import KeyDataDisplay from "../../components/KeyDataDisplay/KeyDataDisplay";
import styles from "./monitoring.module.scss";

const Monitoring = () => {
  const { data: user, isPending: userIsPending, error: userError } = useUser();

  return (
    <div className={styles.monitoring}>
      <div className={styles.greets}>
        {user && (
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
        <div className={styles.KeyData}>
          {user && (
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
