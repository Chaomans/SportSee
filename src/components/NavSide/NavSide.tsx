import ButtonIcon from "../ButtonIcon/ButtonIcon";
import styles from "./navside.module.scss";

const NavSide = () => {
  return (
    <div className={styles.navside}>
      <div className={styles.buttonIcons}>
        <ButtonIcon name="rest" icon="icon_rest.svg" />
        <ButtonIcon name="swim" icon="icon_swim.svg" />
        <ButtonIcon name="bike" icon="icon_bike.svg" />
        <ButtonIcon name="weight" icon="icon_weight.svg" />
      </div>
      <p className={styles.copyright}>Copyright, SportSee 2020</p>
    </div>
  );
};

export default NavSide;
