import ButtonIcon from "../ButtonIcon/ButtonIcon";
import styles from "./navside.module.scss";

const NavSide = () => {
  return (
    <div className={styles.navside}>
      <div className={styles.buttonIcons}>
        <ButtonIcon name="sport" icon="image" />
        <ButtonIcon name="sport" icon="image" />
        <ButtonIcon name="sport" icon="image" />
        <ButtonIcon name="sport" icon="image" />
      </div>
      <div className={styles.copyright}></div>
    </div>
  );
};

export default NavSide;
