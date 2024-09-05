import styles from "./KeyDataDisplay.module.scss";

type KeyDataDisplayProps = {
  name: string;
  value: number;
};

const KeyDataDisplay = ({ name, value }: KeyDataDisplayProps) => {
  const unit = name === "calories" ? "kCal" : "g";
  return (
    <div className={styles.keyDataDisplay}>
      <div className={styles.imgDiv}>
        <img
          className={styles.img}
          src={`../assets/${name}.svg`}
          alt={`Imaging ${name}`}
        />
      </div>
      <div className={styles.category}>
        <p className={styles.value}>{value.toString() + " " + unit}</p>
        <p className={styles.name}>{name}</p>
      </div>
    </div>
  );
};

export default KeyDataDisplay;
