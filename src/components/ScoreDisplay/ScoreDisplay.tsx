import styles from "./ScoreDisplay.module.scss";

type ScoreDisplayProps = {
  score: number;
};

const ScoreDisplay = ({ score }: ScoreDisplayProps) => {
  return (
    <>
      <svg className={styles.svg} viewBox=" 0 0 36 36">
        <path
          d="M18 2.0845
        a 15.9155 15.9155 0 0 0 0 31.831
        a 15.9155 15.9155 0 0 0 0 -31.831"
          fill="#fff"
          stroke="#ff0101"
          strokeWidth="2"
          strokeDasharray={`${score * 100}, 100`}
          strokeLinecap="round"
          className={styles.circle}
        />
      </svg>
      <p className={styles.title}>Score</p>
      <p className={styles.text}>
        <span className={styles.percentage}>{score * 100}%</span>
        <br />
        de votre
        <br />
        objectif
      </p>
    </>
  );
};

export default ScoreDisplay;
